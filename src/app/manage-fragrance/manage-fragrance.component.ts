import { Component } from '@angular/core';
import { NavbarComponent } from "../home/navbar/navbar.component";
import { FooterComponent } from "../home/footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-fragrance',
  // imports: [NavbarComponent, FooterComponent],
  templateUrl: './manage-fragrance.component.html',
  styleUrl: './manage-fragrance.component.scss'
})
export class ManageFragranceComponent {
   name: string = "Aisha"
   verificationLink: string = ""
   link:string = ''
   password: string = 'Aisha'

   constructor(private router: Router) {}
   clickMe() {
     console.log("Clicked")
     this.router.navigate(['https://www.google.com'])

   }
}
