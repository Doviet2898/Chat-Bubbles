# Chat Bubbles

![cover](./cover.jpg)

Công cụ tạo bong bóng chat cho YouTube với hiệu ứng gõ chữ và giao diện chat được mô phỏng. Lý tưởng cho việc tạo video hướng dẫn, demo và nội dung giáo dục với hiệu ứng chat trực quan.

## Tính năng

- Hiệu ứng gõ chữ với hiệu ứng hoạt hình mượt mà
- Tùy chỉnh màu nền, màu bong bóng chat và màu viền
- Giao diện đơn giản, dễ sử dụng
- Khả năng ẩn/hiện thanh công cụ
- Tạo nhiều bong bóng chat liên tiếp
- Tự động xóa tin nhắn cũ sau 5 giây
- Phù hợp cho việc quay màn hình và tạo video hướng dẫn

## Yêu cầu hệ thống

- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

## Cài đặt

1. Clone repository về máy của bạn:
   ```bash
   git clone https://github.com/your-username/Chat-Bubbles.git
   cd Chat-Bubbles
   ```

2. Cài đặt các dependencies:
   ```bash
   npm install
   # hoặc
   yarn
   ```

3. Chạy ứng dụng trong môi trường phát triển:
   ```bash
   npm run dev
   # hoặc
   yarn dev
   ```

4. Mở trình duyệt và truy cập địa chỉ được hiển thị trong terminal (thường là http://localhost:5173)

## Hướng dẫn sử dụng

### Cách tạo bong bóng chat

1. Nhập nội dung tin nhắn vào ô nhập liệu ở dưới cùng
2. Nhấn Enter để gửi tin nhắn và tạo bong bóng chat mới
3. Bong bóng chat sẽ xuất hiện với hiệu ứng hoạt hình
4. Tin nhắn sẽ tự động biến mất sau 5 giây

### Tùy chỉnh màu sắc

1. Sử dụng bảng màu bên phải để tùy chỉnh:
   - **Background**: Màu nền của toàn bộ ứng dụng
   - **Fill**: Màu nền của bong bóng chat
   - **Stroke**: Màu chữ và viền của bong bóng chat

2. Các thay đổi màu sắc sẽ được áp dụng ngay lập tức cho cả bong bóng chat hiện tại và mới

### Ẩn/hiện thanh công cụ

- Sử dụng nút "Hide Toolbars" ở góc trên bên trái để ẩn các thanh công cụ tùy chỉnh màu sắc
- Khi ẩn thanh công cụ, giao diện sẽ gọn gàng hơn, phù hợp cho việc quay màn hình
- Nhấn "Show Toolbars" để hiển thị lại các thanh công cụ

### Quay màn hình

1. Tùy chỉnh màu sắc theo ý muốn
2. Ẩn thanh công cụ bằng cách nhấn "Hide Toolbars"
3. Sử dụng phần mềm quay màn hình (như OBS Studio, Camtasia, hoặc công cụ quay màn hình tích hợp) để ghi lại quá trình chat
4. Nhập và gửi tin nhắn để tạo hiệu ứng chat trong video

## Các lệnh hữu ích

```bash
# Chạy ứng dụng trong môi trường phát triển
npm run dev

# Build ứng dụng cho môi trường production
npm run build

# Xem trước bản build
npm run preview
```

## Công nghệ sử dụng

- React
- TypeScript
- Framer Motion (cho hiệu ứng hoạt hình)
- React Color (cho bảng chọn màu)
- Vite (công cụ build)

## Giấy phép

Apache-2.0 License