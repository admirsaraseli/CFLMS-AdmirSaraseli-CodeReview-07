import { Component, OnInit } from '@angular/core';
import { blogs } from '../blogs';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})

export class BlogComponent implements OnInit {

	blogs = blogs;

	constructor() {
	}

	ngOnInit(): void {
	}

}
