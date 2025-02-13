// import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FooterComponent } from '../home/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../home/navbar/navbar.component';
import { TestimonialComponent } from "../testimonial/testimonial.component";

@Component({
  selector: 'app-about-us',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    TestimonialComponent
],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
