import { updateCurrentYear, updateLastModified } from "./getdate.mjs";


document.querySelector("#name").innerHTML = "Valeria's Boutique";

updateCurrentYear();
updateLastModified();

const button = document.querySelector("#menu");
const navigation = document.querySelector("#animateMe");
const container = document.querySelector("#quiltsContainer");

button.addEventListener("click", () => {
    navigation.classList.toggle("open");
    button.classList.toggle("open");
});

const quiltsList = "https://BerryPatchWhimsy.github.io/wdd231/project/data/quilts.json";
async function getQuiltsData() {
    try {
        const response = await fetch(quiltsList);
        if (!response.ok) {
            throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        displayQuilts(data.quilts); // Adjust this function as needed for your data structure
    } catch (error) {
        console.error("Error loading quilt data:", error);
        // Optional: display a message in the UI
        document.querySelector("#quiltsContainer").innerHTML = "<p>Unable to load quilt information at this time.</p>";
    }
}

getQuiltsData();

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




const displayQuilts = (quilts) => {

    quilts.forEach(quilt => {

        const card = document.createElement("div");
        card.className = "quilt-card";

        const getAvailability = () => {
            const availability = quilt.availability;
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
        <img src="${quilt.imageURL}" alt="${quilt.name}" loading="lazy" width="400" height="300">
        <h2>${quilt.name}</h2>
        <ul>
          <li><strong>Price:</strong> $${quilt.price} / night</li>
          <li><strong>Size:</strong> ${quilt["size inches"]}</li>
          <li><strong>Availability:</strong> ${available.textContent}</li>
        </ul>
      `;



        let info = document.createElement("button");
        info.classList.add("quiltInfo");
        info.textContent = "Learn more";
        card.appendChild(info);


        container.appendChild(card);

        let dialog = document.createElement("dialog");
        dialog.classList.add("quilt-dialog");
        // dialog.id.add = `${name}`;
        dialog.innerHTML = `
                <h3>${quilt.name}</h3>
                <ul>
                    <li><strong>Price:</strong> $${quilt.price} / night</li>
                    <li><strong>Size:</strong> ${quilt["size inches"]}</li>
                    <li><strong>Washing Instructions:</strong> ${quilt["Washing instructions"]}</li>
                    <li><strong>Descriptions:</strong> ${quilt.description}</li>
                </ul>
                <a href="${quilt.imageArtistInfo}" target="_blank">Photo Credit</a>
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