import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MostPopularPage } from './most-popular.page';

const routes: Routes = [
  {
    path: '',
    component: MostPopularPage,
  },
];

@NgModule({
  imports: [IonicModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [MostPopularPage],
})
export class MostPopularPageModule {}
