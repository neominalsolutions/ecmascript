// array ile çalışırken forof
// c# daki foreach kullanımın aynısı object array ve kolleksiyon tanımlarında kullanılır.

const persons = [{id:1,name:"ali"}, {id:2, name:"tansu"}]


// 1. yöntem
for (const person of persons) {
  console.log("forOf", person.name);
}

// array sınıfının extend edip array sınıfına bir average function özelliği kazandımış olduk
// C# extension yapında static class ile this keyword ile çalışıyorsak javascripte bir değeri extend etmek için prototype kullanıyoruz.
Array.prototype.sum = function (... values) {

  let total = 0;

  for (let index = 0; index < values.length; index++) {
    const value = values[index];
    total+=value;
    
  }

  return total;
}

const arr = [];
const r1 = arr.sum(5,6,7,9);
console.log('r1', r1);


// bu değişiklik forOf ve forEach tekniğinde person referansı üzerinden yapılrı
persons.forEach(person => {
  person.name = "ali"; // person item değerini değiştirik.
  console.log("forEach", person.name)
});

console.log('persons-forEach', persons);

// obje dizilerinin içerisinde değerleri değiştirip geri döndürmek için kullanılan bir teknik.
// map ile değişen değerleri bir dizi içerisine atarız p2 farklı değerlere sahip yeni bir dizi özelliği almış olur
// react da obje dizi değerlerini ekran yansıtmak için map kullanımı yapıcaz. 
const p2 = persons.map(person => {
  return {
    id: person.id,
    name: person.name.trim().toUpperCase()
  };
})

console.log('p2', p2);
console.log('persons', persons);

// Ecmascript 6 ve sonrasında iterasyon teknikleri 
// 2. yöntem array foreach 

// 3. yöntem array map yöntemi

// forin ise bir object içerisinde propertylerde gezinti yapmamızı sağlayan bir iterasyon şekli (c# daki karşılığı reflection)
// Javascripte de reflection yok bu sebeple forin ile obje içerisinde gezinti yapıyoruz.

// apidan gelen veri obje yada obje dizisi formatında gelebilir. 
const person = {id:1,name:"yusuf", age:33};
 // person["name"] == person.name

for (const propertyName in person) {
  // person nesne içindeki property de dön
  // eğer person nesnesinin böyle bir property varsa
  if (Object.hasOwnProperty.call(person, propertyName)) {
    // javascript de bir objenin propertysine . veya index yöntemi erişile bilir
    const propertyValue = person[propertyName];
    console.log('propertyValue', propertyValue);
    
  }
}

// {page:{currentPage:1,limit:10},data:{id:1,name:"deneme"}}