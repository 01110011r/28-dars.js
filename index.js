// vazifa-1

// const massBob = Number(prompt('1-massani kiriting !'));
// const heightBob = Number(prompt('1-boyingizni kiriting !'));
// const massJohn = Number(prompt('2-massani kiriting !'));
// const heightJohn = Number(prompt('2-boyingizni kiriting !'));
// const BobBmi = Math.round((massBob / heightBob) ** 2);
// const JohnBmi = Math.round((massJohn / heightJohn) ** 2);
// if (BobBmi > JohnBmi) { console.log(`Bobning BMI(${BobBmi}) Johnning BMI(${JohnBmi})idan katta. Farqli qiymat ${BobBmi-JohnBmi} (yuqorida kelgan javoblar taqribiy deb qaralsin !!!)`) } else if (BobBmi == JohnBmi) { console.log(`Bob va Johnning BMI lari teng. 
// (${BobBmi}=${JohnBmi}), (yuqorida kelgan javoblar taqribiy deb qaralsin !!!)`) } else { console.log(`Johnning BMI katta ${JohnBmi}.
// farqli qiymat ${JohnBmi-BobBmi} (yuqorida kelgan javoblar taqribiy deb qaralsin !!!)`) }

// vazifa - 2

let Date = 2023;
const userAge = Number(prompt('tugulgan yilingizni kiriting'));
if (Date - userAge <= 0) { console.log(`malumot xato kiritilgan bo'lishi mumkin ( ${Date-userAge} ?!)`) } else if (Date - userAge <= 18) { console.log(`sizning yoshingiz ${Date-userAge} da va siz o'qishingiz kerak`) } else if (Date - userAge < 60) { console.log(`sizning yoshingiz ${Date-userAge} da va siz ishlashingiz kerak`) } else { console.log(`sizning yoshingiz ${Date-userAge} da va siz nafaqa yoshidasiz`) };