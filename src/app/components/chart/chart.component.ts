import { Component, OnChanges, SimpleChanges ,Input,ElementRef, AfterViewInit ,ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import { ChartData } from '../../models/chart-data.model';

@Component({
  selector: 'app-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @Input() data: ChartData[] = [];
  @Input() type: string = 'bar';  // 👈 Accept chart type input
  @ViewChild('chartContainer') chartContainer!: ElementRef;
  private chartInstance: any;

  ngAfterViewInit() {
    this.initChart();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.chartInstance) {
      this.updateChart();
    }
  }

  private initChart() {
    const element = this.chartContainer.nativeElement;
    this.chartInstance = echarts.init(element);
    const options = this.getChartOptions();
    this.chartInstance.setOption(options);
  }
  private updateChart() {
    const options = this.getChartOptions();
    this.chartInstance.setOption(options, true); // true = replace all options
  }

  private getChartOptions() {
    if (this.type === 'pie') {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: 'bottom'
        },
        series: [
          {
            name: 'Category',
            type: 'pie',
            radius: '50%',
            label: {
              show: true,
              formatter: '{b}: {d}%'  // shows category name and percentage
            },
            data: this.data.map(item => ({
              value: item.value,
              name: item.category
            }))
          }
        ]
      };
    } else {
      return {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: this.data.map(item => item.category)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Value',
            data: this.data.map(item => item.value),
            type: this.type,
            label: {
              show: true,
              position: 'top',  // label appears on top of bar/line point
              formatter: (params: any) => {
                const category = this.data[params.dataIndex].category;
                const value = params.value;
               return `${category}: ${value}`;
              }
            }
          }
        ]
      };
    }
  }
  
  
}
