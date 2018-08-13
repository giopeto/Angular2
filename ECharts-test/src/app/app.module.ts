import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { NightingaleRoseChartComponent } from './components/nightingale-rose-chart/nightingale-rose-chart.component';
import {AppRoutingModule} from './app-routing.module';
import { DatasetChartComponent } from './components/dataset-chart/dataset-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    NightingaleRoseChartComponent,
    DatasetChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
