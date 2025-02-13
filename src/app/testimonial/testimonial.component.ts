import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { tns } from 'tiny-slider';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
  imports: [CommonModule]
})
export class TestimonialComponent implements AfterViewInit {
  testimonials = [
    {
      content: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque',
      name: 'Maria Jones',
      position: 'CEO, Co-Founder, XYZ Inc.',
      image: 'assets/images/person-1.jpg',
    },
    {
      content: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque',
      name: 'John Doe',
      position: 'CTO, ABC Ltd.',
      image: 'assets/images/person-2.jpg',
    },
    {
      content: 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque',
      name: 'Jane Smith',
      position: 'Designer, Creative Studio',
      image: 'assets/images/person-3.jpg',
    },
  ];

  ngAfterViewInit() {
    tns({
      container: '.testimonial-slider',
      items: 1,
      axis: 'horizontal',
      controlsContainer: '#testimonial-nav',
      swipeAngle: false,
      speed: 700,
      // nav: true,
      // controls: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 3500,
      autoplayButtonOutput: false,
    });
  }
}
