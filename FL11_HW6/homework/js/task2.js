let a = Number(prompt('Введіть сторону  А', 0));
let b = Number(prompt('Введіть сторону  B', 0));
let c = Number(prompt('Введіть сторону  C', 0));

let trtype = '';

if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    console.log('Triangle doesn’t exist’');
} else {

    if (a === b & b === c & c === a) {
        trtype = 'Eequivalent triangle';
    } else if (a === b || b === c || c === a) {
        trtype = 'Isosceles triangle';
    } else if (a !== b && b !== c && c !== a) {
        trtype = 'Normal triangle';
    } else {
        trtype = 'Normal triangle'
    }

    console.log(trtype);
}