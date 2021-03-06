const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');

const publicPath=path.join(__dirname,'../public');
const port=process.env.PORT||3001;

var app=express();
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
   console.log('new user Connected');

   socket.on('disconnect',()=>{
         console.log("disconnected to the user");
   });
});



server.listen(port,()=>{
   console.log(`server is up on ${port}`);
});