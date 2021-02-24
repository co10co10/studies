const array = [20,55,10];
const acsarray= [...array].sort((a,b) => a-b);
console.log(acsarray);
const descarray = [...array].sort((a,b) => b-a);
console.log(descarray);