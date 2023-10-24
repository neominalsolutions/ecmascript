// Module sistemi sayesinde birden fazla js dosyası birbileri ile haberleşebilir.
// aynı isme sahip dosyaları module içerisinde tutarak namespace tanımı yapıyoruz.

// 2 farklı export import formatı var.
// ES Module formatını react uygulamalarında kullanıyoruz
// Nodejs Express uygulamalarında ise genelde CommonJS formatı kullanılıyor.

function Person(name,surname){
  this.name = name;
  this.surname = surname;
}

// eğer ismi ile bir nesne dışırıdan çağırılacaksa default keyword tercih edilir.
export default Person; // export C# public keyword tanımına eş değer.


// bir js dosyasında birden fazla export varsa 
export function Export1(){
  console.log("Export1");
}

export function Export2(){
  console.log("Export2");
}

// 2. kullanım şekli CommonJS formatı