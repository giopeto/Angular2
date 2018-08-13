import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-dataset-chart',
  templateUrl: './dataset-chart.component.html',
  styleUrls: ['./dataset-chart.component.scss']
})
export class DatasetChartComponent implements OnInit {

    public chart: any;
    public chartOption: object;

    constructor() { }

    ngOnInit() {
        this.chart = echarts.init(document.getElementById('chart'));
        this.createChart();
    }

    createChart() {
        this.chartOption = {
            legend: {},
            tooltip: {},
            dataset: {
                // Here the declared `dimensions` is mainly for providing the order of
                // the dimensions, which enables ECharts to apply the default mapping
                // from dimensions to axes.
                // Alternatively, we can declare `series.encode` to specify the mapping,
                // which will be introduced later.
                dimensions: ['product', '2015', '2016', '2017'],
                source: [
                    {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
                    {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
                    {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
                    {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
                ]
            },
            // Declare X axis, which is a category axis, mapping
            // to the first column by default.
            xAxis: {type: 'category'},
            // Declare Y axis, which is a value axis.
            yAxis: {},
            // Declare several series, each of them mapped to a
            // column of the dataset by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        };

        // use configuration item and data specified to show chart
        this.chart.setOption(this.chartOption);
    }
}
