import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components';
import { BangGiaModule, HomeModule, IntroductionModule } from './pages';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TraGopComponent } from './pages/tra-gop/tra-gop.component';
import { KhuyenMaiComponent } from './pages/khuyen-mai/khuyen-mai.component';
import { XeQuaSuDungComponent } from './pages/xe-qua-su-dung/xe-qua-su-dung.component';
import { TinTucComponent } from './pages/tin-tuc/tin-tuc.component';
import { LienHeComponent } from './pages/lien-he/lien-he.component';
import { ToyotaModule } from './pages/toyota/toyota.module';

@NgModule({
  declarations: [
    AppComponent,
    TraGopComponent,
    KhuyenMaiComponent,
    XeQuaSuDungComponent,
    TinTucComponent,
    LienHeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    HomeModule,
    IntroductionModule,
    BangGiaModule,
    FontAwesomeModule,
    ToyotaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
