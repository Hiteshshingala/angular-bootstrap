import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationChartComponent } from './location-chart/location-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [
    LocationChartComponent,
    DoughnutChartComponent
  ],
  exports:[
    LocationChartComponent,
    DoughnutChartComponent
  ]
})
export class CommonComponentsModule { }
