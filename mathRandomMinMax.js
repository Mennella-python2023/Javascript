

function ranNum(min, max) {
    return Math.floor(Math.random() * (max - min+1) + min);
}
for (let x = 0; x < 100; x++) {
  console.log(ranNum(1, 100));
}