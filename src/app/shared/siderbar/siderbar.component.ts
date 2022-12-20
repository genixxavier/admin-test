import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss'],
})
export class SiderbarComponent implements OnInit {
  menusItems: any[];

  constructor(private readonly _sidebarSvc: SidebarService) {
    this.menusItems = _sidebarSvc.menu;
  }

  ngOnInit(): void {}
}
