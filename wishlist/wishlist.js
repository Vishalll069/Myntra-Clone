// localStorage.setItem("wishlistGo", JSON.stringify(sendtolocal));

let sendtolocal = [
  {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/10144535/2019/8/5/1a759a1a-0ed9-4ec1-981b-677e2626d35f1565006028143-HIGHLANDER-Men-Maroon--Navy-Blue-Colourblocked-Round-Neck-T--1.jpg",
      "brand": "HIGHLANDER",
      "type": "Colourblocked Round Neck T-shirt",
      "price": "314",
      "MP": "699",
      "offer": 55
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15743580/2021/10/5/5aa6da0f-f7c2-4297-9e5b-071f7e1c24691633438479239HIGHLANDERMenBlueTypographyColourblockedAppliqueSlimFitT-shi1.jpg",
      "brand": "HIGHLANDER",
      "type": "Men Colourblocked T-shirt",
      "price": "383",
      "MP": "799",
      "offer": 52
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15745700/2021/10/5/967afa60-cd28-4e43-8973-f9583f1e31e31633446113055LOCOMOTIVEMenYellowPrintedAppliqueSlimFitT-shirt1.jpg",
      "brand": "LOCOMOTIVE",
      "type": "Men Printed Slim Fit T-shirt",
      "price": "305",
      "MP": "899",
      "offer": 66
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16090654/2021/11/15/eb85a9ee-b22a-430e-be26-fc0820d753fc1636962642465HIGHLANDERMenNavyBlueStripedPocketsSlimFitT-shirt1.jpg",
      "brand": "HIGHLANDER",
      "type": "Men Navy Slim Fit T-shirt",
      "price": "375",
      "MP": "799",
      "offer": 53
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/16199500/2021/11/22/535244ac-818c-40e7-8562-f15f5c7552a11637584155501HIGHLANDERMenBlackPrintedAppliqueSlimFitT-shirt1.jpg",
      "brand": "HIGHLANDER",
      "type": "Men Printed Slim Fit T-shirt",
      "price": "367",
      "MP": "749",
      "offer": 51
    },
    {
      "image": "https://assets.myntassets.com/h_560,q_90,w_420/v1/assets/images/15745640/2021/10/5/6e85c52c-301f-4f41-9844-108159acfa191633447633181HIGHLANDERMenBlueColourblockedRawEdgeSlimFitT-shirt1.jpg",
      "brand": "HIGHLANDER",
      "type": "Men Colourblocked Raw Edge Slim Fit T-shirt",
      "price": "424",
      "MP": "849",
      "offer": 50
    }
];
localStorage.setItem("wishlistGo", JSON.stringify(sendtolocal));



let wishlistGo = JSON.parse(localStorage.getItem("wishlistGo")) || [];
// let a = wishlistGo

if (wishlistGo.length == 0) {
  document.getElementById("myWishlist").innerHTML = `<div id="wishlistempty">
  <h4>YOUR WISHLIST IS EMPTY</h4>
  <br />
  <p>
    Add items that you like to your wishlist. Review them anytime and easily
    move them to the bag
  </p>
  <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="" />
  <br />
  <button id="continue"><a href="/index.html">CONTINUE SHOPPING</a></button>
</div>`;
} else {
  document.getElementById("myWishlist").innerText = null;

  wishlistGo.map((elem, index) => {
    let img = document.createElement("img");
    img.src = elem.image;

    // let brand = document.createElement("h6");
    // brand.innerText = elem.brand;

    let name = document.createElement("p");
    name.innerText = elem.type;
  

    let price = document.createElement("h6");
    price.innerText = `Rs. ${Number(elem.price)}`;
    price.style.fontSize = "85%";

    let actualPrice = document.createElement("p");
    actualPrice.innerText = Number(elem.MP);
    actualPrice.style.color = "grey";
    actualPrice.style.textDecoration = "line-through";
    actualPrice.style.fontSize = "85%";
    // console.log(actualPrice);

    let offer = document.createElement("p");
    offer.innerText = `${elem.offer}% OFF`;
    offer.style.color = "#ff3f6c";
    offer.style.fontSize = "85%";

    let priceDiv = document.createElement("div");
    priceDiv.style.display = "flex";
    //   priceDiv.style.border = "1px solid red";
    priceDiv.style.justifyContent = "space-evenly";
    priceDiv.style.height = "30px";
    // priceDiv.style.marginTop = "15px";

    let move = document.createElement("button");
    move.innerText = "MOVE TO BAG";
    move.addEventListener("click", function () {
      MovetoBag(elem, index);
      alert("Item Added To Bag")
    });

    priceDiv.append(price, actualPrice, offer);
    let box = document.createElement("div");
    // box.style.border = "1px solid lightgrey";
    box.style.height = "360px";
    // box.style.width = "10rem";
    
    box.append(img, name, priceDiv, move);
    document.getElementById("wishlistAppend").append(box);
  });

  let nums = wishlistGo.length;
  let titleDiv = document.createElement("div");
  titleDiv.id ="wishlistTitle"
  let titleWish = document.createElement("h6");
  titleWish.innerText = "My Wishlist :";
  titleWish.id="abc"
  let num = document.createElement("p");

  num.innerText = `${nums} items`;
  titleDiv.append(titleWish, num);
  // titleDiv.style.display = "flex";
  document.getElementById("myWishlist").append(titleDiv);
}


let moveToBagArr = JSON.parse(localStorage.getItem("cart")) || [];

function MovetoBag(elem, index) {
  moveToBagArr.push(elem);
  wishlistGo.splice(index, 1);
  console.log(elem, index);
  localStorage.setItem("cart", JSON.stringify(moveToBagArr));
  localStorage.setItem("wishlistGo", JSON.stringify(wishlistGo));
  window.location.reload();
}

document.getElementById("count_cart").innerHTML= moveToBagArr.length;

