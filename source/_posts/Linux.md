---
title: Linux Command
tags:
  - Linux
categories:
  - Linux
abbrlink: 8c7613a5
date: 2024-04-07 13:21:31
cover: https://i.ytimg.com/vi/G23ef2D-qrY/maxresdefault.jpg
---

# Linux Intro /

Linux là một hệ điều hành mã nguồn mở, được sử dụng rộng rãi trên khắp thế giới. Với tính ổn định, hiệu quả và tính bảo mật cao, Linux đã trở thành lựa chọn hàng đầu cho các máy chủ, siêu máy tính, và các thiết bị IoT. Linux cung cấp khả năng tùy chỉnh cao và hỗ trợ đa dạng các công cụ lập trình, từ đó cho phép người dùng và các nhà phát triển tạo ra các giải pháp phù hợp với nhu cầu đặc thù của họ.


Đối với các data engineer, Linux đóng một vai trò thiết yếu do nhiều lý do. Đầu tiên, hầu hết các công cụ xử lý dữ liệu lớn và phân tích dữ liệu như Hadoop, Apache Spark, và các dịch vụ dựa trên đám mây chủ yếu được phát triển và tối ưu hóa cho Linux. Sự tương thích này giúp data engineer dễ dàng triển khai và quản lý các hệ thống phức tạp, đồng thời tận dụng hiệu quả các tài nguyên hệ thống.

## Linux

Dưới đây là tổng hợp lệnh linux hữu ích mà mình biết:


> Pwd: return path directory present 
> Ls -r : show folder with tree format
> Whoami: hiển thị thông tin người dùng máy
> Date: hiển thị ngày, thời gian hiện tại
> Find . -name “a.txt”: tìm file trong foldel hiện tại
> Mkdir test: tạo folder test
> Rm -I <file_name>: delete all content in file
> Touch a.txt b.txt c.txt: tạo các file liên tiếp
> Để copy file: cp -r <đường dẫn>/ /<đường dẫn>/: copy file từ … đến …
> Mv <đường dẫn> /  /<đường dẫn>/: di chuyển file từ … đến … 
> Chmod : những lệnh như này là để thay đổi quyền của file
> Cat <file_name>: show file
> More numbers.txt: show file page-by-page: show từng trang 1
> Wc pets.txt: đếm số từ
> Sort pets.txt: sort folow alphabets
> Uniq pets.txt: lọc dòng lặp lại
> Grep: trả về dòng tron gfile matching với pattern, orr print red color for it
> Có rất nhiều lệnh grep để show những kết quả như mình muốn (same like in sql)
> Grep ch people.txt: show những dòng nào có ch ở trong đó
> Grep -I ch people.txt: show những dòng nào có ch ở trong đó nhưng ch nằm ở đầu
> Cut: cắt file(search thôi)

## Networking Commands

> Hostname: show tên máy cộng thư mục gốc
> Hostname -i: show ip of hostname
> Ifconfig: 
> Curl: transfer data to and from URL
> Curl www.google.com: show ra đoạn html
> Download file from URL: wget https://www....
> Zip -r notes.zip notes: zip file
> Unzip
> Echo 'add cai nay vao file' >> hello_world.sh



`tail -f xxx.log` 



