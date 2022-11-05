import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent, PageNoFoundComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
