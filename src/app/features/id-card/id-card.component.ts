import { Component } from '@angular/core';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';
import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'app-id-card',
  imports: [TemplateSelectorComponent, EditorComponent],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.scss'
})
export class IdCardComponent {
  onTemplateSelected(template: string) {
    // Pass the selected template to the ID card editor
    const editorComponent = document.querySelector('app-id-card-editor') as any;
    editorComponent.selectTemplate(template);
  }
}
