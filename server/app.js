
// 加载express模块
const express = require('express');
// 加载mysql模块
const mysql = require('mysql');
//加载body-paresr中间件
const bodyParse = require('body-parser');

//创建连接池
const pool = mysql.createPool({
  //数据库服务器的地址
  host: '127.0.0.1',
  //数据库服务的端口号
  port: 3306,
  //数据库用户的用户名
  user: 'root',
  //数据库用户的密码
  password: '',
  //数据库名称
  database: 'user',
  //数据库的编码方式
  charset: 'utf8',
  //支持的最大连接数
  connectionLimit: 20
})
// 创建server服务
const server = express();

//使用body-parser中间件
server.use(bodyParse.urlencoded({
  extended:false
}))


// 创建接口
server.get("/picture", (req, res) => {
  let sql = "SELECT id,src,width,height FROM imgcount";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.send({ message: "查询成功", code: 1, results: results });
  })
  // res.send("ok")
})
// 创建搜索接口
server.get("/search", (req, res) => {
  let search = req.query.search;
  let sql = "SELECT id,src,width,height,writer,Photo FROM imgcount where search=?";
  pool.query(sql, [search], (err, results) => {
    if (err) throw err;
    res.send({ message: "查询成功", code: 1, results: results })
  })
})

// 创建id搜索接口
// 创建搜索接口
server.get("/details", (req, res) => {
  let details = req.query.details;
  let sql = "SELECT id,src,width,height,writer,Photo FROM imgcount where id=?";
  pool.query(sql, [details], (err, results) => {
    if (err) throw err;
    res.send({ message: "查询成功", code: 1, results: results })
  })
  // res.send("ok")
})

//用户注册的接口
server.post('/register',(req,res) =>{
  //1.获取客户端提交的用户名和密码
  let username = req.body.username;
  let password = req.body.password;
  // console.log(username);
  // console.log(password);
  //2.以当前的用户名为条件进行查找操作，因为需要保证用户名的唯一性
  let sql = 'SELECT id,username From user_tab WHERE username=?';
  pool.query(sql,[username],(err,results)=>{
    if(err) throw err;
    //根据用户名是否存在，然后进行不同的操作
    if(results.length == 0){
      //3.将用户信息写入数据表(还需要注意将密码变成md5的结果)
      sql = 'INSERT INTO user_tab(username,password) VALUES(?,?)';
      pool.query(sql,[username,password],(err,results)=>{
        res.send({ message: '注册成功' , code: 1 })
      })
    } else {
      //3.产生"错误"响应信息到客户端
      res.send({message:'用户名已经存在', code: 0})
    }
  });
});



//用户登录的接口
server.post('/login',(req,res)=>{
  //1.获取用户名及密码信息
  let username = req.body.username;
  let password = req.body.password;
  //以用户名和密码为条件进行查找
  let sql = 'SELECT id,username FROM user_tab WHERE username=? AND password=?';
  pool.query(sql,[username,password],(err,results)=>{
    if(err) throw err;
    if(results.length == 0){
      res.send({message:"登录失败", code:0});
    } else {
      res.send({message:"登录成功", code:8});
    }
  })
})



// 监听3000接口
server.listen(3000, () => {
  console.log('运行成功')
})