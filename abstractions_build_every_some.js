function myOwnEvery(array, func) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!func(element)) { 
      return false;
    }
  return true;
}
}
function myOwnEvery1(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

let isAString = (value) => typeof value === "string";
console.log(myOwnEvery([1, "a234", "1abc"], isAString));
 // true
 