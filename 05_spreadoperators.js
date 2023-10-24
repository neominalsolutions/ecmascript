// Ecmascript 6 JS köklü değişiklikleri ES6 ve sonrasında yaptı. 
// ES Js geliştirme standartı, ES6 C#9
// ES6 ve ES7 standartları birçok Browser Engine tarafından destekleniyor. 
// Codebase eski tarayıcılarda düşünülerek ES5 formatında dönüşüyor

// Referance Type ile çalışırken, referance typeların referanslarının koparılmasını sağlayan yeni bir referans üzerinden çalışmamıza imkan sağlayan bir operatör.
// Object.Assign komutu ile ES5 formatında referans hatalarından kurtulmak için kullanıyorduk. ES6 ile birlikte spread operatörü yaygın kullanıma başlandı.

const user = {id:1, username:"ali.tan", pass:"12435"};
const user1 = {... user}; // user değerleri user1 referans içine koplayalamış oluyoruz.
user1.username = "can.tan";

// React da virtula dom yapısının referans değerinin değiştiği anlayabilmesi için spread operatörü kullanmamız gerekiyor. yoksa dom arayüz kendini güncellemiyor.


// user2 referans değerini güncelledik. user referansıda değişti.
const user2 = user;
user2.username = "mustafa.tan";
user.pass = "5555";

// user ile user1 ramdeki referans birbirinde farklı

// E5 de kullanımı Object.assign tekniği ile obje referanslarını koparma yöntemi (eS6 da spread tercih edelim)

const user3 = {};
Object.assign(user3,user); // object assign ile spread operatörünün yaptığını yaparız.
user3.username = "jale";

console.log("user", user);
console.log("user2", user2);
console.log("user1", user1);
console.log("user3", user3);


// JS array bir objectir
const numbers = [1,2,3];

const numbers2 = numbers;

numbers2.push(6);
// referans hatasından dolayı her iki diziye de eleman eklendi. aslında biz sadece numbers2 dizisine ekleme yaptık.
console.log('numbers', numbers);
console.log('numbers2', numbers2);

const numbers3 = [... numbers]; // array spread operatör
numbers3.push(78);

console.log('numbers', numbers);
console.log('numbers3', numbers3);

// peki obje dizileri ile çalışırken referans değerlerini temizlemek için ne yapacağız.

const employees = [{id:1, name:"ahmet"}, {id:2, name:"tansu"}];

// [... sadece dizi referansı değiştiriyoruz]
// const employees2 = [... employees];
// employees2[0].name = "mustafa";

// eğer obje dizisi ile çalışıyorsa ve çalıştığımızının dizinin elemanların referanslarında koparıp diziyi clonelamak istersek bu durumda hep spread operatör hemde map yapısını kullanalım

// map ile de dizi referansı kopardık
const employees2 = employees.map(employee => {
  return {
    ... employee // spread ile object referans kopardık
  }
});

employees2[0].name = "mustafa";
console.log('employees2', employees2);
console.log('employees', employees);

console.log('employees', employees);
console.log('employees2', employees2);

// sadece dizinin referanslarını koparıp dizi içerisinde object referanslarını koparamadı.
const employees3 = [];
Object.assign(employees3, employees);

employees3[0].name = "canan";

console.log('employees', employees);
console.log('employee3', employees3);





