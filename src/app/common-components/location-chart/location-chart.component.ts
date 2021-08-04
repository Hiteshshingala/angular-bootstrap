import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as mockData from '../../mockData/data.json';

@Component({
  selector: 'app-location-chart',
  templateUrl: './location-chart.component.html',
  styleUrls: ['./location-chart.component.scss']
})
export class LocationChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', fill: false },
  ];
  public tilesData: any;
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'rgba(0, 0, 0, 0)',
        },
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(0, 0, 0, 0)',
        },
        ticks: {
          callback(label: number, index, labels) {
            return label / 1000 + 'k';
          }
        }
      }]
    },
    elements: {
      line: {
        fill: false
      }
    },
    legend:
      {
          display: false
      }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.tilesData = mockData.tiles;
    const label: string[] = [];
    const value: number[] = [];
    mockData.chart.forEach((data: any) => {
      label.push(data.label);
      value.push(data.value);
    });
    this.lineChartLabels = label;
    this.lineChartData = [
      { data: value, label: 'location' }
    ];
  }

}
