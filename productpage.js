
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
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16693158/2022/3/9/a8ac795f-5f42-410c-a3ee-0391433471581646811097974-Blackberrys-Men-White--Yellow-Floral-Printed-Polo-Collar-T-s-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 3,
        quantity: 1,
        img: "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2297835/2018/3/14/11521020286596-Roadster-Men-Tshirts-4241521020286395-1.jpg",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 4,
        quantity: 1,
        img: "https://lp2.hm.com/hmgoepprod?set=source[/28/ba/28ba4ca23e458bd9d554415027bd45260d710f83.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]",
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
        img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fG1lbiUyMHNoaXJ0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
        img: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffc%2Fd1%2Ffcd1b834ec98821caa5f744ff15015a6f3a38cac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        brand: "puma",
        desc: "denim jacket",
        price: 539,
        Mp: 1159,
        offer: 50,
    },
    {
        id: 10,
        quantity: 1,
        img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3fa337a0-c792-4038-8d12-50d463c189a11598892377363-Levis.jpg",
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
           addtoCart(i);
        });


        pricebox.append(mrp, finalprice);
        div.append(image,brand,desc, pricebox,btn);
        document.getElementById("data").append(div);
        
    });
    console.log(products);
    console.log("hello there");

    var cart= JSON.parse(localStorage.getItem("cart")) || [];
    function addtoCart(index){
        var cartitem = products.filter(function(elem,i){
            return i=== index;
        });
        cart.push(cartitem[0]);
     console.log(cartitem); 
     localStorage.setItem("cart",JSON.stringify(cart));  
    }
}

function clear(){
 displayproducts(products);
}

function sortvalue(){
    
}