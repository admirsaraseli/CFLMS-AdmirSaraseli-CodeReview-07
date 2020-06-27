import { Component, OnInit } from '@angular/core';
import { packages } from '../packages';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.sass']
})

export class PackagesComponent implements OnInit {

	packages = packages;
	item;
	
	constructor(private route: ActivatedRoute, private cartService: CartService) { }

	addToCart(item) {
		Swal.fire('This package has been added to the cart!')
		this.cartService.addToCart(item);
	}

	ngOnInit(): void {

	}

}
