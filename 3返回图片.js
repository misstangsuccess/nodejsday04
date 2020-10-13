const http=require("http")
const fs=require("fs")
const path=require("path")
const server=http.createServer((request,response)=>{
  const filePath=path.resolve(__dirname,'./flower8.jpg')
  const rs=fs.createReadStream(filePath);
  response.setHeader("Content-Type","image/jpeg;charset=utf-8")
  rs.pipe(response)
});
const port=3000;
const host='192.168.20.65'
server.listen(port,host,(err)=>{
  if(err){
    console.log("启动失败:"+err);
    return;
  }
  console.log(`启动成功:请访问 http://${host}:${port}`);
})
