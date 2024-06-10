---
title: MongoDB
tags:
  - MongoDB
  - Python
categories:
  - Nosql
cover: >-
  https://teky.edu.vn/blog/wp-content/uploads/2021/08/Cach-su-dung-Mongodb-nhu-the-nao.jpg
abbrlink: adaea106
date: 2024-04-21 20:11:32
---

# MongoDB /

MongoDB là một cơ sở dữ liệu NoSQL hàng đầu, được thiết kế để lưu trữ dữ liệu theo định dạng BSON (một biến thể của JSON), giúp nó trở nên linh hoạt và dễ sử dụng. Được ra mắt vào năm 2009, MongoDB đã nhanh chóng trở thành một trong những lựa chọn phổ biến nhất cho các ứng dụng cần quản lý khối lượng lớn dữ liệu phi cấu trúc hoặc bán cấu trúc do khả năng mở rộng ngang và dọc hiệu quả.

## Connect DB


## Start_mongo
Tại terminal gõ:
> start_mongo

## Create a DB:
```mongo
db.createCollection("bigdata")
```

## Insert
```mongo
Student_list = [{….}, {….}] 
Db.insertMany(student_list)
```
## Read
```Dbmongoimport --db entertainment --collection movies --file movies.json```

## Remove
```Db.db_name.remove({….}): xóa 1
Db.db_name.remove({}): xóa all
```
## Count
```Db_name.count()```
## Find:
> Db_name.findOne(): tìm phần tử đầu tiên
> Db_name.find(): list all
> Db_name.find().limt(3): list đến 3 phần tử
## Create index:
> Db.db_name.find({….})
> Db.db_name.createIndex({….})
> db.bigdata.getIndexes(): laays index
## Đo thời gian chạy:
> db.bigdata.find({"account_no": 69271}).explain("executionStats").executionStats.executionTimeMillis
## Aggregation Framwork
```b.marks.aggregate([{"$limit":2}])
db.marks.aggregate([{"$sort":{"marks":1}}])
db.marks.aggregate([
{"$sort":{"marks":-1}},
{"$limit":2}
])
```	

# Exercise 5 - Group by

The operator $group by, along with operators like $sum, $avg, $min, $max, allows us to perform grouping operations.

This aggregation pipeline prints the average marks across all subjects.

```mongo
db.marks.aggregate([
{
    "$group":{
        "_id":"$subject",
        "average":{"$avg":"$marks"}
        }
}
])
```
## Use Python
```Python
From bson.json_until import dumps
Cursor = students.find({“lastName”: “Doe”})
Print(dumps(cursor, indet = 4))
```
