import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { InputTextModule } from "primeng/inputtext";
import { MegaMenuModule } from "primeng/megamenu";
import { BodyContextComponent } from "./body-context/body-context.component";
import { CarCollectionComponent } from "./car-collection";
import { DangKyComponent } from "./dang-ky/dang-ky.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { TitleComponent } from "./title/title.component";

@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
    BodyContextComponent,
    FooterComponent,
    CarCollectionComponent,
    DangKyComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    CarouselModule,
    InputTextModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    TitleComponent,
    BodyContextComponent,
    FooterComponent,
    CarCollectionComponent,
    DangKyComponent
  ]
})
export class ComponentModule {}
