let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    alert(`${itemName} has been added to your cart. Total: $${total.toFixed(2)}`);
}

function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let cartDetails = "Items in your cart:\n";
    cart.forEach((item, index) => {
        cartDetails += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}\n`;
    });
    cartDetails += `Total: $${total.toFixed(2)}`;

    alert(cartDetails);
}

function clearCart() {
    cart = [];
    total = 0;
    alert("Your cart has been cleared.");
}

document.querySelector("#viewCartButton").addEventListener("click", viewCart);
document.querySelector("#clearCartButton").addEventListener("click", clearCart);

localStorage.setItem("cart", JSON.stringify(cart));
cart = JSON.parse(localStorage.getItem("cart")) || [];


// cart.push({ name, price });
// total += price;
// renderCart();
// }

// function renderCart() {
//     const cartList = document.getElementById("cart");
//     const totalEl = document.getElementById("total");

//     cartList.innerHTML = "";

//     cart.forEach((item, index) => {
//         const li = document.createElement("li");
//         li.innerHTML = `
//       ${item.name} - $${item.price}
//       <button onclick="removeFromCart(${index})">X</button>
//     `;
//         cartList.appendChild(li);
//     });

//     totalEl.textContent = total;
// }

// function removeFromCart(index) {
//     total -= cart[index].price;
//     cart.splice(index, 1);
//     renderCart();
// }