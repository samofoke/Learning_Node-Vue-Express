const str = 'hello i am slimy the coder';
const name = 'Slimy';
const age = 30;
const job = 'Developer'
let html;
const numbers = new Array(2, 1, 5, 6, 8, 4, 9);
const coins = new Array('coind2', 'coin4', 'coin6', 'coin3');
let mx;
//without a template
//html = `<ul><li>Name: '+ name + ' </li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li></ul>';
function hi() {
    return 'Hello wolrd';
}
//with a template
html = `
    <ul>
        <li>Name: ${name} </li>
        <li>Age: ${age} </li>
        <li>Job: ${job} </li>
        <li>Function call: ${hi()}</li>
        <li>IP: ${age >= 30 ? 'i am old ' : 'still young try again when you older'}</li>
    </ul>
`;

mx = numbers.length;

//sort by comparing
mx = numbers.sort(function(x, y) {
    return x -y;
});

const person = {
    myName: 'Slimy'
}
//object literals
const people = [
    {name: 'sam', age: 19},
    {name: 'slice', age: 23},
    {name: 'mpho', age: 26},
    {name: 'kat', age: 20}
];
let x = 0;
while (x < people.length) {
    console.log(people[x].name);
    x++;
}
let y;

y = 0;
while (y < 1) {
    let s = 1;
    if (s > y) {
        console.log('i am correct.');
    }
    else {
        console.log('well try again.');
    }
    y++;
}
let ob;
let res;
const today = new Date();
res = today.getDay();
ob = person.myName;

const color = 'red';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('the color is blue');
        break;
    default:
        console.log("color doesn't exist");
        break;
}
//FUNCTION DECLARATIONS
function wake(){
    return 'Hi you have succefully loged in';
}

//FUNCTION EXPRESSIONS
const mult = function(x){
    return x*x;
};

//PROPERTY METHODS
const dolist = {
    add: function(){
        console.log('code classes later...');
    },
    edit: function(id){
        console.log(`your age is ${id}`);
    }
}

//LOOPS
for(let x = 0; x < 10; x++){
    if (x === 2){
        console.log("we don't have it");
        continue;
    }
    console.log('Number ' + x);
}

// buidling a password function
let pswd = 'hello wolrd';

if (pswd.length >= 6){
    if(pswd.indexOf(' ') === -1){
        console.log('Password is valid...');
    }
    else{
        console.log('the password is long, but contains spaces'); 
    }
}else{
    console.log('password is too short please try again');
}
//GOING THROUGH THE ARRAYS ITEMS
const items = ['gold', 'copper', 'zink', 'dimond', 'silver'];

/*for(let x = 0; x < items.length; x++){
    console.log(items[x]);
}*/

//The foreach method
items.forEach(function(item, index){
    console.log(`${index} : ${item}`);
});
//MAP object

const facceBook = [
    {id: 1, name: 'Sam'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Slice'}
];

const ids = facceBook.map(function(face){
    return face.id;
});

//The for in loop
const userlist = {
    first: 'Sly',
    second: 'Yoda',
    idnumber: 20163648
}

//FOREACH OBJECT
for(let x in userlist){
    console.log(`${x} : ${userlist[x]}`);
}

//WINDOW METHODS/ OBJECTS/ pROPERTIES

//window.alert('I am a programmer');

//prompt takes inputs
// const input = prompt();
// alert(input);

//confirm method
// if(confirm('are you sure of the functionality.')){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

//location object
fixMe = window.location;


console.log(fixMe);
dolist.add();
dolist.edit(15);
console.log(ids);
console.log(mult(2));
console.log(res);
console.log(ob);
console.log(numbers);
console.log(wake());
document.body.innerHTML = html;
val = str.split(' ');
console.log(val);
