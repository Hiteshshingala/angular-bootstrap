import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdsAnalyticsComponent } from './pages/ads-analytics/ads-analytics.component';
import { MarketStatusComponent } from './pages/market-status/market-status.component';
import { ChartsModule } from 'ng2-charts';
import { HeaderComponent } from './ui/header/header.component';
import { CommonComponentsModule } from './common-components/common-componets.module';

@NgModule({
  declarations: [
    AppComponent,
    AdsAnalyticsComponent,
    MarketStatusComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
