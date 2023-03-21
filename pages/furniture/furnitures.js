// Beds Section ===================================================================================
const bedsData = [
  {
    id: 0,
    image: "../../images/furnitures/bed1.jpg",
    title: "Beats Black",
    price: "12",
    iprice: "20",
    desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 1,
    image: "../../images/furnitures/bed2.jpg",
    title: "Beats Blue",
    price: "11",
    iprice: "20",
    desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/bed3.jpg",
    title: "Beats Red Black",
    price: "12",
    iprice: "20",
    desc: "RedBlack Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/bed4.jpg",
    title: "Beats Night Black",
    price: "12",
    iprice: "20",
    desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/bed5.jpg",
    title: "Beats Twilight Gray",
    price: "12",
    iprice: "20",
    desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
];

const bedsContainer = document.getElementById("bedsContainer");
bedsContainer.innerHTML = bedsData
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
          <span class="float-end price-hp">${price}&euro;</span>
        </div>
        <h5 class="card-title">
          ${desc}
        </h5>
        <div class="text-center my-4">
          <a href="#" class="btn btn-warning" onclick="addToCart(})">Add To Cart</a>
        </div>
      </div>
    </div>
  </div>`;
  })
  .join("");



// Sofa Section ===================================================================================
const sofaData = [
  {
    id: 0,
    image: "../../images/furnitures/sofa1.jpg",
    title: "Beats Black",
    price: "12",
    iprice: "20",
    desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 1,
    image: "../../images/furnitures/sofa2.jpg",
    title: "Beats Blue",
    price: "11",
    iprice: "20",
    desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/sofa3.jpg",
    title: "Beats Red Black",
    price: "12",
    iprice: "20",
    desc: "RedBlack Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/sofa4.jpg",
    title: "Beats Night Black",
    price: "12",
    iprice: "20",
    desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/sofa5.jpg",
    title: "Beats Twilight Gray",
    price: "12",
    iprice: "20",
    desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
];

const sofaContainer = document.getElementById("sofaContainer");
sofaContainer.innerHTML = sofaData
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
            <span class="float-end price-hp">${price}&euro;</span>
          </div>
          <h5 class="card-title">
            ${desc}
          </h5>
          <div class="text-center my-4">
            <a href="#" class="btn btn-warning" onclick="addToCart(})">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>`;
  })
  .join("");



// Mirror Section ===================================================================================
const mirrorData = [
  {
    id: 0,
    image: "../../images/furnitures/mirror1.jpg",
    title: "Beats Black",
    price: "12",
    iprice: "20",
    desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 1,
    image: "../../images/furnitures/mirror2.jpg",
    title: "Beats Blue",
    price: "11",
    iprice: "20",
    desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/mirror3.jpg",
    title: "Beats Red Black",
    price: "12",
    iprice: "20",
    desc: "RedBlack Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/mirror4.jpg",
    title: "Beats Night Black",
    price: "12",
    iprice: "20",
    desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/mirror5.jpg",
    title: "Beats Twilight Gray",
    price: "12",
    iprice: "20",
    desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
];

const mirrorContainer = document.getElementById("mirrorContainer");
mirrorContainer.innerHTML = mirrorData.map((item) => {
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
                <span class="float-end price-hp">${price}&euro;</span>
              </div>
              <h5 class="card-title">
                ${desc}
              </h5>
              <div class="text-center my-4">
                <a href="#" class="btn btn-warning" onclick="addToCart(})">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>`;
  })
  .join("");


// Mirror Section ===================================================================================
const tableData = [
  {
    id: 0,
    image: "../../images/furnitures/table1.jpg",
    title: "Beats Black",
    price: "12",
    iprice: "20",
    desc: "Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 1,
    image: "../../images/furnitures/table2.jpg",
    title: "Beats Blue",
    price: "11",
    iprice: "20",
    desc: "Blue Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/table3.jpg",
    title: "Beats Red Black",
    price: "12",
    iprice: "20",
    desc: "RedBlack Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/table4.jpg",
    title: "Beats Night Black",
    price: "12",
    iprice: "20",
    desc: "Night Black Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
  {
    id: 2,
    image: "../../images/furnitures/table5.jpg",
    title: "Beats Twilight Gray",
    price: "12",
    iprice: "20",
    desc: "Twilight Gray Color Headphone by Beats which  brings you the best in headphones and music, plus all things culture, style, and sports.",
  },
];

const tableContainer = document.getElementById("tableContainer");
tableContainer.innerHTML = tableData.map((item) => {
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
                <span class="float-end price-hp">${price}&euro;</span>
              </div>
              <h5 class="card-title">
                ${desc}
              </h5>
              <div class="text-center my-4">
                <a href="#" class="btn btn-warning" onclick="addToCart(})">Add To Cart</a>
              </div>
            </div>
          </div>
        </div>`;
  })
  .join("");
