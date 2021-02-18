import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-most-popular',
  template: ` <ion-header translucent>
      <ion-toolbar>
        <ion-title>Top Stories</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list *ngIf="stories$ | async as stories">
        <ion-item *ngFor="let story of stories.results" lines="none">
          <ion-card>
            <ion-img
              *ngIf="story.media.length"
              [src]="story.media[0]['media-metadata'][1].url"
            ></ion-img>
            <ion-card-header>
              <ion-card-subtitle>{{ story.section }}</ion-card-subtitle>
              <ion-card-title>{{ story.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>{{ story.abstract }}</ion-card-content>
          </ion-card>
        </ion-item>
      </ion-list>
    </ion-content>`,
})
export class MostPopularPage implements OnInit {
  stories$: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.stories$ = this.dataService.getMostPopular();
  }
}
