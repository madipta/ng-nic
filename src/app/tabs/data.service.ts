import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private apiUrl = 'http://localhost:3333/api/';
  private loadingSubject = new Subject<boolean>();

  constructor() {}

  fetch(url: string, options?: RequestInit) {
    this.loadingSubject.next(true);
    return fromFetch(url, options).pipe(
      switchMap((response) => {
        this.loadingSubject.next(false);
        if (response.ok) {
          return response.json();
        }
        return of({ error: true, message: `Error ${response.status}` });
      }),
      catchError((err) => {
        this.loadingSubject.next(false);
        console.error(err);
        return of({ error: true, message: err.message });
      })
    );
  }

  isLoading$(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  getTopStories(options?: RequestInit) {
    return this.fetch(this.apiUrl + `top-stories?section=world`, options);
  }

  getMostPopular(options?: RequestInit) {
    return this.fetch(this.apiUrl + `most-popular?period=7`, options);
  }

  search(search: string, options?: RequestInit) {
    return this.fetch(this.apiUrl + `article-search?search=${encodeURIComponent(search)}`, options);
  }
}
