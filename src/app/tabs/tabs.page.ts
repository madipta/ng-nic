import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="top-stories">
          <ion-icon name="star"></ion-icon>
          <ion-label>Top</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="most-popular">
          <ion-icon name="earth"></ion-icon>
          <ion-label>Popular</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search">
          <ion-icon name="search"></ion-icon>
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
})
export class TabsPage {
  constructor() {}
}
