import { ResultComponent } from './containers/result/result.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent,
    data: { animation: 'OverviewPage' }
  },
  {
    path: 'result',
    component: ResultComponent,
    data: { animation: 'ResultPage' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
