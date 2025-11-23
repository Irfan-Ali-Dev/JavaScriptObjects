console.log("JavaScript Objects");

console.log("Solution # 1");

const students = [
    { name: "John", marks: 85 },
    { name: "Sara", marks: 92 },
    { name: "Mike", marks: 78 }
];
const tbl = document.querySelector("#tbl")

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);

    const row = tbl.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = students[i].name;
    cell2.textContent = students[i].marks;
}

const sName = document.querySelector("#sName")
const sNumber = document.querySelector("#sNumber")

function stdData() {
    tbl.innerHTML += `<tr>
    <td>${sName.value}</td>
    <td>${sNumber.value}</td> 
    <tr>`;
    sName.value = "";
    sNumber.value = "";
}

console.log("Solution # 2");

const topScr = document.querySelector("#topScr")
const stdScore = [
    {name: 'Irfan', scorer: 99},
    {name: 'Umair', scorer: 79},
    {name: 'Zaheer', scorer: 66}
]
let topScore = 0;
for (let i = 0; i < stdScore.length; i++) {
    console.log(stdScore[i]);
    if (stdScore[i].scorer > topScore) {
        topScore = stdScore[i];
        
    }
}
console.log("Top Score Gainer is:", topScore.name, "with Score:", topScore.scorer);
topScr.innerHTML = `Top Score Gainer is: ${topScore.name} with Score: ${topScore.scorer}`;

console.log("Solution # 3");

const showPrice = document.querySelector("#showPrice")
const products = [
    {pName: 'Table', price: 70},
    {pName: 'Table', price: 60},
    {pName: 'Table', price: 80}
]
let maxPrice = products[0];
let minPrice = products[0];
for (let i = 1; i < products.length; i++) {
    if (products[i].price > maxPrice.price) {
        maxPrice = products[i];
    }
    if (products[i].price < minPrice.price) {
        minPrice = products[i];
    }
}
console.log(`Most expensive: ${maxPrice.pName} - ${maxPrice.price}`);
console.log(`Least expensive: ${minPrice.pName} - ${minPrice.price}`);
showPrice.innerHTML = `Most expensive: ${maxPrice.pName} - ${maxPrice.price} </br> Least expensive: ${minPrice.pName} - ${minPrice.price}`; 

console.log("Solution # 4");

const textareaC = document.querySelector("#textareaC");
const wordList = document.querySelector("#wordList") 

const textA = textareaC.value;
const wordArray = textA.split(/\s+/);
const result = wordArray.join("<br />");
console.log(result);
wordList.innerHTML = result;

// console.log("Solution # 5");
// console.log("Solution # 6");
// console.log("Solution # 7");
// console.log("Solution # 8");
// console.log("Solution # 9");
// console.log("Solution # 10");
// console.log("Solution # 11");
// console.log("Solution # 12");
// console.log("Solution # 13");
// console.log("Solution # 14");
// console.log("Solution # 15");
// console.log("Solution # 16");
// console.log("Solution # 16");
// console.log("Solution # 17");
// console.log("Solution # 18");
// console.log("Solution # 19");
// console.log("Solution # 20");