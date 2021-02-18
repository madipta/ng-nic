import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-stories',
  template: `
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Top Stories</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list *ngIf="stories$ | async as stories">
        <ion-item *ngFor="let story of stories.results" lines="none">
          <ion-card>
            <ion-img [src]="story.multimedia[3].url"></ion-img>
            <ion-card-header>
              <ion-card-subtitle>{{ story.section }}</ion-card-subtitle>
              <ion-card-title>{{ story.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>{{ story.abstract }}</ion-card-content>
          </ion-card>
        </ion-item>
      </ion-list>
    </ion-content>
  `,
})
export class TopStoriesPage implements OnInit {
  stories$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.stories$ = this.dataService.getTopStories();
  }
}
