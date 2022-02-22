let priyoPerson = 'kulsom begum';
priyoPerson = 'momotaz begum';
const hubby = '';

//defult perameter
function getName(first, last = 'chowdhury') {
    return first + ' ' + last;
}

//templeat string
const myPeople = `My people are ajaira dhur ${hubby} and his fullName is ${getName('janina')}.my name is ${priyoPerson}.`
console.log(myPeople);

//arrow function
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => x * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondePart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondePart) * thirdPart;
    return result;
}

const numbers = [2, 4, 76, 54];
const min = Math.min(...numbers);
console.log(min);