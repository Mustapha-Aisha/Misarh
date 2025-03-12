import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core'
import { templates } from '../id-template.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  imports: [CommonModule, FormsModule, DragDropModule]
})
export class EditorComponent implements OnInit {
  selectedTemplate: any;
  selectedOrientation: any;
  isFrontView: boolean = true;
  leftBgColor: any;
  rightBgColor: any;
  selectedField: any;
  editableFields: any
  editMode: 'text' | 'background' | null = null;



  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.selectedTemplate = navigation?.extras.state?.['template'] || {};
    this.selectedOrientation = navigation?.extras.state?.['orientation'] || 'portrait';

    if (!this.selectedTemplate.textStyles) {
      this.selectedTemplate.textStyles = {};
    }
  }
  ngOnInit(): void {
    this.editableFields = Object.keys(this.selectedTemplate).filter((key) => !["image", "barcode", "signature", "templateType", "textStyles"].includes(key));

    this.editableFields.forEach((field: string) => {
      this.selectedTemplate.textStyles[field] = {
        fontSize: 16,
        color: "#000000"
      };
    });

    console.log(this.selectedTemplate)
  }
  saveTemplate() {
    // this.selectedTemplate = { ...this.editingTemplate }; // Assign a new object reference
  }
  editTemplateValue() {
    this.selectedTemplate = { ...this.selectedTemplate }; // Create a new reference
  }

  selectField(field: any) {
    this.selectedField = field
  }

  selectTextField(field: string | null) {
    this.selectedField = field;
    this.editMode = 'text';
  }

  selectBackground(side: 'left' | 'right') {
    console.log('Background clicked:', side); 
    this.selectedField = side;
    this.editMode = 'background';
  }
  

  updateFontSize(event: any) {
    if (this.selectedField && this.selectedTemplate.textStyles[this.selectedField]) {
      this.selectedTemplate.textStyles[this.selectedField].fontSize = event.target.value + 'px';
    }
  }
  
  updateFontColor(event: any) {
    if (this.selectedField && this.editMode === 'text') {
      this.selectedTemplate.textStyles[this.selectedField].color = event.target.value;
    }
  }

  updateBackgroundColor(event: any) {
    if (this.selectedField === 'left') {
      this.leftBgColor = event.target.value;
    } else if (this.selectedField === 'right') {
      this.rightBgColor = event.target.value;
    }
  }
}

