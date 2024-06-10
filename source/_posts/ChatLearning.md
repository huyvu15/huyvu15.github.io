---
abbrlink: edeaa258
categories:
- QQbot
cover: https://t.mwm.moe/fj/?10
date: 2023-12-13 14:51
tags: QQbot
title: ChatLearning
---

## Chèn chữ màu xanh có link 
- [mirai-api-http](https://github.com/project-mirai/mirai-api-http) 

## Chữ màu đỏ

- `http adapter` ， `singleMode`  `false` 

## Code

```json
{
 "Key": "xxxxx", // 在mirai-api-http中设置的密钥,若使用singleMode也不需要校验,设置为""即可
 "host": "127.0.0.1", // mirai-api-http中设置的地址（若设置成0.0.0.0，请填写127.0.0.1）
 "port": "8080", // mirai-api-http中设置的端口
 "qq": "xxx",  // 在mirai登陆的QQ号
 "session": "xxx" // 无需修改
}
```

## Vẽ bảng

Có thể thực hiện lệnh trong bảng điều khiển, gửi `help` để nhận bảng lệnh; khi quản trị viên trò chuyện riêng với bot trong môi trường chat, thêm tiền tố lệnh `！` hoặc `!`

| Cơ bản             | Mô tả                             |
| :--------------- | :------------------------------- |
| `help`           | Bảng lệnh                         |
| `check`          | Kiểm tra số câu hỏi và cài đặt thuộc tính của từ điển    |
| `admin`          | Truy cập chế độ quản lý           |
| `learning `      | Bật/tắt ghi nhận                 |
| `reply`          | Bật/tắt phản hồi                 |
| `voicereply`     | Bật/tắt phản hồi bằng giọng nói   |
| `setadmin  <QQ>` | Thiết lập số QQ của quản trị viên, nếu có nhiều hơn một người dùng khoảng trắng để tách biệt |


## Đường kẻ ngang có kéo màu xanh

-------------------

# Bộ sưu tập ảnh

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

# Biểu đồ tròn
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}

# Chat mở

Chữ cái tiếng Anh nào hay nhất? {%hideInline Vì suit quần (C ngầu), check đáp án, #FF7242, #fff %}

Có người đang đứng ở cửa phải không? {%hideInline flash%}

# Tab

{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

# Timeline

{% timeline 2022 %}
<!-- timeline 01-02 -->
Đây là trang thử nghiệm
<!-- endtimeline -->
{% endtimeline %}

{% timeline 2022,red %}
<!-- timeline 01-02 -->
Đây là trang thử nghiệm
<!-- endtimeline -->
{% endtimeline %}
