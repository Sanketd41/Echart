import { Injectable } from '@angular/core';
import { ChartData } from '../models/chart-data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getChartData(): ChartData[] {
    return [
      { category: 'India', value: 142.86 },
      { category: 'China', value: 112.57 },
      { category: 'USA', value: 93.19 },
      { category: 'Indonesia', value: 67.67 },
      { category: 'Pakistan', value: 44.12 },
      { category: 'Brazil', value: 21.56 },
      
    ];
  }
}
