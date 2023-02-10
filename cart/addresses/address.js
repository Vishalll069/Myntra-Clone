// import navbar from "./navbar.js";
// document.getElementById("navbar").innerHTML = navbar();
let home = document.getElementById("home");
let work = document.getElementById("work");


home.addEventListener("click",saveHome)
function saveHome() {
  
event.preventDefault()
  
  home.style.color = "hotpink";
  home.style.border = "1px solid #ff3f6c";
  work.style.color = "black";
  work.style.border = "1px solid lightgray";
}
work.addEventListener("click",saveWork)
function saveWork() {
  event.preventDefault()
  work.style.color = "hotpink";
  work.style.border = "1px solid #ff3f6c";
  home.style.color = "black";
  home.style.border = "1px solid lightgray";
}

document.getElementById("addAddress").addEventListener("click", newAddress);
// let totalPriceDelivery = JSON.parse(localStorage.getItem("totalprice"));
let addressArr = [];
function newAddress() {
  event.preventDefault();



  let name = document.getElementById("name").value;
  let mobile = document.getElementById("Mobile").value;
  let pincode = document.getElementById("pinCode").value;
  let address = document.getElementById("address").value;
  let town = document.getElementById("town").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;

  let myAddress = {
    name:name,
    mobile:mobile,
    pincode:pincode,
    address:address,
    town:town,
    city:city,
    state:state
  }

  if(name=="" && mobile=="" && pincode=="" && address=="" && town=="" && city=="" && state==""){
    alert("All fields are required!")
    return false;
  }

if(name==""){
  alert("Please fill the name")
  return false;
}

if(mobile==""){
  alert("Mobile number is mandatory!")
  return false;
}
if(pincode==""){
  alert("Pincode is required!")
  return false;
}
if(address==""){
  alert("Address is required!")
  return false;
}
if(town==""){
  alert("Town/ Village is required! ")
  return false;
}
if(city==""){
  alert("City is required!")
  return false;
}
if(state==""){
  alert("State is required!")
  return false;
}

else{ 
  addressArr.push(myAddress);
  localStorage.setItem("address", JSON.stringify(addressArr));
  window.location.href = "/cart/addresses/selectAddress.html";
}

function makeAddress(n, m, p, a, t, c, s) {
  this.name = n;
  this.mobile = m;
  this.pincode = p;
  this.address = a;
  this.town = t;
  this.city = c;
  this.state = s;
}



return true;
}
let priceObj = JSON.parse(localStorage.getItem("totalPriceInfo"));
let totalActual = priceObj.totalQuantiPrice;
let total = priceObj.totalActualPrice;
let discount = priceObj.discount;
console.log(priceObj);

document.getElementById("totalActual").innerText = `₹ ${total}`;
document.getElementById("discount").innerText = `₹ ${discount}`;
document.getElementById("totalP").innerText = `₹ ${totalActual}`;