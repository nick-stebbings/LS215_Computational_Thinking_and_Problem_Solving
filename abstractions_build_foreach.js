/*
P:

E:

D:
  Input =
  Output =

A:
   -
   -
   -
   -
   -
   -
*/
function myForEach(array, func) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    func(element, index, array);
  }
}

let min = Infinity;
let getMin = (value) => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);  