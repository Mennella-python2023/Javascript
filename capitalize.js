const val = "this will bE caPitALIZED for eACH woRD";
function wordsCaps(str) {
  str = str.toLowerCase();
  const tempArr = [];
  let words = str.split("");
  words.forEach(word => {
    let temp = word.toUpperCase();
    tempArr.push(temp);
  })
  return tempArr.join("");
}
console.log(wordsCaps(val));