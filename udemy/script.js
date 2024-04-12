// // 'use strict';

// /*Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavarad',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],

//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// /*1. Create one player array for each team (variables 'players1' and
// 'players2')*/
// const [players1, players2] = game.players;

// /*2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players*/

// const [gk, ...fieldPlayers] = players1;

// console.log(gk);
// console.log(fieldPlayers);

// // 3. Create an array 'allPlayers' containing all players of both teams (22
// //   players)

// const allPlayers = [...players1, ...players2];

// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'

// const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')

// // const { team1, x: draw, team2 } = game.odds;

// // OR

// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);
// /*6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)*/

// function printGoals(...players) {
//   for (let i = 0; i < players.length - 1; i++) {
//     console.log(players[i]);
//   }
//   console.log('score: ' + players.length);
// }

// printGoals(...game.scored);

// /*7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.*/

// team1 < team2 && console.log('Team 1 is more likely to win');

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const updatedNames = [];
//   for (const n of names) {
//     updatedNames.push(n[0].toUpperCase() + n.slice(1));
//   }

//   return updatedNames;
// };

// console.log(capitalizeName('dennis castillo'));
// console.log(capitalizeName('jenica'));

// const maskGcashNumber = function (number) {
//   const str = number + '';
//   const last4Digits = str.slice(-4);
//   return last4Digits.padStart(str.length, '*');
// };

// console.log(maskGcashNumber('09053099520'));
// console.log(maskGcashNumber(982917813));
// console.log(maskGcashNumber(1208));

// console.log('jen'.repeat(7));

// const plains = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// plains(7);
// plains(1);
// plains(20);
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));

document.body.append(document.createElement('button'));
const text = document.querySelector('textarea');
const btn = document.querySelector('button');

const convertVariableNames = function (variable) {
  const varArray = variable.split('\n' || ' ');
  for (const [index, value] of varArray.entries()) {
    const lower = value.toLowerCase();
    const lowerArray = lower.split('_');
    const camelCase =
      lowerArray[0] + lowerArray[1][0].toUpperCase() + lowerArray[1].slice(1);
    console.log(
      camelCase
        .replace(/ /g, '')
        .padEnd(25, ' ')
        .padEnd(25 + (index + 1), '✅')
    );
  }
};

btn.addEventListener('click', function () {
  convertVariableNames(text.value);
});
