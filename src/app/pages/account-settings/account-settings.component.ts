import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  linkTheme = document.getElementById('theme');
  listThemes!: NodeListOf<Element>;
  constructor(private readonly settingsSvc: SettingsService) {}

  ngOnInit(): void {
    this.settingsSvc.checkCurrentTheme();
  }

  changeTheme(theme: string): void {
    this.settingsSvc.setTheme(theme);
  }
}
