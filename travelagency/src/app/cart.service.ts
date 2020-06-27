import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CartService {

	items = [];
	total = 0;
	discount = 0;
	percentage = 0;

	constructor() { }

	addToCart(item) {
		this.items.push(item);
		this.total += Number(item.price);
	}

	deleteItem(index) {
		if (index !== -1) {
			this.total -= Number(this.items[index].price);
        	this.items.splice(index, 1);
    	}
	}

	getItems() {
		return this.items;
	}

	getTotal() {
		return this.total;
	}

	clearCart() {
		this.items = [];
		this.total = 0;
		this.discount = 0;
		this.percentage = 0;
		return this.items;
	}

	getDiscount(total) {
		if (total >= 200 && total < 500) {
			this.discount = total * 0.1;
			this.percentage = 10;
		} else if(total >= 500) {
			this.discount = total * 0.2;
			this.percentage = 20;
		} else {
			this.discount = 0;
			this.percentage = 0;
		}
		return this.discount;
	}

	getPercentage() {
		return this.percentage;
	}
}
