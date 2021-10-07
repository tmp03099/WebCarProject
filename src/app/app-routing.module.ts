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
import { ViosUuDaiComponent } from './pages/khuyen-mai/bai-viet';
import { AltisUuDaiComponent } from './pages/khuyen-mai/bai-viet/altis-uu-dai/altis-uu-dai.component';
import { CovidComponent } from './pages/khuyen-mai/bai-viet/covid/covid.component';
import { DanhGiaViosComponent } from './pages/khuyen-mai/bai-viet/danh-gia-vios/danh-gia-vios.component';
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
    path: 'khuyen-mai',
    children: [
      {
        path: '', component: KhuyenMaiComponent
      },
      {
        path: 'an-tam-o-nha-nhan-qua-uu-dai', component: ViosUuDaiComponent
      },
      {
        path: 'di-chuyen-hieu-qua-mua-covid-19', component: CovidComponent
      },
      {
        path: 'tung-bung-uu-dai-van-loi-tri-an', component: AltisUuDaiComponent
      },
      {
        path: 'danh-gia-xe-vios-2021', component: DanhGiaViosComponent
      }
    ]
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
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
