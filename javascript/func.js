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