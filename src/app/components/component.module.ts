import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { CarouselModule } from "primeng/carousel";
import { InputTextModule } from "primeng/inputtext";
import { MegaMenuModule } from "primeng/megamenu";
import { BodyContextComponent } from "./body-context/body-context.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { TitleComponent } from "./title/title.component";

@NgModule({
  declarations: [
    HeaderComponent,
    TitleComponent,
    BodyContextComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    MegaMenuModule,
    CarouselModule,
    InputTextModule,
  ],
  exports: [
    HeaderComponent,
    TitleComponent,
    BodyContextComponent,
    FooterComponent
  ]
})
export class ComponentModule {}
