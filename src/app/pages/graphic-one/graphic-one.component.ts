import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-graphic-one',
  templateUrl: './graphic-one.component.html',
  styleUrls: ['./graphic-one.component.scss'],
})
export class GraphicOneComponent {
  charData: ChartData<'doughnut'> = {
    labels: ['dogs', 'cats', 'pings'],
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
      },
    ],
  };

  charData2: ChartData<'doughnut'> = {
    labels: ['car', 'bus', 'bike'],
    datasets: [
      {
        data: [200, 100, 100],
        backgroundColor: ['#ff6000', '#36a2eb', '#cc65fe'],
      },
    ],
  };
}
