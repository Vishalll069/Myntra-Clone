function loadCart(){
    
    var cart= JSON.parse(localStorage.getItem("cart")) || [];
    var html="";
    for (var i=0;i<cart.length;i++){
        html+=`                <div class="itemContainer-base-item " style="display:flex">
        <div class="itemContainer-base-itemLeft">
            <div class="itemComponents-base-selectionIconContainer itemContainer-base-selectionIndicator">
                <div class="itemComponents-base-animationContainer "></div>
            </div><a
                href="/Kurtas/Anouk/Anouk-Women-Purple--White-Pure-Cotton-Ethnic-Motifs-Printed-Kurta/14925628/buy?mini=true&amp;skuId=49108664&amp;sellerPartnerId=4216">
                <div class="" style="background: rgb(244, 255, 249); height: 148px; width: 111px;">
                    <div class="LazyLoad is-visible" style="height: 148px; width: 111px;">
                        <picture class="image-base-imgResponsive" style="width: 100%;">
                            <img
                                src=${cart[i].img}
                                class="image-base-imgResponsive" alt="image" style="width: 100%;">
                        </picture>
                    </div>
                </div>
            </a>
        </div>
        <div class="itemContainer-base-itemRight">
            <div class="itemContainer-base-details">
                <div>
                    <div class="itemContainer-base-brand">${cart[i].brand}</div>
                    <p>${cart[i].desc}</p>
                </div>
                <div class="itemComponents-base-sellerContainer">
                    <div class="itemComponents-base-sellerData">Sold by: Flashtech Retail</div>
                </div>
                <div class="itemContainer-base-sizeAndQtyContainer">
                    <div class="itemContainer-base-sizeAndQty">
                        <div class="itemComponents-base-size"><span class="">Size: S</span></div>
                        <div class="itemComponents-base-quantity"><span class="">Qty: 1</span></div>
                    </div>
                </div>
                <div class="itemContainer-base-price">
                    <div class="itemComponents-base-price itemComponents-base-bold ">
                        <div class="toolTip-base-container ">
                            <div class="toolTip-base-toolTip " id="toolTip-1">
                                <div><span> ${cart[i].price}</span></div>
                            </div>
                        </div>
                    </div>
                  
                </div>
                <div></div>
                <div>
                    <div class="returnPeriod-base-returnItem">
                        <div class="returnPeriod-base-returnText"><span
                                class="returnPeriod-base-returnDays">30 days</span> return available</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    
    <div style="width: 45%; display: flex; justify-content: space-between">
    <button class="invisiblebtn" onclick="removeElement">REMOVE</button>
    <button class="invisiblebtn" onclick="moveToWishlist">
        MOVE TO WISHLIST
    </button>
</div>`
    }
    container=document.getElementById("container");
    container.innerHTML=html;
}