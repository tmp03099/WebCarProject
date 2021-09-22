import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { CovidComponent } from "./covid/covid.component";
import { ViosUuDaiComponent } from "./vios-uu-dai/vios-uu-dai.component";


@NgModule({
  declarations: [
    ViosUuDaiComponent,
    CovidComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TableModule
  ],
  exports: [
    ViosUuDaiComponent,
    CovidComponent
  ]
})
export class BaiVietModule {}
