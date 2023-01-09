// יצירת אובייקט ראוטר של ספריית אקספרסס
const router=require('express').Router();
const {
   Register,Login
}=require('../controllers/user');

// נקודת קצה לביצוע הרשמה
router.post("/register",Register);
// נקודת קצה לביצוע התחברות
router.post("/login",Login);

module.exports=router;