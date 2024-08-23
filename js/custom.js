import projectData from "/data/data.js";
console.log(projectData)

const nav = document.querySelector(".sidebar");
const icon = document.querySelector(".pink-menu i");

icon.addEventListener("click", showNav);
function showNav() {
  icon.classList.toggle("fa-times")
  nav.classList.toggle("change");
  // nav.classList.toggle("display-none")
  // nav.classList.add("change")
};
// showNav()

//NavBar starts hidden (displau: none)
//When the user clicks the button, the nav shows


let cards = document.getElementById('cards-wrapper');

function showCards(projects, cards) {

  for (let item of projects) {
    let card = document.createElement("div")
    card.classList.add("content")
    card.innerHTML = `<h2>${item.title}</h2>
    <img src=${item.image}>
    <p>${item.description}</p>
    <a href="${item.link}">Click Here</a>`
    cards.appendChild(card)
  }
}

if (cards != null) {
  let projects = projectData;
  showCards(projects, cards);
};



let hideShow = document.querySelector('.show-div');

const toggleButton = document.getElementById('toggleBtn');
toggleButton.addEventListener('click', toggleDiv);

function toggleDiv() {
  hideShow.classList.toggle('display-none')
};
let color = "#E99394";
let textColor = "#b36a5eff";

let userArray = [];
const form = document.getElementById("form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());
	//above is boiler plate code
	userArray.push(dataObject);
  changeColor(color);
  changeTextColor(textColor);
	form.reset();
};


let select = document.querySelector("select");
  select.addEventListener("change", (event) => {
    color = event.target.value;
   
    
  });
let coloredText = document.querySelector("label");
  coloredText.addEventListener("change", (event) => {
    color = event.target.value;
   
    
  });


function changeColor(value) {
  console.log(value)
  hideShow.style.backgroundColor = value;
};
function changeTextColor(value){
  coloredText.style.color = value;
}


