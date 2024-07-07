---
abbrlink: tr6d096f
categories:
- AWS
- Tips
cover: https://www.drivereasy.com/wp-content/uploads/2019/04/audio-not-running.jpg
date: 2024-06-29 01:35:12
tags:
- EC2
- Start
- Tricks lỏ
title: Cách bật âm thanh trên máy chủ ảo EC2 Windown
---


# Lời mở đầu

## EC2
Là một máy chủ ảo được tạo bởi AWS. Mình có thể tự cấu hình tùy chỉnh các thông số của mày theo ý muốn. Tất nhiên là máy ảo ngon thì phải tiền nhiều.

## Tại sao các máy ảo lại tự động tắt âm thanh 
Các máy ảo có thể tự động tắt âm thanh do một số lý do chính như cấu hình thiết bị ảo không kích hoạt âm thanh, driver âm thanh không tương thích hoặc chưa cài đặt, chính sách bảo mật ngăn chặn âm thanh, xung đột phần mềm, hoặc hệ thống giới hạn tài nguyên và tự động tắt các chức năng không cần thiết như âm thanh để tiết kiệm tài nguyên.
# Vậy phải làm thế nào

Dưới đây sẽ là các hướng dẫn chi tiết để bạn mở âm thanh trên máy ảo

## Kết nối tới máy ảo EC2 Windown

Giao diện máy ảo
![](\img\Enable_Soud_EC2\1.png)

Kiểm tra xem âm thanh đã có hay chưa

![](\img\Enable_Soud_EC2\2.png)

Âm thanh bị khóa 

## Vào Computer Management

Tại ô windown chọn **Computer Management**

![](\img\Enable_Soud_EC2\3.png)

Tại giao diện Computer Management --> Services and Aplications --> Services

![](\img\Enable_Soud_EC2\4.png)

## Start Service Windown Audio
Tìm Service Windown Audio
![](\img\Enable_Soud_EC2\5.png)


![](\img\Enable_Soud_EC2\6.png)

Chọn Start 

![](\img\Enable_Soud_EC2\7.png)

Âm thanh được kích hoạt thành công
![](\img\Enable_Soud_EC2\8.png)

Sau một sô thao tác máy chủ EC2 ảo của bạn đã bật thành công âm thanh.

