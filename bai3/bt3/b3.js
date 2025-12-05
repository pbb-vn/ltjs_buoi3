let weight = prompt("Nhap can nang:")
let height = prompt("Nhap chieu cao:")
let bmi = weight/(height*height);

if (bmi<18.5) console.log("Gầy")
else {
    if (bmi>=25) console.log("Béo")
    else console.log("Bình thường")
}