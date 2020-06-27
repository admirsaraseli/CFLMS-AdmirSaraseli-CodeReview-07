import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})

export class NavbarComponent implements OnInit {

  	projectName:string;

	constructor() {
		this.projectName = "Travel-AA";
 	}

	ngOnInit(): void {
	}

}
