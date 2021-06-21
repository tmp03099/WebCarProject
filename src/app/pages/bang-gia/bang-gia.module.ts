import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ComponentModule } from "src/app/components";
import { BangGiaComponent } from "./bang-gia.component";


@NgModule({
  declarations: [
    BangGiaComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ButtonModule //to show button
  ],
  exports: [ BangGiaComponent ]
})
export class BangGiaModule {}

