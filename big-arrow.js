const add = (num1, num2) => num1 + num2;
const input = (input1, input2) => input1 + input2;

const sum = add(22, 90);
const multiply = (num1, num2, num3) => num1 * num2 * num3;

const fiveTimes = (num) => num * 5;
const tenTimes = num => num * 10;

const output = fiveTimes(17);
const value = tenTimes(17);

const getName = () => 'Brandon Sam';
const name = getName()


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum / diff;
    const output = result * 5;
    return output;
}
const total = doMath(12, 6);
console.log(total);


document.getElementById('my-btn').addEventListener(event => {

})