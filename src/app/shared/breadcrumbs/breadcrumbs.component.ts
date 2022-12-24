import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  title!: string;
  sub$ = new Subscription();
  constructor(private readonly _router: Router, private route: ActivatedRoute) {
    console.log('ss', route.snapshot.children);
    this.sub$ = this.getArgsRuter().subscribe(({ title }) => {
      this.title = title;
      document.title = `Admin Prod - ${title}`;
    });
  }

  ngOnInit(): void {}

  getArgsRuter() {
    return this._router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((e: ActivationEnd) => e.snapshot.firstChild === null),
      map((event) => event.snapshot.data)
    );
  }

  ngOnDestroy(): void {
    try {
      this.sub$.unsubscribe();
    } catch (error) {}
  }
}
