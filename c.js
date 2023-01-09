bcrypt=require('bcrypt');
const pass="abc123";
const saltRounds=10;
const hashFromDb="$2b$10$dU/10dBMkbd/Hg0JCDe53ukZfrO1fE7Gyvjf3mZnH2ly6qUmoFp.S";
bcrypt.compare(pass,hashFromDb,(err,status)=>{
if(err)
console.log(err.message);
else
console.log(status);
});