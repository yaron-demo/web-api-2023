// יצירת אובייקט ראוטר של ספריית אקספרסס
const router=require('express').Router();
const {
    AddProduct,
    GetAllProducts,
    GetProductById,
    DeleteProductById,
    UpdateProductById
}=require('../controllers/product');
// נקודת קצה המחזירה את כל המוצרים
router.get("/",GetAllProducts);
// נקודת קצה המחזירה את פרטי המוצר המבוקש
// /product/8
router.get("/:pid",GetProductById);
// נקודת קצה המוחקת את המוצר המבוקש
// /product/6
router.delete("/:pid",DeleteProductById);
// נקודת קצה המעדכנת את פרטי המוצר המבוקש
// /product/6
router.patch("/:pid",UpdateProductById);
// נקודת קצה המוסיפה מוצר חדש
// /product/6
router.post("/",AddProduct);

module.exports=router;