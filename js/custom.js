import projectData from "/data/data.js"; // Ensure this path is correct
console.log(projectData);

const nav = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".pink-menu i");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("change"); // Toggle the sidebar visibility
    menuIcon.classList.toggle("fa-times"); // Change icon to 'X' when open
});


// Cards logic
let cards = document.getElementById('cards-wrapper');
function showCards(projects, cards) {
  for (let item of projects) {
    let card = document.createElement("div");
    card.classList.add("content");
    card.innerHTML = `<h2>${item.title}</h2>
    <img src=${item.image}>
    <p>${item.description}</p>
    <a href="${item.link}">Click Here</a>`;
    cards.appendChild(card);
  }
}

if (cards != null) {
  let projects = projectData;
  showCards(projects, cards);
}

// Toggle Visibility of hiddenDiv
const hidden = document.getElementById("hiddenDiv");
let hideShow = document.querySelector('.show-div');
const toggleButton = document.getElementById('toggleBtn');
toggleButton.addEventListener('click', toggleDiv);

function toggleDiv() {
  hideShow.classList.toggle('display-none');
}

// Color Picker Logic
let color = "#000000";
const form = document.getElementById("form");
form.addEventListener("submit", submitFunction);

function submitFunction(event) {
  event.preventDefault();

  const changeOption = document.getElementById("changeOption").value;
  const selectedColor = document.getElementById("selectColor").value;

  if (changeOption === "background") {
    hidden.style.backgroundColor = selectedColor;
  } else if (changeOption === "text") {
    hidden.style.color = selectedColor;
  }
  
  form.reset(); // Reset form after submission
}

// Dropdown change listener
let select = document.querySelector("select");
select.addEventListener("change", (event) => {
  color = event.target.value;
});




