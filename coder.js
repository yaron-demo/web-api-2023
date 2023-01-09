
// זה הקוד שאמור להיות מיוצר לכל אתר
// SiteId זה קוד האתר מתוך בסיס הנתונים
// BaseUrl זה הנתיב לנקודת הקצה שצריכה לתשאל את גוגל על המוצר ולהחזיר רשימת קוד מוצר להמלצות
function GetRecommendation(pid,cb)
{
    const SiteId=12345;
    const BaseUrl="http://localhost:5000/getrecommendations/";
    const Url=BaseUrl+"?pid="+pid+"&SiteId="+SiteId;
    fetch(Url,{method:"Get"}).then((res)=>{return res.json()}).then((data)=>{
        cb(listOfProdsIds);

    });
    
}
/// פונקציית דמו שמקבלת רשימת קודי מוצרים מופרדים על ידי התו פסיק
// הפונקציה מדפיה לקונסול את קודי המוצר
// בפועל צריך ליצור את קוביות המוצר באתר
// זה תפקיד המתכנת של האתר
function CreateProducts(prodids)
{
    //שומרים את רשימת קודי המוצרים המומלצים בתוך מערך
    let arr=prodids.split(',');
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
}
