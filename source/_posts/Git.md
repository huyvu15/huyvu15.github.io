---
abbrlink: git111f
categories:
- Git
cover: https://intech.vietnamworks.com/media/gallery/2024/03/02/65e3414547fdd.jpg
date: 2024-07-04 16:35:12
tags:
- Git
title: Kiến thức nền tảng Git
---

# Giới thiệu

Git là gì? 
Bạn đang làm việc nhóm và cần thuyết trình về một chủ đề nào đó. Các thành viên trong nhóm đề có thể chỉnh sửa và đóng góp ý kiến 

3 bản đóng góp:
- Git dev
- Git Stag: cho kiểm thử
- Git production: Sẵn sàng cho người dùng cuối

Sử dụng git có tác dụng: 

- Nhiều người có thể đóng góp vào một dự án
- Theo dõi thay đổi
- Kiểm soát truy cập
- Quản lý phiên bản
- Sao lưu và khôi phục

# Git Architect

![](https://media.licdn.com/dms/image/D4D22AQE5Ch8nrJA3FQ/feedshare-shrink_2048_1536/0/1696166511493?e=2147483647&v=beta&t=3MXM6n2dmxLv8TZVUohb7DBgy-Awv_09Tlgb-uKPI9U)


- Working: là nơi chứa các file chỉnh sửa của bạn
- Staging: lựa chọn file và cân nhắc nó
- Local: Những file chọn và cam kết đẩy lên

# Lệnh Git

git merge --allow-unrelated-histories branch1 branch2: lệnh gộp 2 nhánh của remote và máy tính

- Git status: hiển thị trang thái của thư mục hiện tại
- Git log: hiển thị lịch sử commit
- Git init [repo_name]: tạo kho lưu trữ trống
- Git clone (Repo_name): tải code về
- Git _ config-l :xem cấu hình hiện tải
## quy trình up code  đầy đủ: 
1. Git init
2. Ls: xem các file để up
3. Git status: xem trạng thái(đỏ là chưa đc git add.)
4. Echo “nội dung” > README.md: hình như file readme nó tự tạo sau câu lệnh này
5. git commit -m “ …“: thêm comment khi commit

git log: thông tin lần commit lần nhất và ghi chú -m nãy(xem lại lịch sử)
Git diff: so sánh sự khác nhau
Git status: xem lại thay đổi file(modified: có thay đổi trong file và đều màu đỏ)
* Cấu hình file gitignore để bỏ qua các file ko cần giám sát
### bỏ qua file log
*.log: bỏ qua các file.log
### bỏ qua thư mục
Mode1/
- touch .gitignore: tạo file .gitignore
## tương tác với remote repository(làm vc với nhóm)
- Git init –bare: tạo 1 centrel Reposi
- Git clone [repo_name][clone_name]: sao chép liên kết repo_name
- Git fetch: lấy các thông tin về commit mới từ centre
- Git pull : lấy toàn bộ dữ liệu commit mới về local repo
- Git push: 
Git config –local user.name ‘developer_1’:cấu hình cho người làm ra hành động đó

Git fetch: kiểm tra cái thông tin của mình và của centrelRepo có thay đổi gì ko
* làm sao để dev2 biết có thông tin gì trên centrelRepo
Git fetch


Để kéo về dùng git pull: file ở centrelRepo kéo về Dev2

* chuyển đổi giữa các commit trong git
Giúp cta quay lại bất kỳ commit nào
- Git log: xem lại lịch sử có show ra đoạn mã màu vàng
- Git checkout <tầm5 6  ký tự đoạn mã vàng> duy chuyển giữa lần commit ở đoạn mã vàng(head) là cái hiện tại và tiếp tục làm việc từ đó
- q! : thoát chế độ không nhập đc lệnh trong git
Git diff hiển thị những thay đổi của commit trước đó
Git rm <file_name>: xóa file 
Git mv <file_name_olf> <file_name_new>: đổi tên
Git checkout <file_name>: hoàn tác thao tác trước đó về commit gần nhất
Git reset: ví dụ khi add file nào đó mà nó đã hiện lên trạng thái màu xanh(đã cam kết rồi ) thì mình dùng lệnh này để hủy cam kết đó thành màu đỏ
Git reset head <file_name>: hủy cam kết 1 file bất kỳ
Git commit –amend: mở đoạn văn bản mô tả sửa nó, đoạn này sẽ đc ghi đè lên commit trước đó
Git revert: tạo ra 1 commit mới trái ngược với các commit trước đó(ko có nghĩa là khôi phục). Nếu thêm head vào thì nó sẽ khôi phục commit trước đó
Git log -n: xem id_commit thứ n trước đó
## Working with branch
git branch <name_branch>: tạo 1 nhánh
Git checkout <name_branch>: chuyển sang 1 nhánh khác
Git checkout -b <name_branch>:  tạo 1 nhánh và chuyển sang nhánh đó luôn
Git branch -d <name_branch>: xóa nhánh
Git merge <name_branch_merge>: hợp branch đã chọn kia vào branch hiện tại 
Trường hợp xảy ra xung đột: chỉ cần vào file có xung đột sau đó loại bỏ phần giống nhau giữ lai phần head là ok 
Git log –graph –oneline: để xem các thay đổi dưới dạng đồ thị giúp hiểu rõ hơn các trường hợp commit
Git remote -v : kiểm tra repository hiện tại đang làm việc
Git remote show origin:câu lệnh hiện thị chi tiết hơn câu lệnh ở trên 
Git rebase -i: thì nó hiện ra cái bảng tất cả commit trước đó và mình có thể xem 1 cách chi tiết nó

# Git WorkFlow
![](https://media.licdn.com/dms/image/D5612AQFsGUrirGzzbA/article-cover_image-shrink_600_2000/0/1690820727506?e=2147483647&v=beta&t=h3jRh5QqimKlu9FV5q94i3iszGfNm2Kc9DsTBDxtn90)

- Nhánh 'main' chứa code môi trường người dùng
- Nhánh 'devolop' chứa code môi trường phát triển
- Nhánh 'features' được tạo từ nhánh develop chứa code các chức năng
- Nhánh 'release' chứa code môi trường thử nghiệm
- nhánh 'hotfix' được tạo ra từ nhánh main

# CI/CD với Github 

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAABUoTg0hRIRysVXsNZg21ojLCOSsljUElA&s)

