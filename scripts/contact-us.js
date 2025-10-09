import { updateCurrentYear, updateLastModified } from "./getdate.mjs";


document.querySelector("#name").innerHTML = "Leafy Treetops";

updateCurrentYear();
updateLastModified();

const button = document.querySelector("#menu");
const navigation = document.querySelector("#animateMe");

button.addEventListener("click", () => {
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form1");

    form.addEventListener("submit", () => {
        // Prevent actual submission to thank-you.html (only if testing)
        //e.preventDefault(); 

        // Gather data
        const formData = {
            name: document.querySelector("#customerName").value,
            email: document.querySelector("#email").value,
            address: document.querySelector("#propertyAddress").value,
            date: document.querySelector("#formDate").value,
            phone: document.querySelector("#tel").value,
            emailUpdates: document.querySelector("input[name='emailUpdates']:checked")?.value || "no selection",
            newsletter: document.querySelector("input[name='newsletter']:checked")?.value || "no selection"
        };

        // Save to localStorage
        localStorage.setItem("contactFormData", JSON.stringify(formData));

        // Optional: Console log for testing
        console.log("Form data saved:", formData);
    });
});
  
