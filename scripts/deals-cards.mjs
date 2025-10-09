import { deals } from "./holiday-deals.mjs";

const currentSpecial = deals[3];
const upcomingSpecial = deals[4];


export function createCurrentSpecialCard() {
    const card = document.createElement("div");
    card.classList.add("currentDealCard");

    const currentDealHeader = document.createElement("h3");
    currentDealHeader.textContent = "Current";
    currentDealHeader.classList.add("currentDealHeader");
    card.appendChild(currentDealHeader);

    const title = document.createElement("h3");
    title.textContent = currentSpecial.holiday;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = currentSpecial.description;
    card.appendChild(description);

    const discount = document.createElement("p");
    discount.innerHTML = `<strong>Discount:</strong> ${currentSpecial.discount}`;
    card.appendChild(discount);

    const promoCode = document.createElement("p");
    promoCode.innerHTML = `<strong>Promo Code:</strong> ${currentSpecial.promoCode}`;
    card.appendChild(promoCode);

    const validDates = document.createElement("p");
    validDates.innerHTML = `<strong>Valid Dates:</strong> ${currentSpecial.validDates}`;
    card.appendChild(validDates);

    if (currentSpecial.extras) {
        const extras = document.createElement("p");
        extras.innerHTML = `<strong>Extras:</strong> ${currentSpecial.extras}`;
        card.appendChild(extras);
    }


    return card;
}

export function createUpcomingSpecialCard() {
    const card = document.createElement("div");
    card.classList.add("upcomingDealCard");

    const upcomingDealHeader = document.createElement("h3");
    upcomingDealHeader.textContent = "Upcoming";
    upcomingDealHeader.classList.add("upcomingDealHeader");
    card.appendChild(upcomingDealHeader);

    const title = document.createElement("h3");
    title.textContent = upcomingSpecial.holiday;
    card.appendChild(title);

    const discount = document.createElement("p");
    discount.innerHTML = `<strong>Discount:</strong> ${upcomingSpecial.discount}`;
    card.appendChild(discount);

    const validDates = document.createElement("p");
    validDates.innerHTML = `<strong>Valid Dates:</strong> ${upcomingSpecial.validDates}`;
    card.appendChild(validDates);

    const checkBack = document.createElement("p");
    checkBack.textContent = "Check back soon for more details!";
    card.appendChild(checkBack);

    return card;
}

