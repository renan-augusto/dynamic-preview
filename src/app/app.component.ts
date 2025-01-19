import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { PoMenuItem, PoMenuModule, PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PoMenuModule,
    RouterModule,
    PoPageModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  pageTitle: string = '';
  menuItens: PoMenuItem[] = [
    {label: 'Dynamic-form preview', action: this.onMenuItemClick.bind(this), icon: 'ph ph-article', shortLabel: 'Dynamic-Form'}
  ];
  title = 'dynamic-preview-app';

  onMenuItemClick(menuItem: PoMenuItem): void {
    this.pageTitle = menuItem.label;
  }
}
