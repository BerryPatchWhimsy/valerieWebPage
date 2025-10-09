import { reviews } from "./customer-comments.mjs";

function getRandomReviews(reviews, num = 2) {
    return reviews
        .sort(() => 0.5 - Math.random())
        .slice(0, num);
    
}

const randomReviews = getRandomReviews(reviews);

const reviewsContainer = document.querySelector("#reviews");

randomReviews.forEach(review => {
    let card = document.createElement("div");
    card.classList.add("review-card");
    card.innerHTML = `
    <h3>${review.name}</h3>
    <p>⭐️ ${review.rating}/5</p>
    <p>From: ${review.place}</p>
    <p>"${review.comment}"</p>
    `;
    reviewsContainer.appendChild(card);
});



