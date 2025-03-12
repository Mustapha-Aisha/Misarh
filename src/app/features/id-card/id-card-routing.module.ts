import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';

const routes: Routes = [
  { path: '', redirectTo: 'template', pathMatch: 'full' },
  { path: 'editor', component: EditorComponent},
  { path: 'template', component: TemplateSelectorComponent},
  { path: '**', redirectTo: 'template' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdCardRoutingModule { }
