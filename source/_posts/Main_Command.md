---
abbrlink: 904f42f7
categories:
- Python
- Blue Bridge
cover: https://bloganchoi.com/wp-content/uploads/2021/03/6274bc61a1b99347022e70d0ca68ba93.jpg       
date: 2024-02-29 20:24:35
tags:
- Python
- Blue Bridge
- Luogu
- Command 
- Hexo
title: Lệnh hexo

---

# P5726


## Miêu tả Tiêu đề

Hiện tại có $n(n \le 1000)$ giám khảo chấm điểm cho người chơi, với số điểm từ $0$ đến $10$. Bạn cần bỏ điểm cao nhất và điểm thấp nhất (nếu có nhiều điểm cao nhất hoặc thấp nhất thì chỉ cần bỏ 1) và điểm trung bình của các đánh giá còn lại là điểm của người chơi. Bây giờ hãy nhập số lượng giám khảo và điểm số của họ. Vui lòng ghi điểm cuối cùng của người chơi, chính xác đến $2$ chữ số thập phân.

## Định dạng đầu vào

Dòng đầu tiên nhập một số nguyên dương $n$, cho biết có $n$ giám khảo.

Dòng thứ hai nhập các số nguyên dương $n$ và số nguyên dương $i$-th thể hiện điểm do ban giám khảo $i$-th cho.

## Định dạng đầu ra

In ra một dòng gồm hai số thập phân, cho biết điểm cuối cùng của người chơi.

## Mẫu số 1

### Dữ liệu nhập mẫu số 1

```python
5
9 5 6 8 9
```

### Đầu ra mẫu số 1

```python
7.67
```

## Gợi ý

Đảm bảo dữ liệu, $3 \leq n \leq 1000$, điểm do mỗi giám khảo đưa ra là một số nguyên nằm trong khoảng từ $0$ đến $10$ (bao gồm $0$ và $10$).

## Trả lời

```python
n = int(input())
score = list(map(int, input().split()))
min = min(score)
max = max(score)
score.remove(min)
score.remove(max)
average = sum(score) / len(score)
print("{:.3}".format(average))
```

## Giải thích vấn đề

Mã này là một chương trình Python được sử dụng để tính điểm cuối cùng của người chơi. Đây là lời giải thích về mã:

1. Trước tiên, chương trình đọc số lượng giám khảo $n$ từ đầu vào tiêu chuẩn.
2. Tiếp theo, chương trình đọc một dòng từ đầu vào tiêu chuẩn, trong đó có $n$ điểm của ban giám khảo dành cho thí sinh, cách nhau bằng dấu cách.
3. Sau đó, chương trình chuyển đổi các điểm này thành số nguyên và lưu trữ chúng trong một danh sách gọi là `score`.
4. Chương trình tìm điểm thấp nhất và cao nhất trong danh sách bằng cách sử dụng hàm `min()` và `max()`.
5. Tiếp theo, chương trình sử dụng hàm `remove()` để loại bỏ điểm thấp nhất và cao nhất khỏi danh sách, sao cho chỉ còn lại điểm của ban giám khảo sau khi loại bỏ điểm thấp nhất và cao nhất trong danh sách.
6. Chương trình tính điểm trung bình của các giám khảo còn lại bằng cách tổng hợp tất cả các điểm rồi chia cho số giám khảo còn lại.
7. Cuối cùng, chương trình sử dụng hàm `format()` để định dạng giá trị trung bình đến hai chữ số thập phân và in kết quả ra đầu ra tiêu chuẩn.

Logic của mã này hợp lý và có thể tính toán chính xác điểm số cuối cùng của người chơi.

## Điểm kiến ​​thức

Mã này liên quan đến một số điểm kiến ​​thức về lập trình Python:

1. Đầu vào và đầu ra: Sử dụng hàm `input()` để đọc dữ liệu từ đầu vào tiêu chuẩn và sử dụng hàm `print()` để xuất kết quả ra đầu ra tiêu chuẩn.
2. Các thao tác với danh sách: Sử dụng danh sách để lưu trữ điểm của giám khảo và thực hiện các thao tác trên danh sách, chẳng hạn như tìm giá trị lớn nhất, giá trị nhỏ nhất và xóa các phần tử.
3. Vòng lặp và câu lệnh điều kiện: Mặc dù không có vòng lặp hoặc câu lệnh điều kiện rõ ràng trong mã, nhưng ở một mức độ nào đó, các hàm dựng sẵn `min()` và `max()` được sử dụng để tìm điểm tối thiểu và tối đa. Nó có thể được coi là một sự duyệt và so sánh ngầm trên các thành phần của danh sách.
4. Định dạng chuỗi: Sử dụng hàm `format()` để định dạng số dấu phẩy động nhằm giữ lại số vị trí thập phân đã chỉ định.
5. Tính toán: Tính tổng các phần tử trong một danh sách và tìm độ dài của danh sách đó, dùng để tính điểm trung bình của ban giám khảo.

Tóm lại, mã này bao gồm một số khái niệm cơ bản trong Python, bao gồm đầu vào và đầu ra, cấu trúc dữ liệu, câu lệnh điều kiện, vòng lặp, định dạng chuỗi và tính toán toán học.

## Cải tiến mã

```python
n = int(input())
score = [int(x) for x in input().split()]

score = sorted(score)[1:-1]

average = sum(score) / len(score)
print("{:.2f}".format(average))
```

## Gì đó khác

Tôi nghĩ nó đẹp{% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}

# Màu văn bản

Bộ trưởng tuyên bố rằng：{% label Tiên đế blue %}khởi nghiệp chưa được một nửa, mà{% label giữa đường băng hà blue %}。Hiện nay thiên hạ chia ba, {% label Ích Châu kiệt quệ pink %}，đây thật sự là{% label lúc nguy cấp tồn vong red %}！Nhưng các quan cận thần, không ngừng nỗ lực trong cung；{% label những người trung thành purple %}，liều mình ở ngoài, đều vì nhớ ơn Tiên đế, muốn báo đáp cho bệ hạ. Thật lòng nên mở rộng tai nghe, để làm sáng đức của Tiên đế, khơi dậy chí khí của những người trung thành; không nên tự coi nhẹ mình, nói sai lẽ, để ngăn cản đường trung can.

Cung trong, phủ ngoài, đều là một thể; việc thưởng phạt, không nên khác nhau. Nếu có {% label kẻ làm điều gian dối orange %}、{% label phạm pháp green %}，và người trung nghĩa, nên giao cho quan có chức vụ xét xử, luận bàn hình phạt, để thể hiện sự công bằng sáng suốt của bệ hạ; không nên thiên vị, khiến nội ngoại có luật khác nhau.

臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。
宮中、府中，俱為一體；陟罰臧否，不宜異同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。

