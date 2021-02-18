import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TopStoriesPage } from './top-stories.page';

const routes: Routes = [
  {
    path: '',
    component: TopStoriesPage,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [TopStoriesPage],
})
export class TopStoriesPageModule {}
