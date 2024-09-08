
var $root = document.getElementById("root");
var $card = document.getElementById("card");
var $button = document.querySelector("#button");
var shoppingCard = [];
drawBoxes();

$button.addEventListener("click", function () {
  drawInCard();

  $card.style.display = "flex";
  $root.addEventListener("click", () => ($card.style.display = "none"));
});

function drawInCard() {
    $card.innerHTML=""
  shoppingCard.forEach((product) => createBoxCard(product));
  var $totalPrice=document.createElement('p')
  $totalPrice.innerHTML=shoppingCard.reduce((a,e)=>a+=e.product.price*e.quantity,0)
  $card.appendChild($totalPrice)
}
function drawBoxes() {
  products.forEach((product) => createBox(product));

}

function createBox(product) {
  var $box = document.createElement("div");
  $box.className = "product-box";
  $box.id = product.id;
  var $pimg = document.createElement("img");
  $pimg.setAttribute("src", product.image);
  var $ptitle = document.createElement("h2");
  $ptitle.innerHTML =
    product.title.length > 30
      ? product.title.slice(0, 30) + "..."
      : product.title;
  var $pprice = document.createElement("p");
  $pprice.innerHTML = product.price;
  var $addToCard = document.createElement("button");
  $addToCard.innerHTML = "<i class='bx bx-plus'></i>";
  $addToCard.addEventListener("click", function () {
    shoppingCard.push({product:product,quantity:1});
    alert("added to card");
  });
  $box.appendChild($pimg);
  $box.appendChild($ptitle);
  $box.appendChild($pprice);
  $box.appendChild($addToCard);
  $root.appendChild($box);
}

function createBoxCard({product,quantity}) {
  var $box = document.createElement("div");
  $box.className = "product-box";
  $box.id = product.id;
  var $pimg = document.createElement("img");
  $pimg.setAttribute("src", product.image);
  var $ptitle = document.createElement("h2");
  var $quantity = document.createElement("h2");
  $quantity.innerHTML=quantity

  $ptitle.innerHTML =
    product.title.length > 30
      ? product.title.slice(0, 30) + "..."
      : product.title;
  var $pprice = document.createElement("p");
  $pprice.innerHTML = product.price;
  var $plus = document.createElement("button");
  $plus.innerHTML = "<i class='bx bx-plus'></i>";
  $plus.addEventListener("click",function(){
    shoppingCard.map((e)=>e.product.id===product.id?e.quantity++:e)

    drawInCard()
  })
  var $min = document.createElement("button");
  $min.innerHTML = "-";
  $min.addEventListener("click",function(){
    shoppingCard.map((e,i)=>e.product.id===product.id?e.quantity>1?e.quantity--:shoppingCard.splice(i,1):e)

    drawInCard()
  })
  $box.appendChild($pimg);
  $box.appendChild($ptitle);
  $box.appendChild($pprice);
  $box.appendChild($plus);
  $box.appendChild($min);  $box.appendChild($quantity);

  $card.appendChild($box);
}

function removeelement(){
    
}
