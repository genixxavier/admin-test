import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  filter,
  interval,
  map,
  Observable,
  retry,
  Subscription,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit, OnDestroy {
  intervalSub: Subscription = new Subscription();

  constructor() {
    /* this.returnObsebale()
      .pipe(retry(1))
      .subscribe({
        next(value) {
          console.log('first', value);
        },
        error(err) {
          console.log('error', err);
        },
        complete() {
          console.log('completed!!!');
        },
      }); */
    this.intervalSub = this.returnInterval().subscribe(console.log);
  }

  ngOnInit(): void {}

  returnInterval(): Observable<number> {
    return interval(1000).pipe(
      map((val) => val + 1),
      filter((val) => val % 2 === 0),
      take(100)
    );
  }

  returnObsebale(): Observable<number> {
    const obs$ = new Observable<number>((observer) => {
      let i = -1;
      const inter = setInterval(() => {
        i++;
        observer.next(i);
        if (i == 4) {
          clearInterval(inter);
          observer.complete();
        }
        if (i == 2) {
          clearInterval(inter);
          observer.error('errrr');
        }
      }, 1000);
    });

    return obs$;
  }

  ngOnDestroy(): void {
    try {
      this.intervalSub.unsubscribe();
    } catch (error) {}
  }
}
