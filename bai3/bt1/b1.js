let price = prompt("nhập giá"),total , quantity = prompt("Nhập số lượng");
total = price*quantity;
total = total-total*0.1
total = total+total*0.05;

console.log("Tổng: " + total)