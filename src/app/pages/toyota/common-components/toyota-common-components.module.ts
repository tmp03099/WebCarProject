import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { NgoaiThatComponent } from "./ngoai-that";
import { PictureLibraryComponent } from "./picture-library";
import { CarouselModule } from 'primeng/carousel';
import { TongQuanComponent } from "./tong-quan";
import { FeatureImageComponent } from "./feature-image";

@NgModule({
  declarations: [
    TongQuanComponent,
    PictureLibraryComponent,
    NgoaiThatComponent,
    FeatureImageComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule
  ],
  exports: [
    TongQuanComponent,
    PictureLibraryComponent,
    NgoaiThatComponent,
    FeatureImageComponent
  ]
})
export class ToyotaCommonComponentModule {}
