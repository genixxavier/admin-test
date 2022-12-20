import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInit(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  constructor(private readonly settingsSvc: SettingsService) {}

  ngOnInit(): void {
    customInit();
  }
}
