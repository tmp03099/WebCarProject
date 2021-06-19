import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentModule } from "src/app/components";
import { BangGiaComponent } from "./bang-gia.component";

@NgModule({
  declarations: [
    BangGiaComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [ BangGiaComponent ]
})
export class BangGiaModule {}
