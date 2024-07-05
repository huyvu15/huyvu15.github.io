---
title: Dataware House
tags:
  - Dataware House
  - Big Data
  - ETL
categories:
  - Data
abbrlink: 83dc13a5
date: 2024-04-07 13:21:31
cover: https://www.interviewbit.com/blog/wp-content/uploads/2022/06/Cover-Data-Warehouse-Architecture.png
---


# Tuần 1 /
Đến tâm sự với thầy về học tập, kinh nghiệp, thị trường lao động. Xong nghỉ sớm

# Tuần 2 /

## Data Lake

Big data nói nhiều đến data lake
Big data phải chọn dạng tree, graph để xử lý.
Big data liên quan đến phân tán. Viết 1 program để chia dữ liệu về 3 nơi. Làm về phân tán phải nhiều node.(chia để .zip thì khó). 
Dữ liệu đẩy vào data lake phải là ELT: Do lấy 1 file to đùng về thì làm sao mà transfrom được.

- E: get data
- T: query data
- L: save it

Làm về big data phải biết: giảm dung lượng nhưng tăng chất lượng của file. Ví dụ ảnh lấy về tăng chất lượng bằng cách gán nhãn(gắn tên ảnh là con mèo) – thế là đã xong 1 bước tăng chất lượng.
Một số ví dụ: 

-	Khi tìm con dog trên google thì nó load vèo vèo(tại đã gán nhãn rồi). Search theo kiểu text, ảnh, graph.
-	User chat with friend about a iphone. Then facebook đề xuất quảng cáo iphone.
-	Làm thế nào để khai thác Big data: BI, graph, truy vấn, …

Đừng dùng tools cho BI, hãy trực quan hóa dữ liệu cho tree, graph.
## Data Warehourse
Cái dataware hourse thường là ETL

## Phân tích dữ liệu
2022 bùng nổ phân tích dữ liệu. Có 3 lý do:

**Việt Nam có dữ liệu:**

1.	Kết quả của quá trình 20 năm chuyển đổi số.
2.	Data từ thương mại điện tử rất nhiều
3.	Trong các doanh nghiệp 20 năm vừa qua ko có doanh nghiệp nào không có phần mềm quản lý.
4.	Dữ liệu trở thành 1 nguồn tài nguyên.

**Bank:**

-	Ban đầu không cho cá nhân vay.
-	Có thu nhập là được vay.
-	Có tài khoản là được vay.  Dẫn đến rủi ro cao

**Hệ thông công nghệ thông tin có bước đột phá:**
2024 thời tới 
-	Phải biết nhiều chút mới kiếm được xèng.
2024++ Trí tuệ nhân tạo
-	BI become Microsoft Frabic
-	Copilot
-	Meta data
-	Layoff

>Data presentation
>Data exploration   

## ETL 

### Extract là quy trình có thể bao gồm
- Web scrapy
- Biology
- APIs
- Database quering
- Edge Computing
- Trasfrom là quy trình có thể bao gồm
- Read file
- Caculates
- Write


# Tuần 3

- Dữ liệu sống

## Sàn thương mại lớn

- Amazon
- Dữ liệu của công ty thực tập
- Data Pipeline


# Tuần 4
## OLTP Cube
Dim: Cung cấp các thông tin ngữ cảnh cho bảng face
Fact: Có độ đo có thể tính toán được dựa trên các dim
## Dim and Fact table
-	Doanh thu:

Khách hàng, sản phẩm

-	Quảng cáo

Sản phẩm, đối tượng tiếp cận, thị trường, địa điểm, khuyến mãi, mô tả

-	Số lượng khách hàng
Khách hàng

-	Số lượng sản phẩm

Sản phẩm, vận chuyển, mô tả, ..

-	Xếp hạng,

Sản phẩm, khách hàng
## Các khái niệm
Chủ điểm: khi phân tích về chủ điểm gì đấy có thể có nhiều Fact

Chủ điểm như 1 data mart

## Fact: 

Measure: chỉ số tính gián tiếp từ dữ liệu


# Tuần 5
Join làm truy vấn chậm
Cùng là 1 câu lệnh truy vấn thì lệnh chạy trên sql sẽ chạy chậm hơn trên oltp	 	
Olap là khái niệm nhiều nơi
Đầu tiên là chiều khái niệm, model logic, model 

- Phân tích OLAP nhiều chiều: chặt chém các khối dữ liệu, có nhiều FACT, nhiều thông số trong đấy, số lượng câu truy vấn tại 1 thời điểm cần nhiều

Data aggregating: tổng hợp dữ liệu, tăng hiệu suất database



# Tuần 6: Thực hành
Từ cột về hàng là unpivot

