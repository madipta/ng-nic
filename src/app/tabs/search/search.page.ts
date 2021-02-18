import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  template: `
    <ion-header translucent>
      <ion-item color="primary">
        <ion-label><h1>Search</h1></ion-label>
        <ion-input
          type="search"
          placeholder="keywords"
          clearInput="true"
          inputmode="search"
          enterkeyhint="search"
          slot="end"
          [(ngModel)]="search"
        ></ion-input>
        <ion-button
          (click)="onSearchClick()"
          slot="end"
          style="margin-left:.5rem;">
          <ion-icon slot="icon-only" name="search-sharp"></ion-icon>
        </ion-button>
      </ion-item>
    </ion-header>
    <ion-content>
      <ion-list *ngIf="stories$ | async as stories">
        <ion-item *ngFor="let story of stories.response.docs" lines="none">
          <ion-card>
            <ion-img
              *ngIf="story.multimedia.length"
              [src]="'https://static01.nyt.com/' + story.multimedia[0].url"
            ></ion-img>
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
export class SearchPage {
  stories$: Observable<any>;
  search: string;

  constructor(private dataService: DataService) {}

  onSearchClick() {
    this.stories$ = this.dataService.search(this.search);
  }
}
