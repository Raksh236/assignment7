function halfNumber(n){const r=Number(n)/2;console.log(`Half of ${n} is ${r}.`);return r}
function squareNumber(n){const a=Number(n),r=a*a;console.log(`The result of squaring the number ${a} is ${r}.`);return r}
function percentOf(p,w){const a=Number(p),b=Number(w),r=a/b*100;console.log(`${a} is ${r}% of ${b}.`);return r}
function findModulus(f,s){const a=Number(f),b=Number(s),r=a%b;console.log(`${r} is the modulus of ${a} and ${b}.`);return r}
function sum(){let t=0;for(let i=0;i<arguments.length;i++){const n=Number(arguments[i]);if(!Number.isNaN(n))t+=n}return t}
function promptAndSum(){const input=prompt("Enter numbers separated by commas (e.g. 1, 2, 3.5, -4):","");if(input===null){console.log("Prompt cancelled.");return null}const nums=input.split(",").map(s=>s.trim()).filter(Boolean).map(Number);const total=sum.apply(null,nums);console.log(`You entered: [${nums.join(", ")}] — The sum is ${total}.`);return total}
halfNumber(5);squareNumber(3);percentOf(2,4);findModulus(10,4);
