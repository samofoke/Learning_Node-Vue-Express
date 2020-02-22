//building called function

function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`result: ${roll}`);
}

function howMany() {
    let x = 0;
    while (x < 6) {
        rollDice();
        x++;
    }
    if(x % 3 == 0) {
        console.log('SUCESS..');
    }
    else {
        console,log('TRY AGAIN')
    }
}

//howMany();

//Password validator
const details = {
    password: 'Sly@#$1234',
    Username: 'Slimy'
};

function isValidPassword(pass, userName) {
    if (pass.length < 8 && pass.indexOf(' ') !== -1 && pass.indexOf(userName) !== -1) {
        return false;
    }
    else {
        return true;
    }
}

//Building an avarage calc

function avg(arr) {
    let total = 0;

    for (let n of arr) {
        total = total + n;
    }
    let res = total / arr.length;
    return res;
}

//is pangram 

function findMe(sen) {
    let low = sen.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz') {
        if (low.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

//lexical scope for nested functions

function outer() {
    let hero = 'Iron-Man';

    function inner() {
        let saveMe = `${hero}, please help me I am too young to die`
        console.log(saveMe);
    }
    inner();
}

outer();


//Function Expressions 
const product = function mult(x, y) {
    return x * y;
}

console.log(product(3, 2));

//Return Functions 

function make(x, y) {
    return function(num) {
        if (num >= x && num <= y) {
            return true;
        }
        else {
            return false;
        }
    }
}

const isWorking = make(0, 18)

//ForEach concept 
const books = [
{
    title: 'Wealth of nations',
    author: ['Adam', 'Smith'],
    rating: 3.4
},
{
    title: 'Introduction to C++',
    author: ['Sam', 'King'],
    rating: 3.9
},
{
    title: 'Blood of the Fold',
    author: ['Terry', 'Goodkind'],
    rating: 4.5
},
{
    title: 'Martial God Asura',
    author: ['Lieou', 'Xamin'],
    rating: 2.8
}
]

books.forEach(function(book) {
    console.log(book.title.toUpperCase());
});

//The Map 
const text = ['slimy', 'sello', 'mpho', 'Tshepo'];
const caps = text.map(function (t) {
    return t.toUpperCase();
});

text;
caps;

//is even or odd using the map method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20];

const numDetail = numbers.map(function (n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
});

const joinMe = text.map(function (me) {
    return me.toUpperCase().split('').join('.');
});

//Syntax for arrow functions
const simple = (m) => {
    return m * m;
}
// Using arrow functions using implicit returns

const evenMaster = numbers.map((set) => (
    set % 2 === 0 ? 'EVEN' : 'ODD' 
))

//The find Method
let Movies = [
    "Iron"
]







