
 let connection=global.mysqldb;
module.exports={
GetAllProducts:(req,res)=>{
    let sql="select * from t_product";
   
    connection.query(sql,function(err,rows,fields){
        if(err)
            console.log(err.message);
        else
        {
            console.log(rows);
            return res.status(200).json(rows);
        }
           
    });
    

},
GetProductById:(req,res)=>{
    let sql="select * from t_product where pid="+ req.params.pid;
   
    connection.query(sql,function(err,rows,fields){
        if(err)
            console.log(err.message);
        else
        {
            console.log(rows);
            return res.status(200).json(rows);
        }
           
    });
  

},
DeleteProductById:(req,res)=>{
    return res.status(200).json({Msg:"Delete Product id: " + req.params.pid});

},
UpdateProductById:(req,res)=>{
    return res.status(200).json({Msg:"update Product id: " + req.params.pid,body:req.body});

},
AddProduct:(req,res)=>{
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