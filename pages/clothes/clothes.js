// Pants Section ===================================================================================
const pantsData = [
  {
    id: 0,
    image: "../../images/clothes/pants/pants1.jpg",
    title: "Beats Black",
    price: "12",
    iprice: "20",
    desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 1,
    image: "../../images/clothes/pants/pants2.jpg",
    title: "Beats Blue",
    price: "11",
    iprice: "20",
    desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/pants/pants3.jpg",
    title: "Beats Red Black",
    price: "12",
    iprice: "20",
    desc: "RedBlack Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/pants/pants4.jpg",
    title: "Beats Night Black",
    price: "12",
    iprice: "20",
    desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/pants/pants5.jpg",
    title: "Beats Twilight Gray",
    price: "12",
    iprice: "20",
    desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
];

let pant=0;
const pantsContainer = document.getElementById("pantsContainer");
pantsContainer.innerHTML = pantsData.map((item) => {
  var { image, title, price, desc } = item;
    return `<div class="col">
    <div class="card h-100">
      <img
        src="${image}"
        class="card-img-top card-img"
        alt="..."
      />
      <div class="card-body">
        <div class="clearfix mb-3">
          <span class="float-start badge rounded-pill bg-primary"
            >${title}</span
          >
          <span class="float-end price price-hp">&#8377;${price}</span>
        </div>
        <h5 class="card-title">
          ${desc}
        </h5>
        <div class="text-center my-4">
        <div class="btn btn-warning" onclick="addPantToCart(${pant++})">Add To Cart</div>
        </div>
      </div>
    </div>
  </div>`;
  })
  .join("");

// Shirts Section ===================================================================================
const shirtsData = [
  {
    id: 0,
    image: "../../images/clothes/shirts/shirts1.jpg",
    title: "Beats Black",
    price: "12",
    iprice: "20",
    desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 1,
    image: "../../images/clothes/shirts/shirts2.jpg",
    title: "Beats Blue",
    price: "11",
    iprice: "20",
    desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/shirts/shirts9.jpg",
    title: "Beats Red Black",
    price: "12",
    iprice: "20",
    desc: "RedBlack Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/shirts/shirts4.jpg",
    title: "Beats Night Black",
    price: "12",
    iprice: "20",
    desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/shirts/shirts5.jpg",
    title: "Beats Twilight Gray",
    price: "12",
    iprice: "20",
    desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
];

let shirt=0;
const shirtsContainer = document.getElementById("shirtsContainer");
shirtsContainer.innerHTML = shirtsData
.map((item) => {
    var { image, title, price, desc } = item;
    return `<div class="col">
    <div class="card h-100">
      <img
        src="${image}"
        class="card-img-top card-img"
        alt="..."
      />
      <div class="card-body">
        <div class="clearfix mb-3">
          <span class="float-start badge rounded-pill bg-primary"
            >${title}</span
          >
          <span class="float-end price price-hp">&#8377;${price}</span>
        </div>
        <h5 class="card-title">
          ${desc}
        </h5>
        <div class="text-center my-4">
        <div class="btn btn-warning" onclick="addShirtToCart(${shirt++})">Add To Cart</div>
        </div>
      </div>
    </div>
  </div>`;
  })
  .join("");

// T-Shirts Section ===================================================================================
const tshirtsData = [
  {
    id: 0,
    image: "../../images/clothes/tshirts/tshirts1.jpg",
    title: "Beats Black",
    price: "12",
    iprice: "20",
    desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 1,
    image: "../../images/clothes/tshirts/tshirts2.jpg",
    title: "Beats Blue",
    price: "11",
    iprice: "20",
    desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/tshirts/tshirts8.jpg",
    title: "Beats Red Black",
    price: "12",
    iprice: "20",
    desc: "RedBlack Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/tshirts/tshirts4.jpg",
    title: "Beats Night Black",
    price: "12",
    iprice: "20",
    desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/tshirts/tshirts5.jpg",
    title: "Beats Twilight Gray",
    price: "12",
    iprice: "20",
    desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
];

let tshirt=0;
const tshirtsContainer = document.getElementById("tshirtsContainer");
tshirtsContainer.innerHTML = tshirtsData
.map((item) => {
    var { image, title, price, desc } = item;
    return `<div class="col">
    <div class="card h-100">
      <img
        src="${image}"
        class="card-img-top card-img"
        alt="..."
      />
      <div class="card-body">
        <div class="clearfix mb-3">
          <span class="float-start badge rounded-pill bg-primary"
            >${title}</span
          >
          <span class="float-end price price-hp">&#8377;${price}</span>
        </div>
        <h5 class="card-title">
          ${desc}
        </h5>
        <div class="text-center my-4">
        <div class="btn btn-warning" onclick="addTshirtToCart(${tshirt++})">Add To Cart</div>
        </div>
      </div>
    </div>
  </div>`;
  })
  .join("");

// ShOrts Section ===================================================================================
const shortsData = [
  {
    id: 0,
    image: "../../images/clothes/shorts/shorts4.jpg",
    title: "Beats Black",
    price: "12",
    iprice: "20",
    desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 1,
    image: "../../images/clothes/shorts/shorts3.jpg",
    title: "Beats Blue",
    price: "11",
    iprice: "20",
    desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/shorts/shorts4.jpg",
    title: "Beats Red Black",
    price: "12",
    iprice: "20",
    desc: "RedBlack Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/shorts/shorts1.jpg",
    title: "Beats Night Black",
    price: "12",
    iprice: "20",
    desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/clothes/shorts/shorts2.jpg",
    title: "Beats Twilight Gray",
    price: "12",
    iprice: "20",
    desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
];

let short = 0;
const shortsContainer = document.getElementById("shortsContainer");
shortsContainer.innerHTML = shortsData
.map((item) => {
    var { image, title, price, desc } = item;
    return `<div class="col">
    <div class="card h-100">
      <img
        src="${image}"
        class="card-img-top card-img"
        alt="..."
      />
      <div class="card-body">
        <div class="clearfix mb-3">
          <span class="float-start badge rounded-pill bg-primary"
            >${title}</span
          >
          <span class="float-end price price-hp">&#8377;${price}</span>
        </div>
        <h5 class="card-title">
          ${desc}
        </h5>
        <div class="text-center my-4">
        <div class="btn btn-warning" onclick="addShortToCart(${short++})">Add To Cart</div>
        </div>
      </div>
    </div>
  </div>`;
  })
  .join("");



  // CART ====================================================================================

  var cart = [];

function addPantToCart(a) {
  cart.push({ ...pantsData[a] });
  display();
}
function addShirtToCart(a) {
  cart.push({ ...shirtsData[a] });
  display();
}
function addTshirtToCart(a) {
  cart.push({ ...tshirtsData[a] });
  display();
}
function addShortToCart(a) {
  cart.push({ ...shortsData[a] });
  display();
}

function deleteFromCart(a) {
  cart.splice(a, 1);

  display();
  // total=total-parseInt(price);
}

function display() {
  let j = 0;
  var total = 0;

  document.getElementById("badge").innerText = cart.length;
  document.getElementById("totalItem").innerText =
    "Total Items : " + cart.length;

  if (cart.length == 0) {
    document.getElementById("cartContainer").innerHTML =
      "<h3>Your Cart is Empty</h3>";
    document.getElementById("totalPrice").innerHTML =
      "Total Price : " + "00.00" + "&euro;";
  } else {
    const cartContainer = document.querySelector(".cartContainer");
    cartContainer.innerHTML = cart
      .map(function (item) {
        var { image, title, price } = item;
        total = total + parseInt(price);
        document.getElementById("totalPrice").innerHTML =
          "Total Price : " + total + "&euro;";
        return `<div class="cartItem">
      <img src="${image}" class="cartImg" alt="" />
      <h5 class="cartTitle title">${title}</h5>
      <div class="d-flex align-items-center">
      <p class="cartPrice text-success my-1">${price}&euro;</p>
      <i class="fa-solid fa-trash button mx-3" onclick="deleteFromCart(${j++})"></i>
      <button class="btn btn-primary">Buy</button>
      </div>
      </div>`;
      })
      .join("");
  }
}

// ========================== CART Component Toggle =======================================

const openCartButtons = document.querySelectorAll("[data-cart-target]");
const closeCartButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cart = document.querySelector(button.dataset.cartTarget);
    openCart(cart);
  });
});
closeCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cart = button.closest(".cartMainContainer");
    closeCart(cart);
  });
});

overlay.addEventListener("click", () => {
  const closeOverlay = document.querySelectorAll(".cartMainContainer.active");
  closeOverlay.forEach((close) => {
    closeCart(close);
  });
});

function openCart(cart) {
  if (cart == null) return;
  cart.classList.add("active");
  overlay.classList.add("active");
}

function closeCart(cart) {
  if (cart == null) return;
  cart.classList.remove("active");
  overlay.classList.remove("active");
}
