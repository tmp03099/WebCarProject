import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BangGiaComponent, HomeComponent, IntroductionComponent, KhuyenMaiComponent, LaiThuComponent, LienHeComponent, TinTucComponent, TraGopComponent, XeQuaSuDungComponent } from './pages';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'introduction', component: IntroductionComponent
  },
  {
    path: 'bang-gia', component: BangGiaComponent
  },
  {
    path: 'mua-xe/lai-thu', component: LaiThuComponent
  },
  {
    path: 'mua-xe/tra-gop', component: TraGopComponent
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
