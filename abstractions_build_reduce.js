function myReduce(array, func, initial) {
  let foldedValue = (typeof initial === 'undefined') ? array[0] : initial;
  for (let index = 0; index < array.length; index++) {
    if(typeof initial === 'undefined' && index == 0) continue;
    foldedValue = func(foldedValue, array[index])
}
  return foldedValue;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest)); // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10)); // 49
