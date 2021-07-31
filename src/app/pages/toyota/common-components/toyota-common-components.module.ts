import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { NgoaiThatComponent } from "./ngoai-that";
import { PictureLibraryComponent } from "./picture-library";
import { CarouselModule } from 'primeng/carousel';
import { TongQuanComponent } from "./tong-quan";
import { FeatureImageComponent } from "./feature-image";
import { NoiThatComponent } from "./noi-that";
import { TinhNangComponent } from "./tinh-nang";
import { ThongSoComponent } from "./thong-so";
import { TableModule } from "primeng/table";

@NgModule({
  declarations: [
    TongQuanComponent,
    PictureLibraryComponent,
    NgoaiThatComponent,
    NoiThatComponent,
    FeatureImageComponent,
    TinhNangComponent,
    ThongSoComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    TableModule
  ],
  exports: [
    TongQuanComponent,
    PictureLibraryComponent,
    NgoaiThatComponent,
    NoiThatComponent,
    FeatureImageComponent,
    TinhNangComponent,
    ThongSoComponent
  ]
})
export class ToyotaCommonComponentModule {}
