let contentWrapper = document.querySelector(".content-wrapper");
let contentFastFood = document.querySelector(".content_fast-food-card");
let contentMilliy = document.querySelector(".milliy_food-card");
let FastFoodcontentList = document.querySelector(".fast-food__content-list");
let MilliyFoodcontentList = document.querySelector(".milliy__content-list");
let itembox = document.querySelector(".fast-food__content-box")
let itembox2 = document.querySelector(".milliy__content-box")
let WrapperSecond = document.querySelector(".content-wrapper__second")



function makeCard(params){
  params.map((item, index) =>{

    let FastFoodcontentItem = document.createElement("li");
    let FastFoodcontentImgBox = document.createElement("div");
    let FastFoodcontentImg = document.createElement("img");
    FastFoodcontentImg.src = item.imgSrc;
    let FastFoodcontentTitle = document.createElement("h3");
    FastFoodcontentTitle.innerText = item.name;
    let FastFoodcontentCost = document.createElement("h4");
    FastFoodcontentCost.innerText = item.cost
    let FastFoodcontentDiscount = document.createElement("h3");
    FastFoodcontentDiscount.innerText = item.chegirma;
    let FastFoodBottomBox = document.createElement("div");
    let FastFoodcontentLocation = document.createElement("a");
    FastFoodcontentLocation.href = item.link
    FastFoodcontentLocation.innerText = "Manzil";
    let FastFoodcontentBtn = document.createElement("button");
    FastFoodcontentBtn.innerText = "Sotib olish"
    let FastFoodcontentBackBtn = document.createElement("button");
    FastFoodcontentBackBtn.innerText = "milliy taomlar"
    FastFoodcontentBackBtn.setAttribute("onclick", "milliyFoodFunc()")


    FastFoodcontentItem.classList.add("fastfood-item")
    FastFoodcontentImg.classList.add("fast-food__item-img")
    FastFoodcontentTitle.classList.add("fastfood-item__title")
    FastFoodcontentCost.classList.add("fastfood__item-cost")
    FastFoodcontentDiscount.classList.add("fastfood__item-discount")
    FastFoodBottomBox.classList.add("fastfood__item-bottom-box")
    FastFoodcontentLocation.classList.add("fastfood__item-location")
    FastFoodcontentBtn.classList.add("fastfood__item-buying")
    FastFoodcontentBackBtn.classList.add("fastfood__item-buying")


    FastFoodcontentImgBox.appendChild(FastFoodcontentImg);
    FastFoodcontentItem.appendChild(FastFoodcontentImgBox);
    FastFoodcontentItem.appendChild(FastFoodcontentTitle);
    FastFoodcontentItem.appendChild(FastFoodcontentCost);
    FastFoodcontentItem.appendChild(FastFoodcontentDiscount);
    FastFoodcontentItem.appendChild(FastFoodBottomBox)
    FastFoodBottomBox.appendChild(FastFoodcontentLocation)
    FastFoodBottomBox.appendChild(FastFoodcontentBtn);
    FastFoodBottomBox.appendChild(FastFoodcontentBackBtn);


    itembox.appendChild(FastFoodcontentItem)


  })
}

makeCard(maxWay)


function foodFunc(){
  contentWrapper.classList.toggle("content-wrapper__active")
}

function fastfoodAllFunc(){
  contentFastFood.classList.add("content_fastfood__milliy-card__delete")
  contentMilliy.classList.add("content_fastfood__milliy-card__delete")
  FastFoodcontentList.classList.add("content-fastfood__list-active")
}

function milliyFoodFunc(){
  FastFoodcontentList.classList.remove("content-fastfood__list-active");

  milliyAllFunc()
}



function makeItem(params){
  params.map((item, index)=>{
    let MilliycontentItem = document.createElement("li");
    let MilliycontentImgBox = document.createElement("div");
    let MilliycontentImg = document.createElement("img");
    MilliycontentImg.src = item.imgSrc;
    let MilliycontentTitle = document.createElement("h3");
    MilliycontentTitle.innerText = item.name;
    let MilliycontentCost = document.createElement("h4");
    MilliycontentCost.innerText = item.cost
    let MilliycontentDiscount = document.createElement("h3");
    MilliycontentDiscount.innerText = item.chegirma;
    let MilliyContentBottomBox = document.createElement("div")
    let MilliycontentLocation = document.createElement("a");
    MilliycontentLocation.href = item.link
    MilliycontentLocation.innerText = "Manzil"
    let MilliycontentBtn = document.createElement("button");
    MilliycontentBtn.innerText = "Sotib olish"
    let MilliycontentBackBtn = document.createElement("button");
    MilliycontentBackBtn.innerText = "FastFood"
    MilliycontentBackBtn.setAttribute("onclick", "FastFoodFunc()")


    MilliycontentItem.classList.add("milliy__content-Item")
    MilliycontentImg.classList.add("milliy__content-IMG")
    MilliycontentTitle.classList.add("milliy__content-Title")
    MilliycontentCost.classList.add("milliy__content-Cost")
    MilliycontentDiscount.classList.add("milliy__content-Discount")
    MilliyContentBottomBox.classList.add("milliy__bottom-box")
    MilliycontentLocation.classList.add("milliy__content-Location")
    MilliycontentBtn.classList.add("milliy__content-buying")
    MilliycontentBackBtn.classList.add("milliy__content-buying")



    MilliycontentImgBox.appendChild(MilliycontentImg);
    MilliycontentItem.appendChild(MilliycontentImgBox);
    MilliycontentItem.appendChild(MilliycontentTitle);
    MilliycontentItem.appendChild(MilliycontentCost);
    MilliycontentItem.appendChild(MilliycontentDiscount);
    MilliycontentItem.appendChild(MilliyContentBottomBox)
    MilliyContentBottomBox.appendChild(MilliycontentLocation);
    MilliyContentBottomBox.appendChild(MilliycontentBtn);
    MilliyContentBottomBox.appendChild(MilliycontentBackBtn);

    itembox2.appendChild(MilliycontentItem)

    MilliyFoodcontentList.appendChild(itembox2)
  })
}
makeItem(anjir)


function milliyAllFunc(){
  contentFastFood.classList.add("content_fastfood__milliy-card__delete")
  contentMilliy.classList.add("content_fastfood__milliy-card__delete")
  MilliyFoodcontentList.classList.add("content_milliy-taomlar-active")
}

function FastFoodFunc(){
  MilliyFoodcontentList.classList.remove("content_milliy-taomlar-active")
  fastfoodAllFunc()
}


function transFunc(){
  WrapperSecond.classList.toggle("content-wrapper__second-active")

}