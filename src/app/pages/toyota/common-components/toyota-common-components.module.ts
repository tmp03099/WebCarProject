import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { PictureLibraryComponent } from "./picture-library";
import { TongQuanComponent } from "./tong-quan/tong-quan.component";

@NgModule({
  declarations: [
    TongQuanComponent,
    PictureLibraryComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    TongQuanComponent,
    PictureLibraryComponent
  ]
})
export class ToyotaCommonComponentModule {}
