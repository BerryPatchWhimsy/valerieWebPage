import { updateCurrentYear, updateLastModified } from "./getdate.mjs";


document.querySelector("#name").innerHTML = "Leafy Treetops";

updateCurrentYear();
updateLastModified();

const button = document.querySelector("#menu");
const navigation = document.querySelector("#animateMe");
const container = document.querySelector("#rentalsContainer");

button.addEventListener("click", () => {
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});

const treehousesList = "https://BerryPatchWhimsy.github.io/wdd231/project/data/rentals.json";
async function getTreehouseData() {
    try {
        const response = await fetch(treehousesList);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        displayTreehouses(data.rentals); // Adjust this function as needed for your data structure
    } catch (error) {
        console.error("Error loading treehouse data:", error);
        // Optional: display a message in the UI
        document.querySelector("#treehouse-container").innerHTML = "<p>Unable to load treehouse rentals at this time.</p>";
    }
}

getTreehouseData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
}
);

listbutton.addEventListener("click", showlist);

function showlist() {
    container.classList.add("list");
    container.classList.remove("grid");
}




const displayTreehouses = (treehouses) => {

    treehouses.forEach(treehouse => {

        const card = document.createElement("div");
        card.className = "treehouse-card";

        const getAvailability = () => {
            const availability = treehouse.availability;
            if (availability == true) {
                return `Available`;
            } else {
                return `Currently Unavailable.`;
            };
        };

        let available = document.createElement("li");
        available.classList.add("availability");
        available.textContent = getAvailability();


        card.innerHTML = `
        <img src="${treehouse.imageURL}" alt="${treehouse.name}" loading="lazy" width="400" height="300">
        <h2>${treehouse.name}</h2>
        <ul>
          <li><strong>Price:</strong> $${treehouse.price} / night</li>
          <li><strong>Beds:</strong> ${treehouse.numberOfBeds}</li>
          <li><strong>Availability:</strong> ${available.textContent}</li>
        </ul>
      `;



        let info = document.createElement("button");
        info.classList.add("treehouseInfo");
        info.textContent = "Learn more";
        card.appendChild(info);


        container.appendChild(card);

        let dialog = document.createElement("dialog");
        dialog.classList.add("treehouse-dialog");
        // dialog.id.add = `${name}`;
        dialog.innerHTML = `
                <h3>${treehouse.name}</h3>
                <ul>
                    <li><strong>Price:</strong> $${treehouse.price} / night</li>
                    <li><strong>Beds:</strong> ${treehouse.numberOfBeds}</li>
                    <li><strong>Square Footage:</strong> ${treehouse.squareFootage} sq ft</li>

                    <li><strong>Descriptions:</strong> ${treehouse.description}</li>
                </ul>
                <a href="${treehouse.imageArtistInfo}" target="_blank">Photo Credit</a>
                <button class="close-button">ⓧ</button>
            `;
        container.appendChild(dialog);

        info.addEventListener("click", () => {
            dialog.showModal();
        });

        let closeModal = dialog.querySelector(".close-button");
        closeModal.addEventListener("click", () => {
            dialog.close();
        });
    });
}