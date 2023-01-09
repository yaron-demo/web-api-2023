const bcrypt=require('bcrypt');
const pass="abc123";
const saltRounds=10;
bcrypt.hash(pass,saltRounds,(err,hashPass)=>{
if(err)
console.log(err.message);
else
console.log(hashPass);
});
// $2b$10$dU/10dBMkbd/Hg0JCDe53ukZfrO1fE7Gyvjf3mZnH2ly6qUmoFp.S