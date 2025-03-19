import { AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import './App.css'
import Bubble from './bubble'
import BubbleInput from './bubble-input'
import Chat from './chat'
import useMessages from './use-messages'
import { SketchPicker } from 'react-color'
function App() {
  const [messages, addMessage] = useMessages([])
  const [newMessage, setNewMessage] = useState('')
  const [fillColour, setFillColour] = useState('#eee')
  const [strokeColour, setStrokeColour] = useState('#000')
  const [backgroundColour, setBackgroudColour] = useState('#00a000')
  const [isChecked, setIsChecked] = useState(false)

  const handleSubmit = useCallback(
    (bubbleHeight: number) => {
      if (newMessage.length > 0) {
        addMessage({
          id: +new Date(),
          text: newMessage,
          height: bubbleHeight
        })
        setNewMessage('')
      }
    },
    [newMessage, messages]
  )

  const handleFillColourChange = (color: { hex: string }) => {
    setFillColour(color.hex)
    console.log(color)
  }

  const handleStrokeColourChange = (color: { hex: string }) => {
    setStrokeColour(color.hex)
    console.log(color)
  }

  const handleBackgroundColourChange = (color: { hex: string }) => {
    setBackgroudColour(color.hex)
  }

  const lastMessage = messages[messages.length - 1]
  const dy = lastMessage ? lastMessage.height : 0

  return (
    <div className="App" style={{ backgroundColor: backgroundColour }}>
      <label className="toggle-toolbars">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {isChecked ? 'Show Toolbars' : 'Hide Toolbars'}
      </label>

      <Chat>
        <AnimatePresence>
          {messages.map(m => (
            <Bubble
              backgroundColor={backgroundColour}
              key={m.id}
              id={m.id}
              dy={dy}
              fillColour={fillColour}
              strokeColour={strokeColour}
            >
              {m.text}
            </Bubble>
          ))}
        </AnimatePresence>
        <BubbleInput
          value={newMessage}
          onChange={setNewMessage}
          onSubmit={handleSubmit}
          fillColour={fillColour}
          strokeColour={strokeColour}
        />
      </Chat>

      {!isChecked && (
        <div className="picker">
          <div>
            <p>Background</p>
            <SketchPicker
              color={backgroundColour}
              onChange={handleBackgroundColourChange}
            />
          </div>

          <div>
            <p>Fill</p>
            <SketchPicker
              color={fillColour}
              onChange={handleFillColourChange}
            />
            <p>Stroke</p>
            <SketchPicker
              color={strokeColour}
              onChange={handleStrokeColourChange}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
