function numToChoice(n){return["rock","paper","scissors"][n]}
function getComputerChoice(){const n=Math.floor(Math.random()*3);return numToChoice(n)}
function normalize(s){return String(s||"").trim().toLowerCase()}
function playRPS(){const raw=prompt("Choose rock, paper, or scissors:");if(raw===null)return;const user=normalize(raw),valid=["rock","paper","scissors"];if(!valid.includes(user)){alert(`Invalid input: "${raw}". Please enter rock, paper, or scissors.`);return}const computer=getComputerChoice();if(user===computer){alert(`Tie! You both chose ${user}.`);return}const win=user==="rock"&&computer==="scissors"||user==="scissors"&&computer==="paper"||user==="paper"&&computer==="rock";if(win){alert(`You win! ${user} beats ${computer}.`)}else{alert(`Computer wins! ${computer} beats ${user}.`)}}
playRPS();
