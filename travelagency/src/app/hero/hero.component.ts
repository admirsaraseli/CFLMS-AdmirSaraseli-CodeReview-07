import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})

export class HeroComponent implements OnInit {

	heroHeading: string;
	heroText: string;

	constructor() {
		this.heroHeading =  "Welcome home";
		this.heroText =  "Visit magic places...:)";
	}

	ngOnInit(): void {
	}

}
