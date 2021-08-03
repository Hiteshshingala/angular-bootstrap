import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import * as mockData from "../../mockData/data.json";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public tilesData: any;
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }]
  }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];
  constructor() { }

  ngOnInit() {
    this.tilesData = mockData.tiles;
    console.log('@@@MockData', mockData);
    const label: string[] = [];
    const value: number[] = [];
    mockData.chart.forEach((data: any) => {
      label.push(data.label);
      value.push(data.value);
    });
    this.lineChartLabels = label;
    this.lineChartData = [
      {data: value, label: 'location'}
    ];
  }
}
