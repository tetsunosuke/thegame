function shuffle(array) {
  var n = array.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return array;
}


var cards = [];

// 全カード
for(var i=2; i<99; i++) {
    cards.push(i);
}

cards = shuffle(cards);

// 人数
var persons = {"A": [], "B": [], "C": [], "D":[]};
// 手札枚数
var start = 7;
var count = 0;
// 上から配る
for (var person in persons) {
    persons[person] = cards.slice(start * count, start * (count+1));
    count++;
}

// 山札
cards = cards.slice(count*start);

console.log(cards);
console.log(persons);