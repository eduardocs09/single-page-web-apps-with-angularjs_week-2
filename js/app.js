(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {

		var buyCtrl = this;
		buyCtrl.items = ShoppingListCheckOffService.getItemsToBuy();
		buyCtrl.buyItem = function (index){
			ShoppingListCheckOffService.checkOffItem(index);
		};

	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {

		var boughtCtrl = this;
		boughtCtrl.items = ShoppingListCheckOffService.getItemsBought();

	}

	function ShoppingListCheckOffService() {

		var service = this;
		var itemsToBuy = [
			{ name: 'Cookies', quantity: 10},
			{ name: 'Chips', quantity: 6},
			{ name: 'Oranges', quantity: 7},
			{ name: 'Bananas', quantity: 3},
			{ name: 'Apples', quantity: 5}
		];
		var itemsBought = [];

  	service.checkOffItem = function (itemIdex) {
    	var boughtItem = { name: itemsToBuy[itemIdex].name, quantity: itemsToBuy[itemIdex].quantity };
    	itemsBought.push(boughtItem);
			itemsToBuy.splice(itemIdex, 1);
  	};

  	service.getItemsToBuy = function () {
    	return itemsToBuy;
  	};

		service.getItemsBought = function () {
    	return itemsBought;
  	};
	}

})();
