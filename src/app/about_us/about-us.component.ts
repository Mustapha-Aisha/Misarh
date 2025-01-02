// import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FooterComponent } from '../home/footer/footer.component';
import { CommonModule } from '@angular/common';


interface sliderImage {
  title: string,
  imageSrc: string;
  imageAlt: string;
  imageText: string;
  notes?: string
}

@Component({
  selector: 'app-about-us',
  imports: [
    CommonModule,
    // NavbarComponent,
    FooterComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  // productType: = [

  // ]
  cards: sliderImage[] = [
    {
      title: "Discover Your Profile",
      imageSrc: 'https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=800',
      imageAlt: 'perfume1',
      imageText: 'Use our interactive scent profiler to find your perfect match',
    },
    {
      title: "Imperial Collection",
      imageSrc: 'https://images.pexels.com/photos/136651/pexels-photo-136651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'perfume1',
      imageText: 'Get designer perfumes at affordable prices.',
    },
    {
      title: "Imperial Collection",
      imageSrc: 'https://images.pexels.com/photos/9323864/pexels-photo-9323864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      imageAlt: 'perfume1',
      imageText: 'Get designer perfumes at affordable prices.',
    },

  ]

  products = [
    { id: 1, name: 'Elegance Noir', description: 'A blend of floral and musky notes.', price: 100, image: 'https://images.pexels.com/photos/724635/pexels-photo-724635.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' },
    { id: 2, name: 'Mystic Amber', description: 'A warm and exotic fragrance with amber tones.', price: 120, image: 'https://images.pexels.com/photos/3788293/pexels-photo-3788293.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' }, { id: 1, name: 'Elegance Noir', description: 'A blend of floral and musky notes.', price: 100, image: 'https://images.pexels.com/photos/724635/pexels-photo-724635.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' },
    { id: 2, name: 'Mystic Amber', description: 'A warm and exotic fragrance with amber tones.', price: 120, image: 'https://images.pexels.com/photos/3788293/pexels-photo-3788293.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' },
  ];

  testimonials = [
    {
      name: "Sophia L.",
      text: "The moment I opened the package, I was greeted by an unforgettable fragrance. I’m in love with this perfume – it’s unique, fresh, and elegant!",
      role: "Verified Buyer"
    },
    {
      name: "James P.",
      text: "A true luxury experience! From the elegant packaging to the mesmerizing scent, this perfume made me feel like I was walking through a high-end boutique.",
      role: "Verified Buyer"
    },
    {
      name: "Elena G.",
      text: "The fragrance lasts all day! Every time I wear it, I get compliments. It’s not just a perfume; it’s an experience!",
      role: "Verified Buyer"
    }
  ];

  autoSlide: string = "Aisha";
  @Input() controls: boolean = true;
  @Input() indicators: boolean = true;  // Added indicators input
  @Input() slideInterval: number = 4000;

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }


  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.cards.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.cards.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
  addToCart(product: sliderImage) {
    alert(`Product ${product.title}`)
  }


}
