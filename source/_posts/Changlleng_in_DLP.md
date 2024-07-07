---
abbrlink: 2r3d326f
categories:
- Computer Vision
cover: https://d3i71xaburhd42.cloudfront.net/956a55d67a95509b5babfec73b0329cf936fd261/2-Figure1-1.png
date: 2024-06-12 15:39:12
tags:
- AI
- Computer Vision
- Algorithms
- Model
- Bugs
title: Những thử thách gặp phải trong dự án Detect License Plate
---


# Giới thiệu.

## Bối cảnh.

![lab](https://www.tugraz.at/fileadmin/_processed_/6/1/csm_CDL_Computer_Vision_Banner_by_Lunghammer_tugraz_f8529fe874.jpg)

Mình đang tham gia một Lab về thị giác máy tính (Computer Vision) tại C7, Đại học Bách Khoa Hà Nội. Bắt đầu gia nhập Lab vào kỳ 1 năm 3. Trong quá trình làm việc và học tập tại đây,mình đã có cơ hội tham gia vào nhiều buổi seminar thú vị và đóng góp vào các dự án nghiên cứu khác nhau. Những thách thức và khó khăn không ít lần đã khiến mình phải nỗ lực và dành rất nhiều thời gian để tìm ra giải pháp. Đặc biệt, trong bài viết này, mình muốn chia sẻ về những khó khăn mà mình đã gặp phải trong dự án Detect License Plate – một dự án kéo dài lâu nhất kể từ khi mình bắt đầu tham gia hoạt động tại Lab. Những kinh nghiệm và bài học quý báu từ dự án này đã giúp mình trưởng thành hơn trong lĩnh vực thị giác máy tính.

## Về dự án. 
![project](https://arsa.technology/wp-content/uploads/2022/09/2.-automatic-license-plate-recognition-system.png)


Hệ thống Detect License Plate (DLP) là một giải pháp tiên tiến được tinh chỉnh để theo dõi và giám sát lưu lượng xe đi vào và ra khỏi một khu vực cụ thể. DLP không chỉ sử dụng công nghệ nhận diện biển số xe mạnh mẽ, mà còn tích hợp mô hình YOLO để tự động ghi lại thông tin chi tiết về các phương tiện tham gia giao thông, bao gồm biển số, trạng thái, và thời gian thực.

# Flask lại thẻ, cài hệ điều hành cho Jetson nano.

Do phải làm việc với thiết bị phần cứng, cụ thể là một camera hoạt động tách biệt như một máy tính mini. Để làm việc với camera này trước tiên ta phải cài lại hệ điều hành cho nó. Không giống như các cách cài hệ điều hành thông thường ta phải thông qua một thiết bị là một thanh đọc thẻ (các anh hay gọi là Flask) phòng trường hợp là cứ cam lỗi là lại lôi ra để flask lại ngày flask vài lần là bình thường. Cái này ban đầu mới lạ nên cài hơi khó thôi. Sau 1 buổi train thì mình đã cài ok.

Đây là cái thiết bị đọc

![aaa](https://phukienpc.vn/wp-content/uploads/2020/03/dau-doc-the-card-reader-all-in-one-ssk-scrm025-phukienpc-vn-2.jpg)

# Cài các thư viện riêng cho Jetson nano.😙

Đây là công việc cực kỳ mệt mỏi do không giống với các thư viện thông thường hoạt động trên máy và code thông thường. Camera chạy hệ điều hành riêng đòi hỏi phải có những thư viện hỗ trợ dành riêng cho nó. Như numpy thông thường ko dùng được cho cam ta phải tự lên trang chủ của jetson nano để tìm tài liệu và tìm đúng thư viện đó ở một nơi nào đó trên github và cài vào.

# Luyện lại model bằng mô hình YoLo. 

Xem video một ông anh ấn độ và làm theo nhưng bugs tùm lum.

Đây là bước vất vả nhất, đã thử nhiều cách nhưng vẫn không thể convert được. Cuối cùng check tỷ mỉ từng bước thì phát hiện ra phải để numclass = 1. Do bài toán của mình chỉ có 1 lớp car :) Suy mất 1 tuần.

# Tiền xử lý ảnh - Đọc text trên biển bằng OCR 🕵️

## Luyện model
Cũng vất cả không kém so với các bước ở trên. Để model xử lý ảnh được tốt nhất thì đầu vào phải tốt. Bước này dùng 7749 model để áp dụng: model phát hiện biển, cắt biển, xoay biển, đánh giá biển, embedding ảnh, Cắt chữ trong ảnh....

## Chuẩn bị dữ liệu

Tại bước ngày thầy cũng yêu cầu cực kỳ ngặt nghèo từ việc đi chuẩn bị bộ dữ liệu. Dữ liệu phải đi thu thập từ thực tế là các ảnh biển số xe máy, ô tô. Số lượng cần là 3000 ảnh biển. Thầy còn bảo tài trợ để đi thu thập dữ liệu hiếm cơ :>

## Gán nhãn
Ở bước gán nhãn phải thực hiện gán tọa độ 4 góc của biển vào 1 file txt và file ảnh đi kèm. Tuy nhiên thay vì làm thủ công ta có công cụ hỗ trợ sẵn là Robotflow. Tuy nhiên gắn nhãn 2000 ảnh bước đầu vẫn rất suy nhé.

## Chuẩn hóa đầu vào
Tiếp tục chuẩn hóa đầu vào như crop, xử lý nhiễu, tăng sáng, tăng cường ảnh, xoay ảnh về thẳng

## Xoay ảnh

Ở bước xoay ảnh, ngoài việc áp dụng thuật toán để bắt các góc và xoay ngẫu nhiên từ các góc đó. Thì vấn đề là làm thế nào để biết được là nó có đang xoay đúng hay không.

Cách đơn giản nhất là dùng 1 ảnh chuẩn, xoay 1 góc bất kỳ (xoay nhiều góc dùng for để test). Dùng thuật toán xoay ảnh của mình xoay ảnh đó rồi embedding 2 ảnh so sánh dựa trên độ tương đồng. Ở đây ko thể so sánh 2 ảnh mặc dù đầu vào là vector vì ảnh bị crop. Và cái nữa là lại phải train một model ra file .pt mới do dữ liệu thu thập không có ảnh sát. Again 🙂




# Thiết kế database cho camera

Ngoài việc phải làm quen với db mới sqlite - một db nhỏ nhặn với các tính năng phù hợp cho camera ram yếu. Các việc khác từ code đến settings đều đơn giản. 


# Thực hiện xử lý độ chễ cho video

**Vấn đề:** Do quá trình truyền frame từ camera khi sử dụng thực tế đến App có thể bị
gián đoạn do tốc độ mạng, camera bị nhiễu do hoạt động trong môi trường có nhiều
kim loại. Việc cài tiến chất lượng camera hoặc tăng RAM rất khó để thực hiện.

→ Vậy làm thế nào để frame có thể được xử lý 1 cách đều đặn và liên tục


<div align="center">
  <font color='#FF6666'> Mình đã đề xuất nhiều giải pháp tuy nhiên đều chưa tối ưu.</font>
</div>

>**Cách 1:** Sử dụng 1 hàng đợi nạp frame vào hàng đợi đến một mức độ nhất định thì
chuyển cho App xử lý.
>→ Sau khi hàng đợi đầy sẽ nạp lại cho App xử lý. Sau khi hàng đợi trống phải chờ 1
thời gian để frame nạp đầy hàng đợi.

>**Cách 2:** Sử dụng 1 hàng đợi và 1 stack, thực hiện xử lý song song. Frame nạp liên tục
vào hàng đợi và stack. App đọc trực tiếp và liên tục xử lý frame sinh ra từ queue. Sau
khi hàng dợi trống thì sẽ thực hiện đọc từ stack
>→ Không phải chờ để nạp hàng đợi. Tuy nhiên tốn bộ nhớ hơn. Nhưng fps tăng gấp
đôi, frame có thể bị lặp - xử lý lại. Sau 1 quãng nhất định thì xóa hết phần tử trong
stack.


> **Cách 3:** sử dụng 2 hàng đợi.
>Một frame tương đương với 1 ảnh.



