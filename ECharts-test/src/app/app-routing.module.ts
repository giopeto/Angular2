import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NightingaleRoseChartComponent} from './components/nightingale-rose-chart/nightingale-rose-chart.component';
import {BarChartComponent} from './components/bar-chart/bar-chart.component';
import {DatasetChartComponent} from './components/dataset-chart/dataset-chart.component';

const routes: Routes = [
    { path: 'pie', component:  NightingaleRoseChartComponent },
    { path: 'bar', component: BarChartComponent },
    { path: 'dataset', component: DatasetChartComponent },
    { path: '', redirectTo: '/pie', pathMatch: 'full' },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
