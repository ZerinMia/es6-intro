const friends = ['mamun', 'halima', 'kawsar'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new2 = `<h3 class="friend-name">Friend-${friends.length}</h3>`

const first = 'Mamun';
const last = 'Chowdhuty';
const fullOld = first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. has money ${friends.length * 500.}.He lives in Dhaka`;
console.log(fullNew);