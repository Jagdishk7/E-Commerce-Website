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
  }).join('')