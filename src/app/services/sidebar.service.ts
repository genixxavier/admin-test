import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Dasboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        {
          title: 'main',
          link: '/',
        },
        {
          title: 'ProgressBar',
          link: 'progress',
        },
        {
          title: 'Graficas',
          link: 'graphic',
        },
      ],
    },
  ];

  constructor() {}
}
