  // Pants Section ===================================================================================
  const shoesData = [
    {
      id: 0,
      image: "../../images/shoes/shoes1.jpg",
      title: "Beats Black",
      price: "12",
      iprice: "20",
      desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports."
    },
    {
      id: 1,
      image: "../../images/shoes/shoes2.jpg",
      title: "Beats Blue",
      price: "11",
      iprice: "20",
      desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports."
  
    },
    {
      id: 2,
      image: "../../images/shoes/shoes3.jpg",
      title: "Beats Red Black",
      price: "12",
      iprice: "20",
      desc: "RedBlack Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports."
  
    },
    {
      id: 2,
      image: "../../images/shoes/shoes4.jpg",
      title: "Beats Night Black",
      price: "12",
      iprice: "20",
      desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports."
  
    },
    {
      id: 2,
      image: "../../images/shoes/shoes5.jpg",
      title: "Beats Twilight Gray",
      price: "12",
      iprice: "20",
      desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports."
  
    },
    {
      id: 2,
      image: "../../images/shoes/shoes6.jpg",
      title: "Beats Twilight Gray",
      price: "12",
      iprice: "20",
      desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports."
  
    },
  ];
  
  let shoes =0;
  const shoesContainer = document.getElementById('shoesContainer');
  shoesContainer.innerHTML = shoesData.map((item)=>{
    var{image,title,price,desc} = item;
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
          <span class="float-end price price-hp">${price}&euro;</span>
        </div>
        <h5 class="card-title">
          ${desc}
        </h5>
        <div class="text-center my-4">
        <div class="btn btn-warning" onclick="addShoeToCart(${shoes++})">Add To Cart</div>
        </div>
      </div>
    </div>
  </div>`;
  }).join('')


  let cart = []

  function addShoeToCart(a) {
    cart.push({ ...shoesData[a] });
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
  