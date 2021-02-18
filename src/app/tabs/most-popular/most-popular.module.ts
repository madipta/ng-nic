import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MostPopularPage } from './most-popular.page';

const routes: Routes = [
  {
    path: '',
    component: MostPopularPage,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [MostPopularPage],
})
export class MostPopularPageModule {}
