const arr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];
const count = arr.length;
let random = Math.round(Math.random()*count);
const block = document.querySelector('div');
block.innerHTML = '<img src="../images/'+arr[random]+'" alt="'+arr[random]+'" />';