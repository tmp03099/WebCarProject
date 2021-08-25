import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { InputTextModule } from "primeng/inputtext";
import { MegaMenuModule } from "primeng/megamenu";
import { BannerComponent } from "./banner/banner.component";
import { BodyContextComponent } from "./body-context/body-context.component";
import { CarCollectionComponent } from "./car-collection";
import { DangKyComponent } from "./dang-ky/dang-ky.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { SideBarComponent } from "./side-bar/side-bar.component";

@NgModule({
  declarations: [
    HeaderComponent,
    MainMenuComponent,
    BodyContextComponent,
    FooterComponent,
    SideBarComponent,
    CarCollectionComponent,
    DangKyComponent,
    BannerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    CarouselModule,
    InputTextModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    MainMenuComponent,
    BodyContextComponent,
    SideBarComponent,
    FooterComponent,
    CarCollectionComponent,
    DangKyComponent,
    BannerComponent
  ]
})
export class ComponentModule {}
