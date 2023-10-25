

let firstname:string = 'Ali';
// firstname = 5;
let nm:number = 10;
//let result:string = nm * 5;

// elimizde tipini bilmediğimiz bir nesne ile çalışıyorsak ve değişken değeri ile çalışıyor any tipinde işaretleyebiliriz.
let person: any;
person = {id:1, name:'ali'};
person = "person";

// union types bir değişken birden fazla değişken tipinde tanımlanabilir.

let brand:string | number; // string veya number tipinde bir tip olabilir. Union Types
brand = "Mercedes";
brand = 101;
// brand = true;

// kendi custom tip tanımımız
// Record type
// Data Structure amaçlı sadece içerisinde property değeleri bulunduran custom bir tip.
type Todo = {
  id:number;
  title:string;
  completed?:boolean; // optional
}

const todo:Todo = {id:1,title:'todo',completed:false};

// enum gibi bir tanımlama ile darkColor tipindeki değeri sadece aşağıdaki tanımlamalardan birisinin seçilmesini sağlayabilir.
// string literal type
type darkColor = "darkGray" | "darkBlack" | "darkBlue";

let color:darkColor = "darkBlue";

type Audit = {
  by:string;
}

// intersect işlemi 
// todo2 objesi hem Todo tipinden hemde Audit tipinden tanımlanacak.
// yani ikisine ait özelliklerede sahip olacak.
// & operatörü ile tip birleştirme işlemi yapmış oluyoruz.
const todo2:Todo & Audit = {id:1,title:'todo-2',by:'me'};




