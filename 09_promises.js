// asenkron programalama mantığını yürüttüğümüz bir ortam.
// promise ES6 gelen asenkron kod blokları

// Promise söz demek, ya tutar (Resolve = Beklenen veriyi döndürürüz)  yada tutumayız (reject) Exception, Run Time Error, Network Error

// promise tanımları



var promise1 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Promise1") // data gönderim kod blogu
  }, 4000);
});

var promise2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Promise2");
  }, 1000)
});

var promise3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Promise3");
  }, 3000)
});

// şu aşağıdaki kod blokları birbirine paralel çalışacak 

console.log("senkron kod 1")

promise1.then(response => {
  console.log(response);
}).catch(err => {
  console.log(err);
})

console.log("senkron kod 2")

promise2.then(response => {
  console.log(response);
}).catch(err => {
  console.log(err);
})

console.log("senkron kod 3")

promise3.then(response => {
  console.log(response);
}).catch(err => {
  console.log(err);
})


// eğer asenkron kod bloklarının birbirlerini beklmesi ve sıralı bir şekilde çalışması gerekirse ne yapacağız ?
// promise.chain veya promise.all veya async await


function resolveAll() {

// promise içerisinde hepsi bittikten sora tüm promise verilerini tutacağımız bir değişken
const numbers = [];

const p12 = () => new Promise((resolve,reject) => {
  setTimeout(() => {
    numbers.push(12);
    resolve();
  }, 500)
})

const p11 = () => new Promise((resolve,reject) => {
  setTimeout(() => {
    numbers.push(11);
    resolve(numbers);
  }, 300)
})

numbers.push(13);

// Promise yapıları chain dediğimiz zincir yapıları ile birlikte çalıştıklartında eğer zincirdeki promiselerden birinde bir hata meydana gelirse bu durumda bütün zincir reject aynı transaction kavramı gibi.
const p13 = () => Promise.resolve(); // Promise.reject(10);

return p13().then(p12).then(p11); // Promise Chain
}

// 3 promise tek bir blok içerisinde çözümledik.
resolveAll()
.then(response => { // success
  console.log('response', response);
}).catch(err => { // birinde hata varsa promise resolve olmaz catch düşer. // Error
  console.log('err', err);
});


// 2. yöntem
// all içerisinde tanımlanmış dizilerden birinde bir hata durumu varsa reject döner. eğer hepsi başarılı ise tüm promise değerlerini bir dizi olarak döner.
Promise.all([promise1,promise3]).then(response => {
  console.log("promise-all", response)
}).catch(err => {
  console.log("promise-all-error", err);
});

// 3. yöntem tercih edilmeyem yöntem ise , iç içe promisleri basamak halinde yazmak

const promise4 = Promise.reject("Hata");

// böyle bir kullanımı önermiyoruz.

promise1.then(p1 => {
  console.log("p1", p1);
  promise2.then(p2 => {
    console.log("p2", p2);
    promise3.then(p3 => {
      // p1,p2 ve p3 sonucların hepsi elimizde
      console.log("p3", p3);
      promise4.then(p4 => {
        console.log("p4", p4);
      }).catch(err => {
        console.log("err",err);
      })
    }).catch(err => {
      console.log("Promise3 Error")
    })
  }).catch(err => {
    console.log("Promise2 Error")
  })
}).catch(err => {
  console.log("Promise1 Error")
})








