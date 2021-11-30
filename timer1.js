const args = process.argv.slice(2)
for (let arg of args) {
  if (arg >= 0 && Number.isInteger(parseInt(arg, 10))) {
  console.log(arg);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, arg * 1000);
}};