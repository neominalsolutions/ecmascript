
abstract class Human {
  protected abstract takeBreath():void;
}

class Person extends Human{
  

  private name:string;
  private surname:string;
  private age:number;

  get Age():number{
    return this.age;
  }

  set Age(age:number) {
    this.age = age;
  }

  // tek constructor olmak zorunda
  constructor(name:string,surname:string) {
      super();
      this.name = name;
      this.surname = surname;
  }

  // Human sınıfan geldi ovveride edildi.
  takeBreath(): void {
    throw new Error("Method not implemented.");
  }

  // önüne bir tanımlama yapmadığımız access modifier eklemediğimiz methodlar public sayılır
  getFullName():string {
    return `${this.name} ${this.surname.toUpperCase()}`
  }

}

const p = new Person("ali","can");
p.getFullName();

interface HomeWork {
  do():void;
}



// TS C# daki gibi multi inheritance yok
class Student extends Person implements HomeWork {
  
  private studentNumber:string;

  set StudentNumber(nm:string){
    this.studentNumber = nm;
  }

  get StudentNumber(){
    return this.studentNumber;
  }

  constructor(name:string,surname:string) {
    super(name,surname);
    
  }

  do(): void {
    throw new Error("Method not implemented.");
  }

  // override takeBreath(): void {
  //   throw new Error("Method not implemented.");
  // }
}

const st = new Student("ali","hakan");
st.Age = 34;
st.StudentNumber ='234324';


// Generic Types

let numbers:Array<number> = [1,2,3,4,5];

// Generic Class yapısı
class Entity<TKey> {
  Id:TKey;
}

class Employee extends Entity<string> {}

let e:Employee = new Employee();
e.Id = "4324324234";


// Enums
// key karşılığının numeric olma zorunluluğu yok string ifadeler kullanabilir.
enum PaymentTypes {
  Credit = "Kredi Kartı",
  Cash = "Nakit"
}

// PaymentTypes.Cash

// Static sınıflar ile çalışma şekli. Genelde Helper, Utils adı altında yardımcı methodları içinde barındıran sınıflarımız

// bir sınıfın için static bir method varsa sınıf isiminde direk erişim sağlayabiliyoruz.
class StringHelper {
  static toUpper(text:string):string {
    return text.toUpperCase();
  }
}

StringHelper.toUpper('ali');






