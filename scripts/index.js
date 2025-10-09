import { updateCurrentYear, updateLastModified } from "./getdate.mjs";
import { createCurrentSpecialCard, createUpcomingSpecialCard } from "./deals-cards.mjs";

document.querySelector("#name").innerHTML = "Leafy Treetops";

updateCurrentYear();
updateLastModified();

const button = document.querySelector("#menu");
const navigation = document.querySelector("#animateMe");

button.addEventListener("click", () => {
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});


const reserveButton = document.querySelector("#reserve");

reserveButton.addEventListener("click",  () => {
    window.location.href = "https://berrypatchwhimsy.github.io/wdd231/project/contact-us.html";
})

const dealsContainer = document.querySelector(".dealsInfo");

createCurrentSpecialCard();
dealsContainer.appendChild(createCurrentSpecialCard());

createUpcomingSpecialCard();
dealsContainer.appendChild(createUpcomingSpecialCard());


