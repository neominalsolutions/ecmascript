// JS ortamında primative types (ilkel veri tipleri) (value type)
// number, (decimal,float,double,int,long,short,byte)
// string, (char yok)
// boolean
// undefined // tanımsız değişken tanınmlanmış ataması yapılmamış

// complex types (reference types)
// object, array, function
// JS interface yok, Generic Class yok, enum yok (Typescript tarafından desteklenen tipler)

// JS ortamında değişken tanımını var keyword ile yapıyor

let a = 5; // number
let b = "ali"; // string
let c = true; // boolean

if(a == 6){
  // blok içerisinde a ile
  // blok dışında kalan a birbirinde farklı mı
  let a = 10;
}

// let a = 45;


// bir kere değer ataması yapılırsa bir daha const ifade farklı bir değer ataması yapamıyoruz. const c#
const k = 15;
// k = 56;

console.log("k", k);

// değişken değeri eğer algoritma içerisinde değişecek ise let kullanılabilir.
let f = 25;
f = 26;

console.log("f", f);

// a 5 mi yoksa 10 mu
console.log("a", a);

// value types için const sabit değişken tekrar değer ataması yapılamaz, let tekrar değer ataması yapılabilir.

// referance types let,const kullanımı

// JS herhangi bir class açmadan direk bir obje instance alınabilir. new ile yeni bir instance üretmemize gerek yok.
const person = {id:1, name:"ali"}; // literal object js
person.age = 16; // age property ekledik.
person.name = "ahmet";

// const ile çalışırken referans type içindeki propertyler güncellenebilir.

console.log("person", person);

// const tekrar farklı bir referansın verilmesinin önüne geçer.
// person = {id:2,name:"mustafa"};

// aynı kural js de array object tipinde olduğundan dizilerde de geçerlidir.
const names = ["ali","can","canan"];
// names = ["mustafa","hakan"]; // js için yanlış bir tanımlama


console.log("names array" , typeof(names))
console.log("person" , typeof(person))
console.log("k" , typeof(k))
console.log("f" , typeof(f))


// === ile == aynı şey değildir.
// === ile hem değer hemde tip kontrolü yapılır
// == ile sadece değer kontrolü yapılır.


let xz = "5";
let gh = 5;

if(xz == gh) {
  console.log("eşit"); // true
} else {
  console.log("eşit değil");
}

if(xz === gh) {
  console.log("değer ve tip eşitliği"); 
} else {
  console.log("değer veya tip eşitliği yok"); // true
}


if(xz == gh && typeof(xz) == typeof(gh)) {
  console.log("değer ve tip eşitliği"); 
} else {
  console.log("değer veya tip eşitliği yok"); // true
}

// js de undefined değişken tanımı;

let tt; // değişken tanımladık ama atamasını yapmadık. c# bu tip için default değer verir. js ise herhangi bir default değer ataması yapmaz.

// js de kod kontrol type check
if(tt == undefined){

}

console.log("tt", tt);

// logical error exception oluşturmaz
let rr = "55";
let yy = "a";

let result = rr / yy; // hata exception yok
console.log("result", result); //NaN sonuc Not a Number








