const express = require('express')
const app = express()

var p=process.env.PORT
if(p==null || p===""){
  p=3000
}

app.get('/', (req, res) => {
  //res.send('Hello World')
  res.sendFile(__dirname+'/src/index.html');
})

app.use(express.static('src'));

app.listen(p, () => {
  console.log(`Start server at port ${p}.`)
})

process.on('SIGINT', function() {
  console.log("Caught interrupt signal");
  process.exit();
});