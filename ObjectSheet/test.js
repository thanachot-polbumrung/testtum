// sheet เรื่อง object

// การประกาศตัวแปล object
const person1 = {
  name: "สมชาย",
  age: 25,
  city: "กรุงเทพ",
};

// วิธีการเข้าถึงค่า name ใน object
console.log(person1.name);
console.log(person1["name"]);


// วิธีการกำหนดค่าข้างใน name ใน object 
person1.name = "boat";
console.log(person1);
person1["name"] = "tum"; // เหมือนการเข้าถึงของ array แต่จะ array จะใช้ำแหน่งที่เป็น int array[0] แต่ object จะเป็น key ที่เป็น String
console.log("person1 >> ", person1);

//สามารถกำหนดค่าที่ไม่มีอยู่แล้วในตอนประกาศ object ได้ เช่น
person1.weigth = 80;
console.log(person1);
person1["weigth"] = 20;
console.log(person1);



// ถ้ากำหนด key ซ้ำจะเอาค่า ของ key ล่าสุด
const person2 = {...person1, name: "boat", age: 24}
console.log("person2 >> ", person2);
