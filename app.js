
const cors=require('cors');
// ניצור חיבור לספריית אקפרס
const express=require('express');
const app=express();// יצירת אובייקט ספריית אקספרס
const ProductRouter=require('./api/v1/routes/product');
const UserRouter=require('./api/v1/routes/user');

const morgan=require('morgan');
const auth=require('./api/v1/middlewares/auth');

const mysql=require('mysql');
const connection=mysql.createConnection({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password:process.env.MYSQLPASS,
    database:process.env.MYSQLDB
});
global.mysqldb=connection;
connection.connect(function(err){
 if(err)
    console.log(err);
else
    console.log('contected DB');

});

app.use(morgan('dev'));
app.use(cors({
//origin:'https://www.zap.co.il'

}));
//app.use(auth);

// הוספת שכבה לטיפול בבקשות עם גוף בפורמט ג'ייסון
app.use(express.json());

// הוספנו שכבה לטיפול בבקשות עם גוף בפורמט יואראל אנקודד
app.use(express.urlencoded({extended:true}));

// הוספת הראוטר לאפליקציה
app.use("/product",ProductRouter);
app.use("/user",UserRouter);

// נקודת קצה עבור נתיב לא קיים
// שגיאת 404
app.all("*",(req,res)=>{
    return res.status(404).json({Msg:"404 Not Found"});
});

module.exports=app;