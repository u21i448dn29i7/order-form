'use strict';

Order.orderArray = [];
var cart = document.getElementById('products');

function Order(name, filePath, quantity) {
  this.name = name;
  this.filePath = filePath;
  this.quantity = quantity;
  Order.orderArray.push(this);
}

(function cartForm(){
  if(localStorage.order) {
    var getData = localStorage.getItem('order');
    var blob = JSON.parse(getData);
    for(var info of blob) {
      console.log(info);
      var create = new Order(info.name, info.filePath, info.quantity);
      var item = document.createElement('li');
      item.setAttribute('id',create.name);
      var itemPic = document.createElement('img');
      itemPic.setAttribute('src', create.filePath);
      var btn = document.createElement('button');
      btn.setAttribute('id',create.name);
      btn.textContent = 'Remove Item';
      btn.addEventListener('click',removeProduct);
      item.appendChild(itemPic);
      item.appendChild(document.createTextNode(create.name));
      item.appendChild(document.createTextNode(create.quantity));
      item.appendChild(btn);
      cart.appendChild(item);
    }
  } else {
    alert('Boop no data');
  }
})();

function removeProduct(event) {
  var input = event.currentTarget;
  var elem = document.getElementById(input.id);
  elem.remove();
}