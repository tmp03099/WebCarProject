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
import { FieldsetModule } from "primeng/fieldset";
import { PromotionsComponent } from "./promotions";

@NgModule({
  declarations: [
    TongQuanComponent,
    PictureLibraryComponent,
    NgoaiThatComponent,
    NoiThatComponent,
    FeatureImageComponent,
    TinhNangComponent,
    ThongSoComponent,
    PromotionsComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    TableModule,
    FieldsetModule
  ],
  exports: [
    TongQuanComponent,
    PictureLibraryComponent,
    NgoaiThatComponent,
    NoiThatComponent,
    FeatureImageComponent,
    TinhNangComponent,
    ThongSoComponent,
    PromotionsComponent
  ]
})
export class ToyotaCommonComponentModule {}
