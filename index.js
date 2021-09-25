var readlineSync = require('readline-sync');
const chalk = require('chalk');
const movie = 'Inception';
let score = 0;
let highestScores = [
  {name: 'alisha', score: 5},
  {name: 'yash', score: 4}
];


// Questions Answers Arrays
let questions = [
    {
      question: `Who is the actor of ${movie} ?`,
      answer: 'leonardo di caprio'
    },
    {
      question: `Who is the director of ${movie} ?`,
      answer: 'christopher nolan'
    },
    {
      question: `What was the name of Leonardo in ${movie} ?`,
      answer: 'cobb'
    },
    {
      question: `when was ${movie} released ?`,
      answer: '2010'
    }
]
// getting name
let name = readlineSync.question('What is your name ?');
console.log(`Welcome ${name}, have you watched "Inception"?, lets test!`);

// Looping through each object stored in 'questions' array
questions.forEach((question) => {
  // Asking the question via command line
  let answer = readlineSync.question(chalk.yellow(`${question.question} `));
  // checking the answer against the one stored in 'questions' array
  if(answer.toLocaleLowerCase() === question.answer){
    console.log(chalk.green('right!'));
    console.log(chalk.green(`current score ${++score}`));
    console.log('---------------');
  }
  else{
    console.log(chalk.red('wrong!'));
    console.log(chalk.red(`current score ${--score}`));
    console.log('---------------');

  }
});

// Giving the score outputs
if (score > 0) console.log(chalk.green(`yay! you scored ${score}`));
else console.log(chalk.redBright(`oops! you scored ${score} try again`));

console.log('Checkout the score board!');
highestScores.push({name: name, score: score});
highestScores.forEach((info) => { 
  console.log(chalk.green(`${info.name} : ${info.score}`));
})
