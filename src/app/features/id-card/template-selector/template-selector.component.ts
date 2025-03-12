import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TemplateSelectorComponent {
  selectedOrientation: string = 'portrait';  // Default orientation

  selectedTemplate: any = null;   // Holds the selected template
  editingTemplate: any = { };       // Temporary object for editing  

  // Array of available templates
  templates = [
    {
      name: 'Template 1',
      image: '/assets/images/person-1.png',
      title: 'Software Engineer',
      email: 'e@gmail.com',
      address: '123 Main St, Lagos, Nigeria',
      phone: '0394049404',
      templateType: 'elegant',
      emergencyContact: {
        name: "Aisha Mustapha",
        phone: "07040612657",
        email: "ayshamustapha99@gmail.com"
      },
      barcode: '/assets/id-card/qr-code.webp',
      signature: '/assets/id-card/signature.png',
    },
    {
      name: 'Template 2',
      image: '/assets/images/person_2.jpg',
      title: 'Graphic Designer',
      templateType: 'futuristic',
      email: 'a@gmail.com',
      address: '1453 Main St, Manchester, London',
      phone: '9394848203',
      emergencyContact: {
        name: "Aisha Mustapha",
        phone: "07040612657",
        email: "ayshamustapha99@gmail.com"
      },
      barcode: '/assets/id-card/barcode.avif',
      signature: '/assets/id-card/signature.png',
    },
    {
      name: 'Template 3',
      image: '/assets/images/person_3.jpg',
      title: 'Product Manager',
      templateType: 'modern',
      email: 'p@gmail.com',
      address: '23 Sunway St, Adisababa, Ethiopia',
      phone: '34033492048',
      emergencyContact: {
        name: "Aisha Mustapha",
        phone: "07040612657",
        email: "ayshamustapha99@gmail.com"
      },
      barcode: '/assets/id-card/barcode.png',
      signature: '/assets/id-card/signature.webp',
    },
  ];

  constructor(private router: Router) {

  }

  selectTemplate(template: any) {
    this.selectedTemplate = template;
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          this.editingTemplate.image = e.target.result as string;  // Update the editing template
        }
      };
      reader.readAsDataURL(file);
    }
  }

  editTemplate(template: any) {
    this.editingTemplate =  {
      name: template.name,
      image: template.image,
      title: template.title,
      email: template.email,
      address: template.address,
      phone: template.phone,
      templateType: template.templateType,
      emergencyContact: { ...template.emergencyContact },  
      barcode: template.barcode,
      signature: template.signature,

    },
    this.router.navigate(['/id-card/editor'], { state: { 
      template: this.editingTemplate,
      orientation: this.selectedOrientation
     } });
  }


}
