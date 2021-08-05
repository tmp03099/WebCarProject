import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  BangGiaComponent,
  DuToanChiPhiComponent,
  HomeComponent,
  IntroductionComponent,
  KhuyenMaiComponent,
  LaiThuComponent,
  LienHeComponent,
  TinTucComponent,
  TraGopComponent,
  XeQuaSuDungComponent
} from './pages';
import { BaoGiaComponent } from './pages/bao-gia';
import { ToyotaComponent } from './pages/toyota/toyota.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'introduction', component: IntroductionComponent
  },
  {
    path: 'xe-toyota/:car-model', component: ToyotaComponent,
  },
  {
    path: 'bang-gia', component: BangGiaComponent
  },
  {
    path: 'bao-gia', component: BaoGiaComponent
  },
  {
    path: 'mua-xe',
    children: [
      {
        path: 'lai-thu', component: LaiThuComponent
      },
      {
        path: 'tra-gop', component: TraGopComponent
      }
    ]
  },
  {
    path: 'xe-qua-su-dung', component: XeQuaSuDungComponent
  },
  {
    path: 'khuyen-mai', component: KhuyenMaiComponent
  },
  {
    path: 'tin-tuc', component: TinTucComponent
  },
  {
    path: 'lien-he', component: LienHeComponent
  },
  {
    path: 'du-toan-chi-phi', component: DuToanChiPhiComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
