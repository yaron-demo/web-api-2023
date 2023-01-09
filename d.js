const jwt=require('jsonwebtoken');
const token=jwt.sign({Uid:23,Email:"ylapidot@gmail.com"},"myprivatekey",{expiresIn:'1h'});
console.log(token);
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOjIzLCJFbWFpbCI6InlsYXBpZG90QGdtYWlsLmNvbSIsImlhdCI6MTY3MjY5MDgxNCwiZXhwIjoxNjcyNjk0NDE0fQ.QRRRC0T6wy4uZ4vD8lLAuoaRTWSuMjh3py8meHIPhhY