let main = document.querySelector("main"); //import elements
let button = document.querySelector("button");
let premain = document.querySelector(".premain");
let count = document.querySelector(".count");

button.addEventListener("click", function () {
  //onclick event listener
  let newArticle = document.createElement("article"); //create elements
  let newHeader = document.createElement("h2");
  let newParagraph = document.createElement("p");

  let newTopic = prompt("Enter journal topic", "");
  let newNote = prompt("Enter New Journal", "");
  let newDate = new Date(); //create date object

  newHeader.innerHTML = `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getYear()}: ${newTopic}`;
  newParagraph.innerHTML = newNote;

  //   main.appendChild(newArticle);
  main.insertBefore(newArticle, main.childNodes[0]);
  newArticle.appendChild(newHeader);
  newArticle.appendChild(newParagraph);
  countNote();
});

function countNote() {
  // function to count child elements
  let elemCount = main.childElementCount;
  count.innerHTML = `You have ${elemCount} journals`;
}
