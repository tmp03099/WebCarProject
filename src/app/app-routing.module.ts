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
import { AvanzaComponent } from './pages/toyota/avanza/avanza.component';
import { CamryComponent } from './pages/toyota/camry/camry.component';
import { CorollaAltisComponent } from './pages/toyota/corolla-altis/corolla-altis.component';
import { CorollaCrossComponent } from './pages/toyota/corolla-cross/corolla-cross.component';
import { FortunerComponent } from './pages/toyota/fortuner/fortuner.component';
import { HiaceComponent } from './pages/toyota/hiace/hiace.component';
import { HiluxComponent } from './pages/toyota/hilux/hilux.component';
import { InnovaComponent } from './pages/toyota/innova/innova.component';
import { LandCruiserComponent } from './pages/toyota/land-cruiser/land-cruiser.component';
import { LandPradoComponent } from './pages/toyota/land-prado/land-prado.component';
import { RushComponent } from './pages/toyota/rush/rush.component';
import { ViosComponent } from './pages/toyota/vios/vios.component';
import { WigoComponent } from './pages/toyota/wigo/wigo.component';
import { YarisComponent } from './pages/toyota/yaris/yaris.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'introduction', component: IntroductionComponent
  },
  {
    path: 'xe-toyota',
    children: [
      {
        path: 'vios', component: ViosComponent
      },
      {
        path: 'camry', component: CamryComponent
      },
      {
        path: 'avanza', component: AvanzaComponent
      },
      {
        path: 'corolla-altis', component: CorollaAltisComponent
      },
      {
        path: 'fortuner', component: FortunerComponent
      },
      {
        path: 'hiace', component: HiaceComponent
      },
      {
        path: 'hilux', component: HiluxComponent
      },
      {
        path: 'innova', component: InnovaComponent
      },
      {
        path: 'land-cruiser', component: LandCruiserComponent
      },
      {
        path: 'rush', component: RushComponent
      },
      {
        path: 'wigo', component: WigoComponent
      },
      {
        path: 'yaris', component: YarisComponent
      },
      {
        path: 'corolla-cross', component: CorollaCrossComponent
      },
      {
        path: 'land-prado', component: LandPradoComponent
      }
    ]
  },
  {
    path: 'bang-gia', component: BangGiaComponent
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
