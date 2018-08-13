import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-nightingale-rose-chart',
  templateUrl: './nightingale-rose-chart.component.html',
  styleUrls: ['./nightingale-rose-chart.component.scss']
})
export class NightingaleRoseChartComponent implements OnInit {

  public nightingaleRoseChart: any;
  public chartOption: object;
  private isNightingaleRoseChart = false;

  constructor() { }

  ngOnInit() {
      this.nightingaleRoseChart = echarts.init(document.getElementById('nightingale-rose-chart'));
      this.createNightingaleRoseChart();
  }

  createNightingaleRoseChart() {
      this.nightingaleRoseChart.showLoading();
      this.chartOption = {
          series : [
              {
                  name: 'Reference Page',
                  type: 'pie',
                  radius: '55%',
                  roseType: this.isNightingaleRoseChart ? 'angle' : '',
                  data: [
                      {value: 400, name: 'Searching Engine'},
                      {value: 335, name: 'Direct'},
                      {value: 310, name: 'Email'},
                      {value: 274, name: 'Alliance Advertisement'},
                      {value: 235, name: 'Video Advertisement'}
                  ]
              }
          ],
          backgroundColor: '#2c343c',
          textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
          },
          labelLine: {
              lineStyle: {
                  color: 'rgba(255, 255, 255, 0.3)'
              }
          },
          visualMap: {
              // hide visualMap component; use lightness mapping only
              show: false,
              // mapping with min value at 80
              min: 80,
              // mapping with max value at 600
              max: 600,
              inRange: {
                  // mapping lightness from 0 to 1
                  colorLightness: [0, 1]
              }
          },
          itemStyle: {
              color: '#c23531',
              // shadow size
              shadowBlur: 200,
              // horizontal offset of shadow
              shadowOffsetX: 0,
              // vertical offset of shadow
              shadowOffsetY: 0,
              // shadow color
              shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
      };

      this.nightingaleRoseChart.setOption(this.chartOption);
      setTimeout(() => this.nightingaleRoseChart.hideLoading(), 500);
  }

  changeRoseType() {
      this.isNightingaleRoseChart = !this.isNightingaleRoseChart;
      this.createNightingaleRoseChart();
  }
}
