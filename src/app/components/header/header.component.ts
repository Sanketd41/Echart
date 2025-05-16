import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Angular ECharts Example';
  description = 'This app demonstrates integrating ECharts into an Angular app.';
}
