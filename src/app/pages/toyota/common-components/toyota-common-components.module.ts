import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { TongQuanComponent } from "./tong-quan/tong-quan.component";

@NgModule({
  declarations: [
    TongQuanComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    TongQuanComponent
  ]
})
export class ToyotaCommonComponentModule {}
