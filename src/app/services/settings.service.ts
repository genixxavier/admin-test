import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.getElementById('theme');
  constructor() {
    const getTheme =
      localStorage.getItem('theme') || './assets/css/colors/blue.css';
    this.linkTheme?.setAttribute('href', getTheme);
  }

  setTheme(theme: string): void {
    let urlTheme = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', urlTheme);
    localStorage.setItem('theme', urlTheme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const listThemes = document.querySelectorAll('.selector');
    listThemes.forEach((link) => {
      link.classList.remove('working');
      const btnTheme = link.getAttribute('data-theme');
      const btnLink = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');
      if (btnLink === currentTheme) {
        link.classList.add('working');
      }
    });
  }
}
