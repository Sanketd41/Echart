import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DataService } from './services/data.service';
import { ChartData } from './models/chart-data.model';
import { HeaderComponent } from './components/header/header.component';
import { ChartComponent } from './components/chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,           // 👈 Needed for ngModel
    HeaderComponent,
    ChartComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-echarts-app';
  chartData: ChartData[] = [];
  selectedChartType: 'bar' | 'pie' | 'line' = 'bar';
  //selectedChartType: string = 'bar';  // 👈 Default chart type

  constructor(private dataService: DataService) {
    this.chartData = this.dataService.getChartData();
  }
}
