import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components';
import { BangGiaModule, HomeModule, IntroductionModule, LaiThuComponent } from './pages';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TraGopComponent } from './pages/tra-gop/tra-gop.component';
import { XeQuaSuDungComponent } from './pages/xe-qua-su-dung/xe-qua-su-dung.component';
import { TinTucComponent } from './pages/tin-tuc/tin-tuc.component';
import { LienHeComponent } from './pages/lien-he/lien-he.component';
import { ToyotaModule } from './pages/toyota/toyota.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DuToanChiPhiComponent } from './pages/du-toan-chi-phi/du-toan-chi-phi.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BaoGiaComponent } from './pages/bao-gia';
import { ChiPhiService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { KhuyenMaiModule } from './pages/khuyen-mai/khuyen-mai.module';

@NgModule({
  declarations: [
    AppComponent,
    TraGopComponent,
    XeQuaSuDungComponent,
    TinTucComponent,
    LienHeComponent,
    LaiThuComponent,
    BaoGiaComponent,
    DuToanChiPhiComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentModule,
    HomeModule,
    IntroductionModule,
    BangGiaModule,
    FontAwesomeModule,
    ToyotaModule,
    KhuyenMaiModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [ ChiPhiService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
