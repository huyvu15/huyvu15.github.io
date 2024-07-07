---
abbrlink: dr6v212f
categories:
- Blog
cover: https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-blogging-la-tu-dung-de-chi-ky-nang-viet-va-van-hanh-blog.jpg
date: 2024-06-27 18:17:12
tags:
- Building
- Blog
- Knownledge
- Journeys
title: Hành Trình Xây Dựng Blog này !
---


# Hexo

![](https://uynguyen.github.io/Post-Resources/Hexo/Cover.png)

Blog này được xây dựng bằng Hexo một framework làm web mình chỉ việc cấu hình đơn giản và tạo các bài viết bằng file markdown sau đó framework sẽ tự convert sang html, css, js...

Hexo có rất nhiều temple về nhiều theme đẹp. Ở đây mình chọn them butterfly do có pà **W1ndys** custome đẹp nên lấy về dùng. Tôi có nhắn tin xin pà đó rồi nha nên mấy bạn đừng bảo tôi chôm chỉa :) nha Pà đó cũng đang học đại học giống mình và cute cực kỳ (W1ndys có thể không phải nữ). Hướng dẫn cực kỳ chi tiết tại [butterfly](https://butterfly.js.org/posts/4aa8abbe/#series-%E7%B3%BB%E5%88%97%E6%96%87%E7%AB%A0)


# Giscus

![](https://design2seo.com/assets/blog/web-development/github/comments-with-giscus.png)

Giscus là một dịch vụ bot API miễn phí, cho phép tạo giao diện comment trên các trang cá nhân của bạn. Khi có người comment sẽ hiển thị trên trang cá nhân gán API và trên phần Dicussions trên Github và đồng thời cũng có thông báo qua email cá nhân.

Giscus dễ dàng sửa đổi và linh hoạt trong nhiều trường hợp. Bạn có thể truy cập trang chủ Giscus tại [Giscus](https://giscus.app/)

Để cấu hình và sử dụng Giscus tham khảo tại [đây](https://kiendinh.space/xay-dung-phan-comment-dam-chat-dev-voi-github-va-giscus-cho-blog/)

Sửa mã Gicus tại:
```yml
giscus:
  repo: huyvu15/huyvu15.github.io 
  repo_id: <Repo_id>
  category_id: <cate_id>
  theme:
    light: light 
    dark: dark 
  option:
    data-category: "Show and tell"
    data-mapping: url 
    data-strict: 0 
    data-reactions-enabled: 1 
    data-emit-metadata: 1 
    data-input-position: top 
    data-theme: preferred_color_scheme 
    data-lang: en   
    data-loading: lazy         
    crossorigin: anonymous 
```


# Busuanzi 

![Chỉ mang tính chất minh họa](https://camo.githubusercontent.com/f5373eb982b8e6d24e9e09eea013e9c5599b3b3f3057de34c58d31540ea8d4a1/68747470733a2f2f736f6369616c6966792e6769742e63692f736f7866742f62757375616e7a692f696d6167653f6465736372697074696f6e3d3126666f6e743d42697474657226666f726b733d31266c616e67756167653d31266c6f676f3d68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f736f7866742f62757375616e7a692f6d61696e2f646973742f66617669636f6e2e737667266e616d653d31266f776e65723d31267061747465726e3d536f6c6964267374617267617a6572733d31267468656d653d4461726b)

Busuanzi là một dịch vụ API không thu phí, cho phép bạn theo dõi số lượt xem trang trên website một cách dễ dàng (ý tưởng vẫn là tạo một biến i và khi có ai click vào thì i++). Để bắt đầu sử dụng Busuanzi, bạn có thể làm theo các bước sau:

1. Đăng ký tài khoản: Truy cập trang web chính thức của Busuanzi tại https://busuanzi.ibruce.info/ và tiến hành đăng ký tài khoản.

2. Nhận mã API: Sau khi hoàn tất đăng ký, bạn sẽ nhận được mã API riêng. Hãy sao chép mã này để sử dụng trong bước tiếp theo.

3. Triển khai mã API: Để tích hợp Busuanzi vào website của bạn, hãy thêm đoạn mã sau vào trang của bạn:

```javascript
<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
<span id="busuanzi_container_page_pv">Trang web của bạn đã được xem: <span id="busuanzi_value_page_pv"></span> lần</span>
```
Đoạn mã này sẽ hiển thị số lần trang web của bạn được xem trực tiếp trên trang.

4. Tùy chỉnh hiển thị: Busuanzi cho phép bạn tùy chỉnh thông tin hiển thị để bao gồm các dữ liệu thống kê khác như số lượt truy cập trong ngày, tuần hoặc tháng. Bạn có thể điều chỉnh mã để phù hợp với nhu cầu thống kê của mình.

5. Tính năng nâng cao: Ngoài việc đếm số lượt xem, Busuanzi còn cung cấp các tính năng như theo dõi lượt truy cập từ các quốc gia khác nhau, giúp bạn có cái nhìn tổng quan hơn về lượng truy cập website của mình.

_config.butterfly
```yml
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true
```

# Google Analytics