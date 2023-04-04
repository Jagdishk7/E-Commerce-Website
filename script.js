const mainData = [
  // {
  //   id: 0,
  //   image: "images/black.png",
  //   title: "Beats Black",
  //   price: "12",
  //   iprice: "20",
  //   desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports."
  // },
  // {
  //   id: 1,
  //   image: "images/blue.png",
  //   title: "Beats Blue",
  //   price: "11",
  //   iprice: "20",
  //   desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports."

  // },
 
  {
    id: 2,
    image: "images/headphones/nightBlack.png",
    title: "Beats Night Black",
    price: "1599",
    iprice: "20",
    desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports."

  },
  {
    id: 3,
    image: "images/clothes/pants/pants1.jpg",
    title: "Army Pant",
    price: "800",
    desc: "Military Pant for Boys, an outer garment extending from the waist to the ankle and covering each leg separately"
  },
  {
    id: 4,
    image: "images/clothes/shirts/shirts1.jpg",
    title: "Indian Casual Kurta",
    price: "12",
    desc: "Wedding Kurta for Boys, a garment for the upper part of the body"
  },
  {
    id: 4,
    image: "images/clothes/tshirts/tshirts4.jpg",
    title: "Black Panther T-Shirt",
    price: "12",
    desc: "Stylish T-Shirts for Boys, a garment for the upper part of the body"
  },
  {
    id: 4,
    image: "images/shoes/shoes4.jpg",
    title: "Military Boots",
    price: "899",
    desc: "Leather Army Shoes, covering for the human foot typically having a thick or stiff sole with an attached heel and an upper part of lighter material (such as leather)"
  },
  {
    id: 2,
    image: "images/bags/bag11.jpg",
    title: "Hex",
    price: "12",
    iprice: "20",
    desc: "School Bag for kids, to transport different materials like exercise books, pencil box, water bottle and a lunchbox to and from school."
  },
  {
    id: 2,
    image: "images/furnitures/bed1.jpg",
    title: "Premium plywood bed",
    price: "12",
    iprice: "20",
    desc: "A piece of furniture on or in which to lie and sleep also the equipment and services needed to care for one hospitalized patient or hotel guest"
  },
  {
    id: 2,
    image: "images/furnitures/sofa1.jpg",
    title: "Sofa Set",
    price: "12",
    iprice: "20",
    desc: "a comfortable seat with a back and arms for two or more people to sit on"
  },
  {
    id: 2,
    image: "images/furnitures/mirror1.jpg",
    title: "TATA Mirror",
    price: "12",
    iprice: "20",
    desc: "a piece of special flat glass that you can look into in order to see yourself or what is behind you"
  },
  {
    id: 2,
    image: "images/jewllery/jewllery3.jpg",
    title: "Diamond Necklace",
    price: "12",
    iprice: "20",
    desc: "A jewellery that is worn around the neck. Necklaces may have been one of the earliest types of adornment worn by humans."
  },
  

  // }
];

// const dataSet = [...new Set(mainData.map(function (item) {
//       return item;
//     })
//   ),
// ];
const containerData = document.getElementById("containerData");
let i = 0;

containerData.innerHTML = mainData.map(function (data) {
    var { image, title, price, desc } = data;
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
          <div class="btn btn-warning" onclick="addToCart(${i++})">Add To Cart</div>
        </div>
      </div>
    </div>
  </div>`;

    // `<div class="card align-items-center shadow p-3 mb-1 bg-body rounded mx-auto" style="width: 13rem">
    //     <img
    //       src="${image}"
    //       class="card-img-top card-img py-3 "
    //       alt="..."
    //     />
    //     <div class="card-body">
    //       <h5 class="card-title my-1">${title}</h5>
    //       <p class="card-price text-success my-1 fs-4">
    //         $${price} <del class="mx-2 text-danger fs-6">$${iprice}</del>
    //       </p>
    //       <button class="btn btn-primary" onclick="addToCart(${i++})">Add To Cart</button>
    //     </div>
    //   </div>`;
  })
  .join("");

var cart = [];
function addToCart(a) {
  cart.push({ ...mainData[a] });
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
  document.getElementById("totalItem").innerText ="Total Items : " + cart.length;
  
  
  if (cart.length == 0) {
    document.getElementById("cartContainer").innerHTML ="<h3>Your Cart is Empty</h3>";
    document.getElementById("totalPrice").innerHTML = "Total Price : " + "00.00" + '&euro;';

  } else {
    
    const cartContainer = document.querySelector('.cartContainer');
    cartContainer.innerHTML = cart.map(function (item) {
      
      var { image, title, price } = item;
      total=total+parseInt(price);
      document.getElementById("totalPrice").innerHTML = "Total Price : " + total + '&euro;';
        return `<div class="cartItem">
    <img src="${image}" class="cartImg" alt="" />
    <h5 class="cartTitle title">${title}</h5>
    <div class="d-flex align-items-center">
    <p class="cartPrice text-success my-1">${price}&euro;</p>
    <i class="fa-solid fa-trash button mx-3" onclick="deleteFromCart(${j++})"></i>
    <button class="btn btn-primary">Buy</button>
    </div>
    </div>`
  }).join("");
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



