'use strict';
debugger;

Product.allProducts = [];
Order.orderArray = [];

function Product(name, filePath, id) {
  this.name = name;
  this.filePath = filePath;
  this.id = id;
  this.quantity = 0;
  Product.allProducts.push(this);
}

function Order(name, filePath,quantity) {
  this.name = name;
  this.filePath = filePath;
  this.quantity = quantity;
  Order.orderArray.push(this);  
}




// add add to cart listener to get product and qty
// add all items to <select> element

//fake this into "order" in localstorage


(function fakeOrder() {
  new Order('Bag', 'img/bag.jpg', 3);
  new Order('Banana', 'img/banana.jpg', 1);
  new Order('Bathroom', 'img/bathroom.jpg', 1);
  new Order('Boots', 'img/boots.jpg', 45);

  var strOrder = JSON.stringify(Order.orderArray);
  localStorage.setItem('order', strOrder);
})();

(function initProducts() {
  if (localStorage.allProducts) {
    var strAllProducts = localStorage.getItem('allProducts');
    Product.allProducts = JSON.parse(strAllProducts);
    console.log(Product.allProducts);
  } else {
    new Product('Bag', 'img/bag.jpg', 'bag');
    new Product('Banana', 'img/banana.jpg', 'banana');
    new Product('Bathroom', 'img/bathroom.jpg', 'bathroom');
    new Product('Boots', 'img/boots.jpg', 'boots');
    new Product('Breakfast', 'img/breakfast.jpg', 'breakfast');
    new Product('Bubblegum', 'img/bubblegum.jpg', 'bubblegum');
    new Product('Chair', 'img/chair.jpg', 'chair');
    new Product('Cthulhu', 'img/cthulhu.jpg', 'cthulhu');
    new Product('Dog-duck', 'img/dog-duck.jpg', 'dog-duck');
    new Product('Dragon', 'img/dragon.jpg', 'dragon');
    new Product('Pen', 'img/pen.jpg', 'pen');
    new Product('Pet-sweep', 'img/pet-sweep.jpg', 'pet-sweep');
    new Product('Tauntaun', 'img/tauntaun.jpg', 'tauntaun');
    new Product('Unicorn', 'img/unicorn.jpg', 'unicorn');
    new Product('Usb', 'img/usb.gif', 'usb');
    new Product('Water-can', 'img/water-can.jpg', 'water-can');
    new Product('Wine-glass', 'img/wine-glass.jpg', 'wine-glass');

    // var strAllProducts = JSON.stringify(Product.allProducts);
    // localStorage.setItem('allProducts', strAllProducts);

  }
})();





