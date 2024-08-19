import projectData from "/data/data.js";
console.log(projectData)

const nav = document.querySelector(".sidebar");
const icon = document.querySelector(".pink-menu i");




icon.addEventListener("click", showNav);
function showNav() {
  icon.classList.toggle("fa-times")
  nav.classList.toggle("change");
};
showNav()



let cards = document.getElementById('cards-wrapper');
if (cards != null) {
  let projects = projectData;
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
  showCards(projects, cards);



  let cardsBG = document.getElementById("cardbg");
  cardsBG.addEventListener("click", changeColor);
  function changeColor() {

    let selectColor =
      document.getElementById("selectColor").value;

    // From the drop-down menu, obtain 
    // the value of the chosen color.
    let selectedColor =
      selectColor.options[selectColor.selectedIndex].value;

    // Set the font color of the "gfg" 
    // element to the selected color
    cardsBG.style.color = selectedColor;
    cardsBG.style.backgroundColor = selectedColor;
  };





// let arrow = document.getElementById('scroll');
// arrow.addEventListener('click', scrollUp);
// function scrollUp() {

// }

