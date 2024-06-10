---
abbrlink: 8217ff3e
categories:
- Hexo
- document
cover: https://t.mwm.moe/fj/?25
date: 2023-09-30 20:52
tags:
- Hexo
title: Cách sử dụng nội dung chính trong bài đăng trên blog Hexo

---

https://Hexo.io/zh-cn/docs/front-matter

# Front-matter

Front-matter là phần nằm ở đầu của mỗi tệp, được phân cách bằng `---`, dùng để chỉ định các biến cho từng tệp cụ thể. Ví dụ:

```
---
title: Hello World
date: 2013/7/13 20:46:25
---
```


Dưới đây là các tham số được định nghĩa sẵn, bạn có thể sử dụng và tận dụng những giá trị này trong template của mình.

| Tham số          | Mô tả                                                         | Giá trị mặc định                                              |
| :--------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| `layout`         | Bố cục                                                        | [`config.default_layout`](https://hexo.io/docs/configuration#post) |
| `title`          | Tiêu đề                                                       | Tên tệp của bài viết                                          |
| `date`           | Ngày tạo                                                      | Ngày tạo tệp                                                 |
| `updated`        | Ngày cập nhật                                                  | Ngày cập nhật tệp                                            |
| `comments`       | Bật chức năng bình luận cho bài viết                           | `true`                                                       |
| `tags`           | Thẻ (không áp dụng cho phân trang)                            |                                                              |
| `categories`     | Danh mục (không áp dụng cho phân trang)                       |                                                              |
| `permalink`      | Ghi đè liên kết tĩnh của bài viết, liên kết tĩnh nên kết thúc bằng `/` hoặc `.html` | `null`                                                       |
| `excerpt`        | Tóm tắt trang bằng văn bản thuần. Sử dụng [plugin này](https://hexo.io/docs/tag-plugins#post-excerpts-and-archives) để định dạng văn bản |                                                              |
| `disableNunjucks`| Tắt chức năng render Nunjucks `{{ }}`/`{% %}` và [tag plugins](https://hexo.io/docs/tag-plugins) khi được bật | false                                                        |
| `lang`           | Thiết lập ngôn ngữ để ghi đè [tự động phát hiện](https://hexo.io/docs/internationalization#path) | Kế thừa từ `_config.yml`                                     |
| `published`      | Bài viết có được xuất bản hay không                           | Với các bài viết trong `_posts` là `true`, với các bài viết trong `_drafts` là `false` |

## Bố cục

Theo thiết lập [`default_layout`](https://hexo.io/docs/configuration#post) trong `_config.yml`, bố cục mặc định là `post`. Khi bố cục của bài viết bị tắt (`layout: false`), nó sẽ không sử dụng theme để xử lý. Tuy nhiên, nó vẫn sẽ được render bởi bất kỳ engine render nào có sẵn: nếu một bài viết được viết bằng Markdown và đã cài đặt engine render Markdown (ví dụ như [hexo-renderer-marked](https://github.com/hexojs/hexo-renderer-marked) mặc định), nó sẽ được render thành HTML.

Trừ khi được thiết lập thông qua `disableNunjucks` hoặc [engine render](https://hexo.io/api/renderer#disable-nunjucks-tags) để tắt, các [tag plugins](https://hexo.io/docs/tag-plugins) sẽ luôn được xử lý, bất kể bố cục là gì.

## Danh mục và Thẻ

Chỉ có các bài viết hỗ trợ danh mục và thẻ, bạn có thể thiết lập chúng trong Front-matter. Trong các hệ thống khác, danh mục và thẻ có thể nghe giống nhau, nhưng trong Hexo, chúng có sự khác biệt rõ rệt: danh mục có tính thứ tự và phân cấp, nghĩa là `Foo, Bar` không giống với `Bar, Foo`; trong khi thẻ không có thứ tự và phân cấp.


```
categories:
- Diary
tags:
- PS3
- Games
```


> Phương pháp phân loại
>
> Nếu bạn đã từng sử dụng WordPress, bạn có thể dễ dàng hiểu sai cách phân loại của Hexo. WordPress cho phép thiết lập nhiều danh mục cho một bài viết, và các danh mục này có thể là đồng cấp hoặc cha con. Tuy nhiên, Hexo không hỗ trợ chỉ định nhiều danh mục đồng cấp. Cách chỉ định sau:
>
> ```
> categories:
>   - Nhật ký
>   - Cuộc sống
> ```
>
> Sẽ làm cho danh mục `Cuộc sống` trở thành danh mục con của `Nhật ký`, thay vì danh mục song song. Vì vậy, cần phải lựa chọn danh mục chính xác nhất có thể cho bài viết của bạn.
>
> Nếu bạn cần thêm nhiều danh mục cho bài viết, bạn có thể thử phương pháp sau:
>
> ```
> categories:
> - [Nhật ký, PlayStation]
> - [Nhật ký, Trò chơi]
> - [Cuộc sống]
> ```
>
> Lúc này, bài viết sẽ thuộc cả ba danh mục: `PlayStation` và `Trò chơi` đều là danh mục con của `Nhật ký`, trong khi `Cuộc sống` là danh mục không có danh mục con.

## JSON Front-matter

Ngoài YAML các bạn cũng có thể dùng JSON để viết Front-matter, chỉ cần thay `---` bằng `;;;`.

```
"title": "Hello World",
"date": "2013/7/13 20:46:25"
;;;
```