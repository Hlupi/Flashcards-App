console.log("CONNECTED!");

var items = [
  {name: "for loop",
  explanation: "code that's executed for a certain number of times"},
  {name: "if statement",
  explanation: "executes a statement if a specified condition is truthy"},
  {name: "function",
  explanation: "a set of statements that performs a task or calculates a value"},
  {name: "HTML",
  explanation: "descriptive language that specifies webpage structure"}
];

// display a card in the div id  = 'card'
// var randomName = items[Math.floor(Math.random()*items.length)].name;
// var randomExplanation = items[Math.floor(Math.random()*items.length)].explanation;
// var randomCard =

var card = document.getElementById('card');
let random;
var buttonNext = document.getElementById('nextCard');
var newName = document.getElementById('inputName');
var newExplanation = document.getElementById('inputExplanation');
var addButton = document.getElementById('addButton');

// Display random card
buttonNext.addEventListener('click', function (event) {
  let pickCard = items[Math.floor(Math.random()*items.length)];
  card.innerHTML = pickCard.name;
  random = pickCard;
});

// Display that cards' explanation
card.addEventListener('click', function(event) {
  // var randomExplanation = items[Math.floor(Math.random()*items.length)].explanation;
  let ex = random;
  card.innerHTML = ex.explanation;
});

//Create new flashcards
addButton.addEventListener('click', function(event) {
  let newObject = {
    name: newName.value,
    explanation: newExplanation.value
  };
  if (newName.value == "" || newExplanation.value == "") {
    alert("You gotta fill in both fields there, mate");
    return
  }
  newName.value='';
  newExplanation.value='';
  items.push(newObject);
  console.log(newObject);
  console.log(items);

  // Save data to the current local storage
  localStorage.setItem("List", JSON.stringify(items));
})





//
// function names (array) {
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i].name);
//   }
// }
//
// names(items);
//
// function explanations (array) {
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i].explanation);
//   }
// }
//
// explanations(items);
