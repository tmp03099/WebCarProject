import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentModule } from "src/app/components";
import { TabMenuModule } from 'primeng/tabmenu';
import { ToyotaCommonComponentModule } from "./common-components/toyota-common-components.module";
import { ToyotaComponent } from "./toyota.component";

@NgModule({
  declarations: [
    ToyotaComponent

  ],
  imports: [
    CommonModule,
    ComponentModule,
    TabMenuModule,
    ToyotaCommonComponentModule
  ],
  exports: [
    ToyotaComponent
  ]
})
export class ToyotaModule {}
