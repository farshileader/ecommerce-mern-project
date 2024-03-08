const express = require("express");
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get("/test", (req, res)=>{
res.send('api is working fine alhamdulillah')
})



app.listen(3001, ()=>{
    console.log(`server is running at http://localhost:3001`);
});
//express server is ready
