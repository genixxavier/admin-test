import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-no-found',
  templateUrl: './page-no-found.component.html',
  styleUrls: ['./page-no-found.component.scss'],
})
export class PageNoFoundComponent implements OnInit {
  year = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {}
}
