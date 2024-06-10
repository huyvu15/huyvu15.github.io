---
abbrlink: 4c6d962f
categories:
- Linux
- kali
cover: https://t.mwm.moe/fj/?28
date: 2023-10-10 22:35
tags:
- Linux
title: Cách đổi ngôn ngữ của Kali Linux sang tiếng Trung

---

### Lời nhắc nhở thân thiện

Chụp ảnh nhanh trước khi sửa đổi để tránh các sự cố do thao tác sửa đổi không chính xác gây ra!

1. Mở thiết bị đầu cuối

2. Mở cài đặt

 đi vào

 ```
 dpkg-reconfigure locales
 ```

3. Sửa đổi cài đặt

 Thay đổi `en_US.UTF-8 UTF-8` thành không được chọn

 - Những cái bên dưới có `*` đã được kiểm tra.
 - Sử dụng phím mũi tên lên xuống để di chuyển dấu chấm màu đỏ (biểu thị tùy chọn hiện đang được chọn) sang `en_US.UTF-8 UTF-8` và nhấn dấu cách để biểu thị không được chọn/đã chọn
 - Dùng dấu cách để kiểm tra 2 tùy chọn `[ ]zh_CN.GBK_GBK` và `[ ] zh-CN.UTF-8.UTF-8`. Một số máy ảo ở đây không tìm thấy `[ ]zh_CN.GBK_GBK`. bên cạnh nó. Nếu bạn không thể tìm thấy nó, hãy quên nó đi.
 - Nhấn `enter` cho `ok` và chọn ngôn ngữ `zh_CN.UTF-8`

4. Khởi động lại để có hiệu lực

 Sau khi khởi động lại sẽ có thông báo khuyên bạn nên chọn `Giữ tên cũ`. Sau này gõ code bằng tiếng Anh chắc chắn sẽ tiện hơn nhiều so với gõ tiếng Trung!

 ```
 reboot
 ```





---

Văn bản gốc: https://blog.csdn.net/u011027547/article/details/123344249