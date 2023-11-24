const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const session = require("express-session");
const cookieParser = require("cookie-parser")
require("dotenv").config();

app.use(cors({
    origin:["http://localhost:5173",process.env.FRONTEND_URL],
    methods:["POST","GET","PUT","DELETE"]  ,
    credentials:true

}))
app.use(express.json({limit:"350mb"}));
app.use(express.urlencoded({ limit:'350mb', extended:true}))



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header(
      "Access-Control-Allow-Methods",
      "GET,PUT,POST,DELETE,UPDATE,OPTIONS"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    );
    next();
  });
app.set("trust proxy", 1); // trust first proxy
app.use(cookieParser())
app.use(express.json())
app.use(morgan("common"))
require("./utils/db")()

app.use(session({
    name:"codewithmama.sid",
    secret:"hellhello",
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:true,
        httpOnly:true,
        maxAge:1000*60*60,
        sameSite:"none"
    }
}))

require("./routes/allRoutes")(app)


app.use((err,req,res,next)=>{
  res.status(500).json({message:err.message,success:true})
})


app.listen(8000,()=>console.log(`server started...`))