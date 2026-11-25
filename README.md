# THEO BƯỚC CHÂN NGƯỜI – Triển lãm tư liệu lịch sử trực tuyến

Website tĩnh (HTML5 + CSS3 + JavaScript thuần), không cần cài đặt thêm gì.

## Cách chạy bằng Visual Studio Code (Live Server)
1. Giải nén file ZIP, ví dụ vào `D:\website-bac-ho`.
2. Mở Visual Studio Code → **File → Open Folder…** → chọn thư mục `website-bac-ho` (thư mục chứa `index.html`).
3. Vào **Extensions** (Ctrl+Shift+X), tìm **Live Server** (tác giả Ritwick Dey) và nhấn **Install**.
4. Trong cột Explorer, nhấp chuột phải vào `index.html` → **Open with Live Server** (hoặc nhấn nút **Go Live** ở góc dưới bên phải).
5. Trình duyệt tự mở địa chỉ dạng `http://127.0.0.1:5500/index.html`.
> Cần có Internet để tải font chữ (Google Fonts). Nếu không có mạng, website vẫn chạy với font dự phòng (Georgia / Segoe UI).

## Cấu trúc thư mục
```
website-bac-ho/
├── index.html                 Trang chủ / hero giới thiệu + 8 thẻ mốc lịch sử
├── pages/                     8 mốc lịch sử + trang nguồn (nguon-tu-lieu.html)
├── css/style.css              Giao diện, màu sắc, hiệu ứng
├── css/responsive.css         Tối ưu máy tính bảng, điện thoại
├── js/main.js                 Menu, lightbox, thanh tiến trình, chuyển trang, báo lỗi ảnh
├── js/animation.js            Hiệu ứng cuộn (Intersection Observer), parallax
└── images/page-1 … page-8/    22 ảnh trích từ file Word, đã nén (JPEG, tối đa 1600px)
```

## Chỉnh sửa
- **Màu sắc**: các biến ở đầu `css/style.css` (`--red`, `--gold`, `--cream`, `--paper`…).
- **Thay ảnh**: chép ảnh mới đè lên cùng tên tệp trong `images/page-N/`.
- **Đổi chú thích/nguồn ảnh**: tìm thẻ `<figcaption>` trong file HTML tương ứng.
- **Bổ sung nguồn**: mở `pages/nguon-tu-lieu.html`, các mục ghi “cần bổ sung” là chỗ tài liệu chưa có thông tin.
- Hiệu ứng: thêm class `rv rv-l` (trượt từ trái), `rv rv-r` (từ phải), `rv rv-up` (hiện lên) cho phần tử bất kỳ. Website tự tắt chuyển động nếu người xem bật “giảm chuyển động” trong hệ điều hành.

## Những điểm cần bạn kiểm tra
Xem mục “Mục cần bạn kiểm tra / bổ sung” cuối trang `nguon-tu-lieu.html`. Tóm tắt:
1. Tài liệu không ghi tác giả/đường dẫn cho từng ảnh, nên mỗi ảnh được ghi “cần bổ sung”. Không tự tạo URL.
2. Phân loại ảnh (ảnh tư liệu / tranh minh họa / tranh AI) là đánh giá bằng mắt, cần bạn xác nhận.
3. Hình mốc 3 (hội nghị thành lập Đảng) và mốc 6 (cờ trên nóc hầm) có chú thích “Ảnh tư liệu” nhưng trông như tranh vẽ.
4. Chú thích ảnh gốc viết không dấu (ví dụ “Noi Bac sinh”) được khôi phục dấu tiếng Việt; vài chú thích có thể hiểu nhiều cách (ví dụ “noi kho cua dong bao” → “Nỗi khổ của đồng bào”).
5. Ngày 30/4/1975 (mốc 7) lấy theo yêu cầu của bạn; tài liệu Word chỉ ghi “Mùa xuân năm 1975”.
6. Không có ảnh trong Word cho: Quảng trường Ba Đình 2/9/1945, hang Cốc Bó, xe tăng vào Dinh Độc Lập, nhà sàn. Các chỗ này không dùng ảnh thay thế.
7. Hiệu ứng “đen trắng → màu” ở mốc 7 chỉ là lớp phủ tông màu mờ dần lên ảnh gốc, không phải tô màu lại ảnh.
