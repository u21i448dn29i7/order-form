'use strict';

var productNum = [];

function Product(name, filepath, id) {
  this.name = name;
  this.filepath = filepath;
  this.id = id;
  this.quantity = 0;
  productNum.push(this);
}

function newProduct() {
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
}
newProduct();