const sum1 = (x:number,y:number = 5):number => {
  return x + y;
}

function sum2(... params:number[]):number {
  return 1;
}

// void tipi ile function herhangi bir dönüş değeri yok
function showMessage(message:string):void {
  alert(message);
}

// sum1();
// sum1('4', 5);
// sum1(5);
// aşağıdaki ifadede y default değer tanımı aldığı için y ihtiyaç duymadı
sum1(6);
let result:number = sum1(4,5);