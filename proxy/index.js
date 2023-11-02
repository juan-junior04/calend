const express =  require('express')
const app =  express();
const cors =  require('cors');
const createProxy = require('http-proxy-middleware');
app.use(cors);

app.get("/",createProxy({target:"http://localhost/backend",changeOrigin:true}))

app.link(3000,()=>{
    console.log('proxyy');
})