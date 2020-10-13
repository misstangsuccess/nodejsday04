//使用某个数据库(如果数据库不存在,则自动创建)
//use people
//查看所有的数据库
//show databases
//查看当前所在的数据库
db
//给one集合插入一条数据(如果这个集合不存在,则自动创建当前的集合)
//insert方法是插入数据的,参数是一个对象
db.one.insert({name:"李四",age:20,sex:"男"})
//给one集合插入多条数据
db.one.insert([{name:"王五",age:25,sex:"男"},{name:"赵娜",age:28,sex:"女"}])

//查找某个数据库的某个集合的所有数据,使用find方法不加任何参数
db.one.find()
//查找年龄是18岁的人的数据
db.one.find({age:18})
//查找id是XXX的人的数据
db.one.find({_id:ObjectId("5f8580a9cfbeed6ffd42d7ec")})
//$gt $gte $lt $lte $ne 操作符> >= < <= !=
//查找年龄大于20岁的人
//db.one.find({age:{$gt:20}})
//查找年龄小于等于25的人
db.one.find({age:{$lte:25}})
//查找性别不是男的
db.one.find({sex:{$ne:"男"}})
//查找年龄大于18或者是男性的人
db.one.find({$or:[{age:{$gt:18}},{sex:"男"}]})
//查找年龄是18岁的和20岁的方法1
db.one.find({$or:[{age:18},{age:20}]})
//查找年龄是18岁的和20岁的方法2
db.one.find({age:{$in:[18,20]}})
//查找姓名是以李开头的人
db.one.find({name:/^李/})
//查找姓名是以山结尾的
db.one.find({name:/山$/})
//$where查找数据查找年龄大于10小于25岁的人
db.one.find({$where:function(){
    //this:指向当前进来 的数据（数据会一条条的进入）
    return this.age>10 && this.age<25
}})
