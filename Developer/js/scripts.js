
console.log("مرحبا بك في برنامج توظيف المبرمجين, يرجى الاجابة على الاسالة التالية")

let codeLang = [
    "1. HTML",
    "2. Css",
    "3. Javascript",
    "4. PHP",
    "5. Swift",
    "6. Java" ]

let Question1 = prompt("ما اسمك ؟");

let Question2 = prompt("كم عمرك ؟");

let Question3 = prompt("كم عدد سنوات خبرة لديك ؟");

console.log(codeLang);

let Question4 = prompt("اختر لغة تتقنها من لغات البرمجة المذكورة بادخال رقمها");

let Question5 = prompt("اختر لغة برمجة اخرى");

if( 25>=Question2<=40 && Question3 >= 3 && Question4 <=6 && Question5 <=6){
    console.log("نهانيئا تم قبولك يا "+ Question1);
}
else{
    console.log("ناسف انت لست رائعا بالشكل الكافي لتعمل معنا")
}




