import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdsAnalyticsComponent } from './pages/ads-analytics/ads-analytics.component';
import { MarketStatusComponent } from './pages/market-status/market-status.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsAnalyticsComponent,
    MarketStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
