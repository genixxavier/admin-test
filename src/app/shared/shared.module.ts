import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumbsComponent, SiderbarComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbsComponent, SiderbarComponent, HeaderComponent],
})
export class SharedModule {}
