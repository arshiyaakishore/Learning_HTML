let max=parseInt(prompt("Enter your max number:"));

while(!max)
{
  max=parseInt(prompt("Enter your valid max number:"));
}

const targetnum= math.floor(math.random() *max)+1
console.log(targetnum)

let guess=parseInt(prompt("Enter your firat guess:"))
attempts=1;
while(guess!=taregtnum)
  {
    attempts++;
    if(guess>targetnum)
    {
     guess= parseInt(prompt("TOO HIGH!! enter a new guess:"));
    }
    else{
      guess=parseInt(prompt("TOO LOW enter new guess: "));
    }
    
  }
console.log(`You got it! It took you ${attempts} attempts`);
