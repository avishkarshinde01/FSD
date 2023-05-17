// name is already se

// const uc=require('upper-case');
// const name='raj';
// console.log(`Hello ${uc.upperCase(name)} nice to meet you!`);


//if name to be accptd from user
const readline = require('readline');
const uc = require('upper-case');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
if(name=='raj'){
  console.log(`Hello, ${uc.upperCase(name)}, nice to meet you!`);}
else{
console.log(`Hello, ${name}, nice to meet you!`);}
  rl.close();
});
