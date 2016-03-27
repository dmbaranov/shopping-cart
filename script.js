$(function () {

  var Cart = function () {

    var __self = this;

    this.domElems = {
      cart: $('.cart'),
      template: $('.cart__item_tmpl'),
      totalPrice: $('.cart .totals .price'),
      orderButton: $('.cart__make-order')
    };

    this.cartArray = [
      {
        id: 'a-12',
        name: 'Socks',
        price: '123.5',
        qty: '3'
      },
      {
        id: 'a-13',
        name: 'Watch',
        price: '1250',
        qty: 1
      }
    ]

    $('.navbar-brand').click(function (e) {
      var item = {
        id: 'a-14',
        name: 'Something',
        price: '10000',
        qty: '2'
      };

      __self.addToCart(item);
    });

  }

  Cart.prototype.init = function () {

    this.viewCart();

  }

  Cart.prototype.getTotalPrice = function () {
    var result = 0;

    this.cartArray.forEach(function (item) {
      result += item.price * item.qty;
    });

    return result;
  }

  Cart.prototype.viewCart = function () {
    this.viewTotalPrice();
  }

  Cart.prototype.viewTotalPrice = function () {
    this.domElems.totalPrice.html('$' + this.getTotalPrice());
  }

  Cart.prototype.viewCartList = function () {
    var listHtml = [];
        __self = this;

    this.cartArray.forEach(function (item) {
      listHtml.push(__self.viewCartItem(item));
    });

    $('.cart .totals').before(listHtml);
  }

  Cart.prototype.viewCartItem = function (item) {
    var tmpl = this.domElems.template.clone().removeClass('cart__item_tmpl'),
        itemPrice = item.qty * item.price;

    tmpl.find('.quantity').text(item.qty);
    tmpl.find('.itemName').text(item.name)
    tmpl.find('.price').text('$' + itemPrice);

    return tmpl;
  }

  Cart.prototype.addToCart = function (item) {
    this.cartArray.push(item);
    this.viewCart();
  }

  window.cart = new Cart();

  cart.init();
  cart.viewCartList();

});