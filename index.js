const flavorsMenu = [
  {
    name: "All Green Everything",
    description: ["Cucumber, Celery, Apple, Daily Green "],
    id: 1000,
    price: 8.75,
    flavors: ["kale", "spinach", "dandelion"],
    emoji: "🥒",
  },
  {
    name: "HYDRATE",
    description: ["Refresh with your 16 oz juice of choice"],
    price: 8.75,
    flavors: ["watermelon", "coconut", "pineapple"],
    emoji: "🍉",
    id: 2000,
  },

  {
    name: "Protein Punch",
    description: ["Add your protein of choice"],
    price: 9.75,
    flavors: ["Banana BCAA", "Naked Pea", " Chocolate Hemp"],
    emoji: "🍌",
    id: 3000,
  },
];

let itemsAdded = [];
let orderTotal = 0;
let createCart = document.getElementById("add-items");
const showMenu = document.getElementById("select-menu");
const paymentBox = document.getElementById("payment-box");

//  RENDERS MENU OPTION

const showFlavors = flavorsMenu.map(
  (flavor) =>
    `
    <div class="order-options">
    <ul>
    <li class="name">${flavor.name}</li>
    <li class="description">${flavor.description}</li> 
    <li class="price">${flavor.price}</li>
    <div class="select-flavor">
    <div>Flavor:</div>
    <input type ="radio" class="flavors">
    ${flavor.flavors[0]} 
    <input type ="radio" class="flavors">
    ${flavor.flavors[1]} 
    <input type ="radio" class="flavors">
    ${flavor.flavors[2]}</input>
    <br>
   </div>
<button class="add-btn" id="add-btn" data-add="${flavor.id}">+</button>
  </ul>
 
  </div
  `
);

showMenu.innerHTML = showFlavors;

// Selects items from Menu

document.addEventListener("click", function (event) {
  if (event.target.dataset.add) {
    createOrder(event.target.dataset.add);
    console.log(createOrder);
  }
});

function createOrder(flavorId) {
  const addItem = flavorsMenu.filter(function (item) {
    return item.id == flavorId;
  })[0];

  itemsAdded.push(addItem);

  showOrderHtml();
  orderTotal += addItem.price;

  console.log(orderTotal);
}
//  renders order section

function showOrderHtml() {
  checkout = "";
  itemsAdded.forEach(function (order) {
    checkout += `<div>${order.emoji} ${order.name} $${order.price}</div>
   `;
  });

  orderHTML(checkout);

  console.log(checkout);
}

function orderHTML(checkout) {
  let itemsHTML = ``;

  itemsHTML = `<div class="cart-items" id="add-to-cart">
                 <div class="title">your order</div>
                 ${checkout} 
                 </div>
                 <div>${orderTotal}</div>
                 <button class ="order-btn" id='order-btn'>Complete Order</button>`;

  document.getElementById("add-items").innerHTML = itemsHTML;
  document
    .getElementById("order-btn")
    .addEventListener("click", paymentModalHtml);
}

//  Checkout Payment Modal

function paymentModalHtml() {
  paymentBox.innerHTML = `
  
          <div>Enter Card Details</div>
          <form>
            <input type="text" placeholder="name">
            <input type="text" placeholder="card-details">
            <input type="text" placeholder="Enter CVV">
          </form>
            <button id='pay-btn'>pay</button>
          
      `;

  document.getElementById("pay-btn").addEventListener("click", () => {
    paymentBox.innerHTML = `<div class='message'>Thank you for your order!</div>`;
  });
}
