import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from "../home/navbar/navbar.component";
import { FooterComponent } from "../home/footer/footer.component";

@Component({
  selector: 'app-personal-details',
  imports: [FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {
  user = {
    firstName: 'Aisha',
    lastName: 'Mustapha',
    email: 'ayshamustapha99@gmail.com',
    birthday: '',
    scentPreference: 'Perfumes',
  };

  updateDetails() {
    alert('Customer details updated successfully!');
    console.log(this.user);
  }
}
