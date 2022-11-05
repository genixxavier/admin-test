import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  progressOne = 5;
  progressTwo = 10;

  get getProgressOne() {
    return `${this.progressOne}%`;
  }

  get getProgresstwo() {
    return `${this.progressTwo}%`;
  }
}
