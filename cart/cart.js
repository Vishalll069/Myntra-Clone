// function loadCart(){
    
//     var cart= JSON.parse(localStorage.getItem("cart")) || [];
//     var html="";
//     for (var i=0;i<cart.length;i++){
//         html+=`                <div class="itemContainer-base-item " style="display:flex">
//         <div class="itemContainer-base-itemLeft">
//             <div class="itemComponents-base-selectionIconContainer itemContainer-base-selectionIndicator">
//                 <div class="itemComponents-base-animationContainer "></div>
//             </div><a
//                 href="/Kurtas/Anouk/Anouk-Women-Purple--White-Pure-Cotton-Ethnic-Motifs-Printed-Kurta/14925628/buy?mini=true&amp;skuId=49108664&amp;sellerPartnerId=4216">
//                 <div class="" style="background: rgb(244, 255, 249); height: 148px; width: 111px;">
//                     <div class="LazyLoad is-visible" style="height: 148px; width: 111px;">
//                         <picture class="image-base-imgResponsive" style="width: 100%;">
//                             <img
//                                 src=${cart[i].img}
//                                 class="image-base-imgResponsive" alt="image" style="width: 100%;">
//                         </picture>
//                     </div>
//                 </div>
//             </a>
//         </div>
//         <div class="itemContainer-base-itemRight">
//             <div class="itemContainer-base-details">
//                 <div>
//                     <div class="itemContainer-base-brand">${cart[i].brand}</div>
//                     <p>${cart[i].desc}</p>
//                 </div>
//                 <div class="itemComponents-base-sellerContainer">
//                     <div class="itemComponents-base-sellerData">Sold by: Flashtech Retail</div>
//                 </div>
//                 <div class="itemContainer-base-sizeAndQtyContainer">
//                     <div class="itemContainer-base-sizeAndQty">
//                         <div class="itemComponents-base-size"><span class="">Size: S</span></div>
//                         <div class="itemComponents-base-quantity"><span class="">Qty: 1</span></div>
//                     </div>
//                 </div>
//                 <div class="itemContainer-base-price">
//                     <div class="itemComponents-base-price itemComponents-base-bold ">
//                         <div class="toolTip-base-container ">
//                             <div class="toolTip-base-toolTip " id="toolTip-1">
//                                 <div><span> ${cart[i].price}</span></div>
//                             </div>
//                         </div>
//                     </div>
                  
//                 </div>
//                 <div></div>
//                 <div>
//                     <div class="returnPeriod-base-returnItem">
//                         <div class="returnPeriod-base-returnText"><span
//                                 class="returnPeriod-base-returnDays">30 days</span> return available</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
    
//     <div style="width: 45%; display: flex; justify-content: space-between">
//     <button class="invisiblebtn" onclick="removeElement">REMOVE</button>
//     <button class="invisiblebtn" onclick="moveToWishlist">
//         MOVE TO WISHLIST
//     </button>
// </div>`
//     }
//     container=document.getElementById("container");
//     container.innerHTML=html;


let cart = JSON.parse(localStorage.getItem("cart"));

  let totalPrice = cart.reduce(function (acc, elem) {
    return acc + Number(elem.price);
  }, 0);

let totalActual = cart.reduce(function (acc, elem) {
  return acc + Number(elem.MP) ;
}, 0);

let discount = totalActual - totalPrice;

let priceobj = {
  totalPrice: totalPrice,
  totalActualPrice: totalActual,
  discount: discount,
  totalQuantiPrice:totalPrice,
  totalActualQuanti : totalActual,
  totalActualQuantiPrice : totalActual
};

localStorage.setItem("totalPriceInfo", JSON.stringify(priceobj));
// console.log(priceobj);
// }

let nums = cart.length;
let titleDiv = document.createElement("div");
let titleWish = document.createElement("h6");
titleWish.innerText = "ITEMS";
let num = document.createElement("h6");
// num.style.lineHeight = "20px";
titleWish.style.marginLeft = "10px";
num.innerText = `${nums} `;
titleDiv.append(num, titleWish);
titleDiv.style.display = "flex";
document.getElementById("numberOfItems").append(titleDiv);

// document.getElementById("totalMrp").innerText = "";
// document.getElementById("totalMrp").innerText = `₹ ${totalPrice}`;
// localStorage.setItem("totalprice", JSON.stringify(totalPrice));
let editCart = [];

cart.map((elem, index) => {
  let box = document.createElement("div");
  let boxLeft = document.createElement("div");
  let boxRight = document.createElement("div");
  box.style.minHeight = "160px";
  box.style.minWidth = "auto";
  box.style.marginTop = "15px";
  box.style.padding = "10px";
  boxRight.style.marginLeft = "20px";
  box.style.border = "1px solid grey";
  box.style.borderRadius = "5px";


  let img = document.createElement("img");
  img.src = elem.image;
  img.style.maxHeight = "90%";
  img.style.width = "auto";

  let brand = document.createElement("h6");
  brand.innerText = elem.brand;

  let name = document.createElement("p");
  name.innerText = elem.type;
  name.style.fontSize = "small";
  name.style.fontWeight = "400";
  name.style.lineHeight = "30px";


  let remove = document.createElement("button");
  remove.className = "invisiblebtn";
  remove.innerText = "REMOVE";
  remove.style.fontSize = "small";
  remove.style.color ="coral"
  remove.addEventListener("click", function () {
    removeElement(elem, index);
  });



  let nameButtonDiv = document.createElement("div");
  nameButtonDiv.style.display = "flex";
  nameButtonDiv.style.justifyContent = "space-evenly";
  nameButtonDiv.style.width = "100%";
  nameButtonDiv.style.height = "30px";

  nameButtonDiv.append(name, remove);


  let size = document.createElement("button");
  size.style.backgroundColor = "#f4f4f5";
  size.style.border = "0px";
  size.style.borderRadius = "5px";
  // size.style.fontSize = "";
  size.innerText = "Size: Onesize";

  let qty = document.createElement("select");
  qty.innerText = `QTY: 1`;
  let one = document.createElement("option");
  one.innerText = "1";
  let two = document.createElement("option");
  two.innerText = "2";
  let three = document.createElement("option");
  three.innerText = "3";
  let four = document.createElement("option");
  four.innerText = "4";
  let five = document.createElement("option");
  five.innerText = "5";
  qty.addEventListener("change", function(){
    // quantityIncre(elem, index);
    var qua = Number(qty.value)
    elem.quanti = qua;
    elem.quantiPrice = (elem.price*qua*100)/100;
    priceobj.totalQuantiPrice = elem.quantiPrice
    totalPrice = elem.quantiPrice

    elem.actualQuantiPrice = elem.MP*qua
    priceobj.totalActualQuantiPrice = elem.actualQuantiPrice;
    totalActual = elem.actualQuantiPrice;

    priceobj.discount =  priceobj.totalActualQuantiPrice-priceobj.totalQuantiPrice
    discount = priceobj.discount;
    document.getElementById("totalActual").innerText = `₹ ${totalActual}`;
    document.getElementById("total").innerText = `₹ ${totalPrice}`;
    document.getElementById("discount").innerText = `₹ ${discount}`;
    console.log(qua , elem.price, elem)
    localStorage.setItem("totalPriceInfo", JSON.stringify(priceobj));
    // this.form.reload();
  });
  qty.append(one, two, three, four, five);

  let sizeDiv = document.createElement("div");
  sizeDiv.append(size, qty);
  sizeDiv.style.display = "flex";
  sizeDiv.style.justifyContent = "space-between";

  let price = document.createElement("h6");
  price.innerText =`₹  ${elem.price}`;
  price.style.fontSize = "85%";

  let MP = document.createElement("p");
  MP.innerText =`₹ ${elem.MP}`;
  MP.style.color = "grey";
  MP.style.textDecoration = "line-through";
  MP.style.fontSize = "85%";
  // console.log(MP);


  

  let offer = document.createElement("p");
  offer.innerText = `${elem.offer}% OFF`;
  offer.style.color = "#ff3f6c";
  offer.style.fontSize = "85%";

  let priceDiv = document.createElement("div");
  priceDiv.style.display = "flex";
  // priceDiv.style.border = "1px solid red";
  priceDiv.style.justifyContent = "space-evenly";
  priceDiv.style.height = "30px";

  priceDiv.style.marginTop = "15px";

  priceDiv.append(price, MP, offer);

  let deliveryDate = document.createElement("p");
  deliveryDate.style.fontSize = "x-small";
  deliveryDate.innerText = "Delivery by: 7 May 2022";

  boxLeft.append(img);
  boxRight.append(brand, nameButtonDiv, sizeDiv, priceDiv, deliveryDate);
  box.style.display = "flex";
  box.style.height = "100px";
  box.append(boxLeft, boxRight);
  document.getElementById("appendBag").append(box);
});

// function removeElement(editCart) {
//   for (let i = 0; i < editCart.length; i++) {
//     let elem = editCart[i];
//   }
// }

let priceData = JSON.parse(localStorage.getItem("totalPriceInfo"));
// console.log(priceData);
 totalActual = priceData.totalActualPrice;
 totalPrice = priceData.totalPrice;
 discount = priceData.discount;


document.getElementById("totalActual").innerText = `₹ ${totalActual}`;
document.getElementById("total").innerText = `₹ ${totalPrice}`;
document.getElementById("discount").innerText = `₹ ${discount}`;



function removeElement(elem, index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  nums = cart.length;
  let titleDiv = document.createElement("div");
  let titleWish = document.createElement("h6");
  titleWish.innerText = "ITEMS";
  let num = document.createElement("h6");
  titleWish.style.marginLeft = "10px";
  num.innerText = `${nums} `;
  titleDiv.append(num, titleWish);
  titleDiv.style.display = "flex";
  document.getElementById("numberOfItems").append(titleDiv);
  window.location.reload();
}
