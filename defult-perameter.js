function add(num1, num2 = 33) {
    //option 1
    // num2 = num2 || 0;
    //option 2 
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15,);
console.log(result);

function fullname(first, last = 'Chowdhury') {
    const name = first + '' + last;
    return name;
}
