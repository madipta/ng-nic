import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TopStoriesPage } from './top-stories.page';

const routes: Routes = [
  {
    path: '',
    component: TopStoriesPage,
  },
];

@NgModule({
  imports: [IonicModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [TopStoriesPage],
})
export class TopStoriesPageModule {}
