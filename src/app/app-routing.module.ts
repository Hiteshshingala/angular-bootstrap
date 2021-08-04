import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdsAnalyticsComponent } from './pages/ads-analytics/ads-analytics.component';
import { MarketStatusComponent } from './pages/market-status/market-status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'market_status',
    pathMatch: 'full',
  },
  {
    path: 'ads_analytics',
    component: AdsAnalyticsComponent,
    pathMatch: 'full',
  },
  {
    path: 'market_status',
    component: MarketStatusComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
