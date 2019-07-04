let a1 = Number(prompt('Введіть координати а1'));
let a2 = Number(prompt('Введіть координати а2'));
let b1 = Number(prompt('Введіть координати b1'));
let b2 = Number(prompt('Введіть координати b2'));
let c1 = Number(prompt('Введіть координати c1'));
let c2 = Number(prompt('Введіть координати c2'));

let half = 2;
let d1 = (a1 + b1) / half;
let d2 = (a2 + b2) / half;

if (d1 === c1 & d2 === c2) {
    console.log(true);
} else {
    console.log(false);
}