import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  @Input('fillPercentage') fillPercentage: SingleDataSet = 0;

  doughnutChartLabels: Label[] = ['male', 'others'];
  doughnutChartData: MultiDataSet = [
    [this.fillPercentage, 10]
  ];
  doughnutChartType: ChartType = 'doughnut';
  public lineChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: [
        '#e7571c',
        'rgba(255,0,0,0.3)',
      ]
    },
  ];


  constructor() { }

  ngOnInit() {
    this.doughnutChartData = [
      this.fillPercentage, (100 - this.fillPercentage)
    ];
  }

}
