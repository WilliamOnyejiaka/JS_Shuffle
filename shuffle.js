
function shuffle(str) {
  str = str.split("");
  let [currentIndex, randomIndex, tempValue] = [str.length, null, null];

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    tempValue = str[randomIndex];
    str[randomIndex] = str[currentIndex];
    str[currentIndex] = tempValue;
  }
  return str.join("");
}

let shuffled = shuffle("hello");
console.log(shuffled);
