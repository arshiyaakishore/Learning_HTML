// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
let whisper= message.toLowerCase().trim()
------------------------
  // NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6


// YOUR CODE BELOW THIS LINE:
const roll=`You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
--------------------------
------LOGICAL AND--------
const mystery = 'P56p097'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!");
}
----------
//Array definition
let lottoNumbers=[1,2,3,4,5,6];
//Array access methods
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix']; //DON'T TOUCH THIS LINE!
// YOUR CODE BELOW HERE:
leaderboard[1]='Luna'
leaderboard[3]='Draco'
//Array methods
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!
// YOUR CODE GOES BELOW THIS LINE:
planets.shift('The Moon')
planets.push('Saturn')
planets.unshift('Mercury')
//Nested Arrays
// DO NOT TOUCH!!! (please)
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];
// YOUR CODE GOES BELOW THIS LINE:
airplaneSeats[3][1]='Hugo'

//LOOPS
// Print out "Da ba dee da ba daa" 6 times, using a for loop
for(let i=0; i<6; i++)
{
    console.log("Da ba dee da ba daa")
}


const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
// WRITE YOUR LOOP BELOW THIS LINE:
for(let i=0; i<people.length; i++)
{
    console.log(people[i].toUpperCase())
}

