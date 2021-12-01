const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recursiveFunc = () => {

  rl.question("Please set timer or ctrl + c to exit:  ", (answer) => {

  if (answer.toLowerCase() === "b") {
    process.stdout.write('\x07');
    recursiveFunc();
  }
  if (answer.match(/\d/)) {
    process.stdout.write(`setting timer for ${answer} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
      recursiveFunc();
    }, answer * 1000); 
  }
  if (answer.match('\u0003')) {
    process.stdout.write('Thanks for using me, ciao!');
    rl.close();
  }
  else {
    recursiveFunc()
  }
});
}

recursiveFunc();

// const args = process.argv.slice(2)
// for (let arg of args) {
//   if (arg >= 0 && Number.isInteger(parseInt(arg, 10))) {
//   console.log(arg);
//   setTimeout(() => {
//     process.stdout.write('\x07');
//   }, arg * 1000);
// }};


// setTimeout(() => {
//   process.stdout.write('\x07');
// }, arg * 1000);