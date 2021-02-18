import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:3333/api/';

  fetch(url: string, options?: RequestInit) {
    return fromFetch(url, options).pipe(
      switchMap((response) => {
        if (response.ok) {
          return response.json();
        }
        return of({ error: true, message: `Error ${response.status}` });
      }),
      catchError((err) => {
        console.error(err);
        return of({ error: true, message: err.message });
      })
    );
  }

  getTopStories(section = 'world', options?: RequestInit) {
    return this.fetch(
      this.apiUrl + `top-stories?section=${encodeURIComponent(section)}`,
      options
    );
  }

  getTopStoriesSections(options?: RequestInit) {
    return this.fetch(this.apiUrl + `top-stories-sections`, options);
  }

  getMostPopular(options?: RequestInit) {
    return this.fetch(this.apiUrl + `most-popular?period=7`, options);
  }

  search(search: string, options?: RequestInit) {
    return this.fetch(
      this.apiUrl + `article-search?search=${encodeURIComponent(search)}`,
      options
    );
  }
}
