---
title: Terraform
tags:
  - Terraform
  - AWS
  - Cloud Providers
categories:
  - Terraform
cover: >-
  https://community-cdn-digitalocean-com.global.ssl.fastly.net/d9Dw3GPVqTjMXLVuGKaJ4SuE
abbrlink: adaea10g
date: 2024-06-09 20:11:32
---

# Terraform CLI /
## Command base
Đã dùng terraform thì không update bằng tay nếu không sẽ sửa lỗi rất là mệt, tác động vào resource đã deploy thì thôi 😊	

-	Lệnh generate ssh key-pair tự động

> ssh-keygen -t rsa -b 4096 -C "caotruongson16052003@gmail.com"

-	Khởi tạo dự án tf

> terraform init

-	Lên kế hoạch xem tf làm gì với resource, thường dùng để check, lưu ý màu đỏ phải cần thận và phải đọc rõ note

> Terraform plan 

-	Apply triển khai lên aws account

> Terraform apply

Các trường hợp dẫn tới thay đổi instace: đổi aim, instance type,..

-	Hủy mọi resource tạo bằng terraform

> Terraform destroy

Chạy với file terraform.tfvars: với file terraform.tfvars đã cấu hình tham số truyền vào (nó tương tự so với terraform plan tuy nhiên mang nghĩa là chỉ định tham số file đầu vào)

> Terraform plan –-var-file “terraform.tfvars”

Tương tự nếu chạy lệnh triển khai với file tham số đã cấu hình thì dùng lệnh:

> Terraform apply –-var-file “terraform.tfvars”

Tương tự để xóa tài nguyên cũng phải thêm tham số đã configure:

> Terraform destroy –-var-file “terraform.tfvars”

## Ouput Values

In các thông số ra màn hình sau khi chạy lệnh apply

Dùng làm cái ghép nối. Ví dụ ouput của cái này là input đầu vào của tên, id của 1 DB nào đó.

```Terraform
output "instance_ip_addr_public" {
  value = aws_eip.demo-eip.public_ip
}
```
