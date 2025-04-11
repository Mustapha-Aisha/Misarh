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
      content: `I've tried like a dozen perfumes before and nothing ever felt right. Then I just typed up this random description about how I love hiking and campfires mixed with something sweet. What showed up literally smells like ME. Not some fancy perfume counter stuff - something that actually fits who I am. My boyfriend noticed immediately and said 'finally, that's YOU in a bottle`,
      name: 'Jane Adeleye',
      rating: 5,
      image: 'assets/images/person1.jpg',
    },
    {
      content: `Okay so I was totally ready to roll my eyes at this whole 'describe your perfect scent' thing. But I was desperate after wasting hundreds on department store perfumes. I wrote about my grandma's kitchen and summer rain, hit submit, and honestly forgot about it. When it arrived? I almost cried. It's EXACTLY what I wanted but could never explain to sales people. Worth every penny!`,
      name: 'Micheal Iwobi',
      rating: 5,
      image: 'assets/images/person2.jpg',
    },
    {
      content: 'I was skeptical about ordering perfumes online, but this exceeded all expectations. The scent lasts all day and the packaging was luxurious. My colleagues keep asking what I\'m wearing!',
      name: 'Chioma Eze',
      rating: 5,
      image: 'assets/images/person3.jpg',
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
