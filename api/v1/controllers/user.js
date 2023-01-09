
 const bcrypt=require('bcrypt'); // חיבור לספריית ההצפנה לצורך הצפנת הסיסמה
 const mysql=require('mysql');
 const jwt=require('jsonwebtoken');

module.exports={

Register:(req,res)=>{
    let connection=global.mysqldb;
    // קבלת שם המשתמש, הסיסמהו הושם המלא של המשתמש אותו נרצה לרשום.
    const {user,pass,fullname}=req.body;
    bcrypt.hash(pass,10).then((hashPass)=>{
        let sql=`INSERT INTO t_user (user,pass,fullname) VALUES ('${user}', '${hashPass}', '${fullname}')`;
        connection.query(sql,(err,rows,fields)=>{
               if(err)
                return res.status(500).json(err);
               else
               {
                   let uid=rows.insertId;// חילוץ קוד המשתמש שנוצר באמצעות מספור אוטמטי בבסיס הנתונים
                   
                   let token=jwt.sign({uid:uid},process.env.PRIVATE_KEY);
                return res.status(200).json({uid,token});
               } 
            
        });
    });
    // }).catch((err)=>{
    //     return res.status(500).json({Msg:err,ww:ww});
    // });
   

},
Login:(req,res)=>{
    console.log(req.body);
    // const pname=req.body.pname;
    // const price=req.body.price;
    // const pdesc=req.body.pdesc;
    const {pname,price,pdesc,picname}=req.body;
    let sql=`INSERT INTO t_product (pname, price, pdesc, picname) VALUES ('${pname}', '${price}', '${pdesc}', '${picname}');`;
   
    connection.query(sql,function(err,rows,fields){
        if(err)
            console.log(err.message);
        else
        {
            console.log(rows);
            return res.status(200).json(rows);
        }
           
    });

}


};