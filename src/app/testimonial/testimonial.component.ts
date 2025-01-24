import { AfterViewInit, Component } from '@angular/core';
import { tns } from 'tiny-slider/src/tiny-slider';
import { NavbarComponent } from "../home/navbar/navbar.component";
import { FooterComponent } from "../home/footer/footer.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss'
})
  export class TestimonialComponent implements AfterViewInit {
    testimonials = [
      {
        content: 'Donec facilisis quam ut purus rutrum lobortis.',
        name: 'Maria Jones',
        position: 'CEO, Co-Founder, XYZ Inc.',
        image: 'assets/images/person-1.jpg'
      },
      {
        content: 'Aliquam vulputate velit imperdiet dolor tempor tristique.',
        name: 'John Doe',
        position: 'CTO, ABC Ltd.',
        image: 'assets/images/person-2.jpg'
      },
      {
        content: 'Integer convallis volutpat dui quis scelerisque.',
        name: 'Jane Smith',
        position: 'Designer, Creative Studio',
        image: 'assets/images/person-3.jpg'
      }
    ];
  
    ngAfterViewInit() {
      // tns({
			// 	container: '.testimonial-slider',
			// 	items: 1,
			// 	axis: "horizontal",
			// 	controlsContainer: "#testimonial-nav",
			// 	swipeAngle: false,
			// 	speed: 700,
			// nav: true,
			// controls: true,
			// 	autoplay: true,
			// 	autoplayHoverPause: true,
			// 	autoplayTimeout: 3500,
			// 	autoplayButtonOutput: false
			// });
    }
  } 

