import { NgModule } from '@angular/core';
import { ComponentModule } from 'src/app/components';
import { IntroductionComponent } from './introduction.component';

@NgModule({
  declarations: [
    IntroductionComponent
  ],
  imports: [ ComponentModule ],
  exports: [ IntroductionComponent ]
})
export class IntroductionModule {}
