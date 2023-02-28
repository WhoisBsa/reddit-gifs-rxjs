import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { concat, debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { environment } from 'src/env/env';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  constructor(
    private http: HttpClient
  ) { }

  getRedditAPI() {
    return environment.redditURL;
  }

  getGifs(formCtrl: FormControl) {
    const subreddits$ = concat(
      of('gifs'),
      formCtrl.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
      )
    );

    return subreddits$.pipe(
      switchMap(({ subreddit }) => {
        return this.http.get(this.getRedditAPI().concat(`${subreddit}.json?limit=100`))
      })
    )
  }
}
