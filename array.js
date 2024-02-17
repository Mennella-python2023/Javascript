const arr = ["Lo", "mike", "Wal", "Sar", "Car", "Wal", "Lo"];
const arr2 = arr.filter ((value, index, array) => {
  console.log(value, index, array.indexOf(value));
  return array.indexOf(value) === index;
});
console.log(arr2);