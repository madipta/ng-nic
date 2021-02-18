import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-stories',
  template: `
    <ion-header translucent>
      <ion-item color="primary">
        <ion-label><h1>Top Stories</h1></ion-label>
        <ion-select
          *ngIf="sections"
          interface="popover"
          (ionChange)="onSelectChange($event)"
          [compareWith]="compareWith"
          [value]="selectedSection"
        >
          <ion-select-option *ngFor="let section of sections" [value]="section">
            {{ section }}
          </ion-select-option>
        </ion-select>
      </ion-item>
    </ion-header>
    <ion-content>
      <ion-list *ngIf="loadingSubject | async">
        <ion-item *ngFor="let in of skeletonCounter(5)">
          <ion-card style="width:100%;">
            <ion-skeleton-text
              animated
              style="height:10rem;"
            ></ion-skeleton-text>
            <ion-card-header>
              <ion-card-subtitle>
                <ion-skeleton-text
                  animated
                  style="width:40%;height:2rem;"
                ></ion-skeleton-text>
              </ion-card-subtitle>
              <ion-card-title>
                <ion-skeleton-text
                  animated
                  style="height:3.5rem;"
                ></ion-skeleton-text>
              </ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-skeleton-text
                animated
                style="height:6rem;"
              ></ion-skeleton-text>
            </ion-card-content>
          </ion-card>
        </ion-item>
      </ion-list>
      <ion-list *ngIf="stories">
        <ion-item *ngFor="let story of stories" lines="none">
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
  stories: any;
  sections: string[];
  selectedSection = 'world';
  loadingSubject = new Subject<boolean>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getTopStories();
    this.getTopStoriesSections();
  }

  getTopStories() {
    this.loadingSubject.next(true);
    this.dataService
      .getTopStories(this.selectedSection)
      .pipe(take(1))
      .subscribe((val) => {
        if (val) {
          this.stories = val.results;
        }
        this.loadingSubject.next(false);
      });
  }

  getTopStoriesSections() {
    this.dataService
      .getTopStoriesSections()
      .pipe(take(1))
      .subscribe((val) => {
        if (val && val.length) {
          this.sections = val;
        }
      });
  }

  onSelectChange(selectedValue: any) {
    this.selectedSection = selectedValue.detail.value;
    this.getTopStories();
  }

  compareWith(current, selected) {
    return current === selected;
  }

  skeletonCounter(i: number) {
    return new Array(i);
  }
}
