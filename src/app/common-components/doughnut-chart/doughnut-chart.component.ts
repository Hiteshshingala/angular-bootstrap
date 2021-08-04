import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { MultiDataSet, Label, Color, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  @Input('fillPercentage') fillPercentage: number = 0;

  doughnutChartLabels: Label[] = ['male', 'others'];
  doughnutChartData: MultiDataSet = [
    [this.fillPercentage, 10 ]
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

  public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[] = [{
    beforeDraw(chart: any) {
      const ctx: CanvasRenderingContext2D = chart.ctx;
      const txt = 'a';

      //Get options from the center object in options
      const sidePadding = 60;
      const sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      const centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      const stringWidth = ctx.measureText(txt).width;
      const elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      const widthRatio = elementWidth / stringWidth;
      const newFontSize = Math.floor(30 * widthRatio);
      const elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      const fontSizeToUse = Math.min(newFontSize, elementHeight);

      ctx.font = fontSizeToUse + 'px Arial';
      ctx.fillStyle = 'blue';

      // Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }];

  constructor() {}
  
  ngOnInit() {
    this.doughnutChartData = [
      this.fillPercentage, (100-this.fillPercentage)
    ]
  }

}
