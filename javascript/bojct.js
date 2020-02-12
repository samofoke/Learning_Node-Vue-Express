// //Object literals

// const fitData = {
//     gender: 'male',
//     age: 32,
//     totalSpeed: 262,
//     runTime: 243.5
// }

// let data = {
//     100: 'one handred',
//     5: 'five',
//     1: 'one',
//     20: 'twenty'
// }

// const users = {
//     username: 'sly',
//     email: 'sly@gmail.com',
//     notification: ['hi there']
// };

// if(users.notification.length === 0){
//     console.log('no new notifications available.');
// }
// else{
//     console.log('nottication active.');
// }

// for(let x = 0; x <= 5; x++){
//     console.log(`${x} * ${x} = ${x * x}`);
// }

// const myStudents = [
//     {
//         firstname: 'mpho',
//         marks: 64
//     },
//     {
//         firstname: 'sabata',
//         marks: 52
//     },
//     {
//         firstname: 'sipho',
//         marks: 86
//     },
//     {
//         firstname: 'sello',
//         marks: 70
//     }
// ];

// let total = 0;

// for(let x = 0; x < myStudents.length; x++){
//     let student = myStudents[x];
//     console.log(`${student.firstname} scored ${student.marks}`);
//     total = total + student.marks;
// }
// //building a game board
// const gameBoard = [
//     [4, 8, 12, 1],
//     [15, 3, 6, 20],
//     [7, 14, 4, 3],
//     [2, 25, 16, 0]
// ];

// let totalScore = 0;

// for(let x = 0; x < gameBoard.length; x++){
    
//     let row = gameBoard[x];
//     for(let y = 0; y < row.length; y++){
//         totalScore = totalScore + row[y];
//     }
// }

// //buidling a math random function
// let guess;

// const target = Math.floor(Math.random() * 10);

// while (guess !== target){
//     console.log(`target: ${guess} guess: ${target}`);
//     guess = Math.floor(Math.random() * 10);
// }


// console.log(`target: ${guess} guess: ${target}`);
// console.log('Nice job you wing...');
// console.log(totalScore);
// console.log(total);
// console.log(total/myStudents.length);
// console.log(data);