// default export import tanımı
import Person  from "./08_export.js"; // using kod blogu

// birden fazla export aynı dosya dizinden dışarıya çıkyorsa
import { Export1, Export2 } from "./08_export.js";

// exportFile üzerinden bu dosyada ne var ne yoksa dışarı çıkar
// bu dışarı çıkarılan dosyayı exportFile ismi ile kullanacağım.
// namespace üzerinden eriştik
import * as exportFile from "./08_export.js";


const p = new Person("ali","can");
console.log("p", p);

Export1();
Export2();

// aynı method yada aynı sınıf ismine farklı export dosyalarında eriştiğimiz durumlarda namespace merge isim çakışmasını ortadan kaldırmak için kullanırız.
exportFile.Export1();
exportFile.Export2();