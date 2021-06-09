import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components';
import { HomeModule, IntroductionModule } from './pages';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    HomeModule,
    IntroductionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
