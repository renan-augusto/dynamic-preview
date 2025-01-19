import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PoCodeEditorModule } from '@po-ui/ng-code-editor';

@Component({
  selector: 'my-code-editor',
  standalone: true,
  imports: [
    PoCodeEditorModule,
  ],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CodeEditorComponent {
  code: any;
}
