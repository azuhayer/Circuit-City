/* STICKY NAV BAR JAVASCRIPT */
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

/* SIGNUP MODAL JAVASCRIPT */

var modal = document.getElementById("signup-modal");
var userIcon = document.getElementById("user-icon");
var closeButton = document.getElementsByClassName("close")[0];

userIcon.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Minimized window menu tab interaction */

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navmenu.classList.toggle('open');
}

// Search Bar Javascript

 let searchIcon = document.querySelector('#search-icon');
 let search = document.querySelector('.search');

 searchIcon.onclick = () => {
   search.classList.add("active");
}

// Cart JavaScript

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
  cart.classList.add("active");
};

closeCart.onclick = () => {
  cart.classList.remove("active");
};

if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready);
}else{
  ready();
}

function ready(){
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChange);
  }
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++){
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  // document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

function buyButtonClicked(){
  alert("Your Order is Place");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()){
    cartContent.removeChild(cartContent.firstChild);
  }
  updatetotal();
}

function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

function quantityChange(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

function addCartClicked(event){
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}

function addProductToCart(title, price, productImg){
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++){
    if(cartItemsNames[i].innerText == title){
      alert("You have already add this item to cart");
      return;
    }
  }
var cartBoxContent = `
                    <img src="${productImg}" alt="" class="cart-img">
                    <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <div class="cart-price">${price}</div>
                        <input type="number" value="1" class="cart-quantity">
                    </div>
                    <i class="fas fa-trash-alt cart-remove"></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChange);
}

function updatetotal(){
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}



// NEW BUILD JAVASCRIPT [WORK IN PROGRESS]
var components = [
  {
    name: "CPU",
    brand: "Brand 1",
    price: 200,
    image: "cpu.png"  //change image
  },
  {
    name: "CPU COOLER",
    brand: "Brand 1",
    price: 200,
    image: "cpucooler.png"  //change image
  },
  {
    name: "MOTHERBOARD",
    brand: "Brand 1",
    price: 200,
    image: "cpucooler.png"  //change image
  },
  {
    name: "MEMORY",
    brand: "Brand 1",
    price: 200,
    image: "cpucooler.png"  //change image
  },
  {
    name: "STORAGE",
    brand: "Brand 2",
    price: 400,
    image: "gpu.png"  //change image
  },
  {
    name: "GRAPHICS CARD",
    brand: "Brand 1",
    price: 200,
    image: "cpucooler.png"  //change image
  },
  {
    name: "CASE",
    brand: "Brand 1",
    price: 200,
    image: "cpucooler.png"  //change image
  },
  {
    name: "POWER SUPPLY",
    brand: "Brand 1",
    price: 200,
    image: "cpucooler.png"  //change image
  },
  // Add more component objects as needed
];

// Display the initial component list
function displayComponents() {
  var componentList = document.getElementById("component-list");

  // Clear the existing component list
  componentList.innerHTML = "";

  // Iterate over the components and create component cards
  components.forEach(function (component) {
      var card = document.createElement("div");
      card.className = "component-card";

      var image = document.createElement("img");
      image.src = component.image;
      card.appendChild(image);

      var name = document.createElement("h3");
      name.textContent = component.name;
      card.appendChild(name);

      var brand = document.createElement("p");
      brand.textContent = "Brand: " + component.brand;
      card.appendChild(brand);

      var price = document.createElement("p");
      price.textContent = "Price: $" + component.price;
      card.appendChild(price);

      // Add a button to add the component to the build list
      var addButton = document.createElement("button");
      addButton.textContent = "Add to Build";
      addButton.addEventListener("click", function () {
          addToBuildList(component);
      });
      card.appendChild(addButton);

      componentList.appendChild(card);
  });
}

// Add a component to the build list
function addToBuildList(component) {
  var buildList = document.getElementById("build-items");

  var listItem = document.createElement("li");
  listItem.textContent = component.name + " ($" + component.price + ")";

  buildList.appendChild(listItem);

  // Update the total cost
  updateTotalCost(component.price);
}

// Update the total cost
function updateTotalCost(price) {
  var totalCost = document.getElementById("total-cost");
  var currentCost = parseInt(totalCost.textContent.substring(1)); // Remove the dollar sign and parse the integer

  var newCost = currentCost + price;
  totalCost.textContent = "$" + newCost;
}

// Filter the component list based on the selected brand
function filterComponentsByBrand() {
  var brandFilter = document.getElementById("brand-filter");
  var selectedBrand = brandFilter.value;

  // If no brand is selected, show all components
  if (!selectedBrand) {
      displayComponents();
      return;
  }

  // Filter the components based on the selected brand
  var filteredComponents = components.filter(function (component) {
      return component.brand === selectedBrand;
  });

  // Display the filtered components
  var componentList = document.getElementById("component-list");
  componentList.innerHTML = "";
  filteredComponents.forEach(function (component) {
      var card = createComponentCard(component);
      componentList.appendChild(card);
  });
}

// Create a component card
function createComponentCard(component) {
  var card = document.createElement("div");
  card.className = "component-card";

  var image = document.createElement("img");
  image.src = component.image;
  card.appendChild(image);

  var name = document.createElement("h3");
  name.textContent = component.name;
  card.appendChild(name);

  var brand = document.createElement("p");
  brand.textContent = "Brand: " + component.brand;
  card.appendChild(brand);

  var price = document.createElement("p");
  price.textContent = "Price: $" + component.price;
  card.appendChild(price);

  var addButton = document.createElement("button");
  addButton.textContent = "Add to Build";
  addButton.addEventListener("click", function () {
      addToBuildList(component);
  });
  card.appendChild(addButton);

  return card;
}

// Event listener for brand filter changes
var brandFilter = document.getElementById("brand-filter");
brandFilter.addEventListener("change", filterComponentsByBrand);

// Display the initial component list
displayComponents();