// #1 not passing
var makeArray = []
function forLoop(array) {
 for (let i = 0; i < 25; i++) {
   makeArray.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
 } return (makeArray)
}

// #2 this one passes
let n = 50;

function whileLoop(n) {
  while (n > 0) {
  console.log(--n)
}
  return ('done');
}
// #3 ISS WORKINNNNGGG
var newArray = ['tommy', 'billy', 'susie', 'becky']

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    newArray.pop()
  } while (newArray.length > 0 || maybeTrue());
    return newArray
}








