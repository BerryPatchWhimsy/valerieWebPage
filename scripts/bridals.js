import { updateCurrentYear, updateLastModified } from "./getdate.mjs";


document.querySelector("#name").innerHTML = "Valeria's Boutique";

updateCurrentYear();
updateLastModified();

const button = document.querySelector("#menu");
const navigation = document.querySelector("#animateMe");
const container = document.querySelector("#bridalsContainer");

button.addEventListener("click", () => {
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});

const bridalsList = "data/bridals.json";
async function getBridalsData() {
    try {
        const response = await fetch(bridalsList);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        displayBridals(data.bridals); // Adjust this function as needed for your data structure
    } catch (error) {
        console.error("Error loading bridal data:", error);
        // Optional: display a message in the UI
        document.querySelector("#bridalsContainer").innerHTML = "<p>Unable to load bridal item information at this time.</p>";
    }
}

getBridalsData();
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




const displayBridals = (bridals) => {

    bridals.forEach(bridal => {

        const card = document.createElement("div");
        card.className = "bridal-card";

        const getAvailability = () => {
            const availability = bridal.availability;
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
        <img src="${bridal.imageURL}" alt="${bridal.name}" loading="lazy" width="400" height="400">
        <h2>${bridal.name}</h2>
        <ul>
          <li><strong>Price:</strong> $${bridal.price}</li>
          <li><strong>Size:</strong> ${bridal.sizeInches}</li>
          <li><strong>Availability:</strong> ${available.textContent}</li>
        </ul>
      `;



        let info = document.createElement("button");
        info.classList.add("bridalInfo");
        info.textContent = "Learn more";
        card.appendChild(info);


        container.appendChild(card);

        let dialog = document.createElement("dialog");
        dialog.classList.add("bridal-dialog");
        // dialog.id.add = `${name}`;
        dialog.innerHTML = `
                <a href="${bridal.imageURL}"><img src="${bridal.imageURL}" alt="${bridal.name}" loading="lazy" width="100" height="100"></a>
                <a href="${bridal.image2URL}"><img src="${bridal.image2URL}" alt="${bridal.name}" loading="lazy" width="100" height="100"></a>
                <h3>${bridal.name}</h3>
                <ul>
                    <li><strong>Price:</strong> $${bridal.price}</li>
                    <li><strong>Size:</strong> ${bridal.sizeInches} inches</li>
                    <li><strong>Descriptions:</strong> ${bridal.description}</li>
                    <li><strong>NOTE:</strong> Our website is currently under construction. If you are interested in any of our merchandise, please
                contact us via phone or email.
            We apologize for the inconvenience and appreciate your understanding!</li>
                </ul>
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