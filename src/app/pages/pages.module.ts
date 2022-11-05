import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { GraphicOneComponent } from './graphic-one/graphic-one.component';
import { PagesComponent } from './pages.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DasboardComponent,
    ProgressComponent,
    GraphicOneComponent,
    PagesComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [
    DasboardComponent,
    ProgressComponent,
    GraphicOneComponent,
    PagesComponent,
  ],
})
export class PagesModule {}
