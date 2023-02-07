
var products = [
    {
        id: 1,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 2,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 3,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 4,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 5,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 6,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 7,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 8,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 9,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 10,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 11,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11948298/2022/3/24/ba4a8e4a-8e7b-4bfe-9ea2-fd5693598f931648115076887-Roadster-Men-Grey-Melange-T-shirt-8701648115076447-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
];


displayproducts();

function displayproducts(){
    products.map(function (ele, i){
        var div = document.createElement('div');
        
        var brand = document.createElement("h3");
        brand.textContent = ele.brand;
        
        var image = document.createElement("img");
        image.setAttribute("src", ele.img)
        
        var desc = document.createElement("h3");
        desc.textContent = ele.desc;
        
        var pricebox = document.createElement("div");
        
        var mrp = document.createElement("p");
        mrp.textContent = ele.price;
        
        var finalprice = document.createElement("p");
        finalprice.textContent = ele.Mp;
        
        var btn=document.createElement("button");
        btn.textContent="Add to cart"; 
        btn.addEventListener("click",function (){
           addtoCart(index);
        });


        pricebox.append(mrp, finalprice);
        div.append(image,brand,desc, pricebox,btn);
        document.getElementById("data").append(div);
        
    });
    console.log(products);
    console.log("hello there");


}