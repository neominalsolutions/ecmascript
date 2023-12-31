// ES6 ile birlikte class sınıf yapıları geldi.
// Prototype OOP
// function ES5 de class denk geliyor
// React Function Componentler için kullanım senaryosu
function Person(name,surname) {
  // this keyword ile variable field public oluyor
  this.name = name;
  this.surname = surname;
  this.age = 0;

  // method function içinde bir function tanımı olduğunda buda class method kullanılıyor.
  this.fullName  = function () {
    return this.name + " " + this.surname;
  }
}

// class dışında class extende ettik. extension
Person.prototype.setAge = function (age) {
  this.age = age;
}

var p = new Person("ali","tan"); // instance alma
p.setAge(25); // property set işlemi yaptık
console.log('p', p);

function Employee(socialNumber) {
  this.socialNumber = socialNumber;
}

var e = new Employee(1223);
e.__proto__ = p; // inheritance
console.log('e',e);

// person sınıfın prototipine dışarıdan function ekledik.

// TS ve ES6 class tanımları çok benzer
class Human{
  // #ifadesi ile artık değişken değerleri privat oldu
  #name; // field
  #surname; // field
  #age; // field

  // Javascript class sadece tek bir constructor bulunur.
  // constructor(){

  // }

  // constructor(name){
  //   this.name = name;
  // }
  constructor(name,surname){
    this.#name = name;
    this.#surname = surname;
  }

  // Javascript method ve getter setter, field tanımlarını default da publich tanımlar.
  // ES6 Class yapılarında private,protected ve public access modifiers tanımı yoktur.
  // ES6 ile birlikte getter setter kullanımı
  // getter
  get Age(){
    return this.age;
  }

  // setter
  set Age(value) { // JAVA
    this.age = value;
  }

  // method
  getFullName(){
    return this.name + " " + this.surname;
  }
}

// let h1 = new Human("tansu");
let h = new Human("ali","can");
h.Age = 14; // C# setter kullanımı
h.getFullName();

console.log('h', h);

// React Class Component için önerilen kullanım senaryosu

class Student extends Human {
  number; // field

  constructor(name,surname, number){
    // super keyword her zaman this keywordden önce gelir.
    super(name,surname); // C# base keyword denk gelir.
    this.number = number;
  }

  getFullName(){
    // kendi kod logic uygulanır.
    // JS Class yapıları içerisinde base sınıftan kalıtım alan sınıfın methodu ile aynı isimde bir method tanımı olursa otomatik ovveride eder. eğer base sınıfın methodunu tetiklemek istersek bu durumda super keyword base özelliklerine erişebiliriz.
    super.getFullName();
  }
}

var s = new Student("ahmet","can", "64545454");
console.log("s",s);