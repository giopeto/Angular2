import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public pieChart: any;
  public chartOption: object;

  constructor() { }

  ngOnInit() {
      this.pieChart = echarts.init(document.getElementById('bar-chart'));
      this.createPieChart();
  }

  createPieChart() {
      this.chartOption = {
          title: {
              text: 'ECharts entry example'
          },
          tooltip: {},
          legend: {
              data: ['Sales']
          },
          xAxis: {
              data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
          },
          yAxis: {},
          series: [{
              name: 'Sales',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      };

      // use configuration item and data specified to show chart
      this.pieChart.setOption(this.chartOption);
  }
}
