import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { ComponentModule } from "src/app/components";
import { BangGiaComponent } from "./bang-gia.component";
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    BangGiaComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    ButtonModule,
    TableModule
  ],
  exports: [ BangGiaComponent ]
})
export class BangGiaModule {}

