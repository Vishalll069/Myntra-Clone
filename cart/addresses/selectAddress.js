let deliveryInfo = JSON.parse(localStorage.getItem("address"));
let name = deliveryInfo[0].name;
let address = deliveryInfo[0].address;
let mobile = deliveryInfo[0].mobile;
// console.log(deliveryInfo);
console.log(name, address, mobile);

document.getElementById("name").innerHTML = name;
document.getElementById("address").innerText = address;
let addDiv = document.createElement("div");
let p = document.createElement("p");
p.innerText = "Mobile:";
let ph = document.createElement("h6");
ph.style.fontSize = "small";
ph.style.marginLeft = "5px";
p.style.lineHeight = "15px";
ph.innerText = mobile;
addDiv.append(p, ph);
addDiv.style.display = "flex";
document.getElementById("mobile").append(addDiv);

let cartGo = JSON.parse(localStorage.getItem("cart"));


cartGo.map((elem) => {
  let box = document.createElement("div");
  let boxLeft = document.createElement("div");
  let boxRight = document.createElement("div");
  box.style.borderBottom = "1px solid lightgrey";

  let img = document.createElement("img");
  img.src = elem.image;
  img.style.maxHeight = "100%";
  img.style.width = "auto";

  let est = document.createElement("p");
  est.innerText = "Estimated delivery by ";
  est.style.marginRight = "5px"
  est.style.fontSize = "small";

  const d = new Date();
  
  let deliveryDate = document.createElement("h6");
  deliveryDate.innerText = d.toDateString() ;
  deliveryDate.style.lineHeight = "20px";
  deliveryDate.style.fontSize = "200";

  let estDiv = document.createElement("div");
  estDiv.style.display = "flex";
  // estDiv.style.justifyContent = "space-around";
  estDiv.append(est, deliveryDate);
  estDiv.style.marginTop = "10%";

  boxLeft.append(img);
  boxRight.append(estDiv);
  box.setAttribute("class", "flexThis");
  box.style.height = "60px";
  box.append(boxLeft, boxRight);

  document.getElementById("appendBagSmall").append(box);
});
let priceData = JSON.parse(localStorage.getItem("totalPriceInfo"));
let totalActual = priceData.totalActualPrice;
let total = priceData.totalPrice;
// total.style.fontSize="large"
document.getElementById("total").style.fontSize = "large"
// console.log(total);

let discount = priceData.discount;

document.getElementById("totalActual").innerText = `₹ ${totalActual}`;
document.getElementById("total").innerText = `₹ ${total}`;
document.getElementById("discount").innerText = `₹ ${discount}`;

// function removeAddress(){
//   deliveryInfo.splice(0, 1);
//   localStorage.setItem("address", JSON.stringify(addressArr));

// }