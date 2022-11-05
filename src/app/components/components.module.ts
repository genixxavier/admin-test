import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImcrementComponent } from './imcrement/imcrement.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [ImcrementComponent, DonaComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
  exports: [ImcrementComponent, DonaComponent],
})
export class ComponentsModule {}
