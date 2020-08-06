var newArr2 = [10, 20, 30].map(function(index, currentValue) {
  console.log("index: ", index, "currentValue: ", currentValue); 
  console.log("this: ", this);
  return currentValue + 5;
});
console.log(newArr2);