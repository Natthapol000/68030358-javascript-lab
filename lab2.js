// =================================
// LAB 2.1 ตัวแปร + Object
// =================================

// ตัวแปรข้อมูลนักศึกษา
let studentId = "68030358";
let studentName = "ณัฐพล";
let midtermScore = 35;
let finalScore = 40;

// Object ข้อมูลนักศึกษา
const student = {
    id: "68030358",
    name: "ณัฐพล",
    major: "Information Technology",
    gpa: 3.25
};

console.log("===== LAB 2.1 =====");
console.log(student);


// =================================
// LAB 2.2 คำนวณคะแนน + VAT
// =================================

// คะแนน 3 วิชา
let subject1 = "Computer System";
let subject2 = "Database";
let subject3 = "Digital Citizens";

let score1 = 68;
let score2 = 51;
let score3 = 80;

// ค่าเฉลี่ย
let average = (score1 + score2 + score3) / 3;

console.log("===== LAB 2.2 =====");
console.log(subject1, score1);
console.log(subject2, score2);
console.log(subject3, score3);
console.log("คะแนนเฉลี่ย =", average.toFixed(2));


// คำนวณ VAT
let productName = "Notebook";
let price = 20000;
let vat = price * 0.07;
let totalPrice = price + vat;

console.log("สินค้า:", productName);
console.log("ราคาสุทธิ =", totalPrice);


// =================================
// LAB 2.3 เงื่อนไข + Loop
// =================================

console.log("===== LAB 2.3 =====");

// ตรวจเลขคู่/คี่
let number = 19;

if (number % 2 === 0) {
    console.log(number + " เป็นเลขคู่");
} else {
    console.log(number + " เป็นเลขคี่");
}


// สูตรคูณแม่ 2 (for)
console.log("สูตรคูณแม่ 2");
for (let i = 1; i <= 12; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}


// สูตรคูณแม่ 3 (while)
console.log("สูตรคูณแม่ 3");
let i = 1;
while (i <= 12) {
    console.log("3 x " + i + " = " + (3 * i));
    i++;
}


// นับถอยหลัง
console.log("นับถอยหลัง");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// ตรวจช่วงวัย
let age = 19;

if (age <= 12) {
    console.log("วัยเด็ก");
} else if (age <= 18) {
    console.log("วัยรุ่น");
} else {
    console.log("วัยผู้ใหญ่");
}
