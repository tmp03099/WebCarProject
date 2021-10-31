import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { SlideMenuModule } from "primeng/slidemenu";
import { MegaMenuModule } from "primeng/megamenu";
import { BannerComponent } from "./banner/banner.component";
import { BodyContextComponent } from "./body-context/body-context.component";
import { CarCollectionComponent } from "./car-collection";
import { DangKyComponent } from "./dang-ky/dang-ky.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { PopupMenuComponent } from "./popup-menu/popup-menu.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { FloatButtonComponent } from "./float-button/float-button.component";

@NgModule({
  declarations: [
    HeaderComponent,
    MainMenuComponent,
    PopupMenuComponent,
    BodyContextComponent,
    FooterComponent,
    SideBarComponent,
    CarCollectionComponent,
    DangKyComponent,
    BannerComponent,
    FloatButtonComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    SlideMenuModule,
    CarouselModule,
    InputTextModule,
    DropdownModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    MainMenuComponent,
    PopupMenuComponent,
    BodyContextComponent,
    SideBarComponent,
    FooterComponent,
    CarCollectionComponent,
    DangKyComponent,
    BannerComponent,
    FloatButtonComponent
  ]
})
export class ComponentModule {}
