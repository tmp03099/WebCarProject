import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BangGiaComponent, HomeComponent, IntroductionComponent } from './pages';

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
