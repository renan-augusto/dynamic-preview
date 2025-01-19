import { Component } from '@angular/core';
import { CodeEditorComponent } from '../../shared/code-editor/code-editor.component';

@Component({
  selector: 'app-dynamic-form-preview',
  standalone: true,
  imports: [
    CodeEditorComponent,
  ],
  templateUrl: './dynamic-form-preview.component.html',
  styleUrl: './dynamic-form-preview.component.scss'
})
export class DynamicFormPreviewComponent {

}
