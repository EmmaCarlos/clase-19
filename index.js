const express = require('express')
const path = require('path');
const fs = require('fs')
const app = express();

//app Server
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), ()=> console.log("Server on http://localhost:"+app.get("port")));

//App Acces Public afsf
app.use(express.static(path.resolve(__dirname, "../public")));

//App Settings


//App Middlewares


//App routes
const main = require('./routes/main')
app.use(main);


