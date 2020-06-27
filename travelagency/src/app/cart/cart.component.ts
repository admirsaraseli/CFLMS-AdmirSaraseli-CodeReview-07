import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})

export class CartComponent implements OnInit {

  	items;
	checkoutForm;
	total;
	discount;
	percentage;

	constructor(private cartService: CartService, private formBuilder: FormBuilder) {
		this.checkoutForm = this.formBuilder.group({
			firstName: '',
			lastName: '',
			email: '',
			address: '',
			telnumber: '',
			description: '',
			agree: ''
		});
	}

	ngOnInit(): void {
		this.items = this.cartService.getItems();
		this.total = this.cartService.getTotal();
		this.discount = this.cartService.getDiscount(this.total);
		this.percentage = this.cartService.getPercentage();
	}

	onSubmit(customerData) {
		if (customerData.firstName !=='' && 
			customerData.lastName !=='' &&
			customerData.email !=='' &&
			customerData.address !=='' &&
			customerData.telnumber !=='' &&
			customerData.description !=='' &&
			customerData.agree !==''
			) {
			// Process checkout data here
			Swal.fire('Dear '+customerData.firstName, 'Your order has been submitted!', 'success')
			this.items = this.cartService.clearCart();
			this.total = 0;
			this.discount = 0;
			this.percentage = 0;
			this.checkoutForm.reset();
		}
		else {
			Swal.fire('Oops...', 'Please insert all your the data!', 'error')
		}	
	}

	deleteItem(index) {
		this.cartService.deleteItem(index);
		this.total = this.cartService.getTotal();
		this.discount = this.cartService.getDiscount(this.total);
		this.percentage = this.cartService.getPercentage();
	}

}
