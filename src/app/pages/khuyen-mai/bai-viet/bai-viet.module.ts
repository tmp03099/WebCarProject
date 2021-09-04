import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { ViosUuDaiComponent } from "./vios-uu-dai/vios-uu-dai.component";

@NgModule({
  declarations: [
    ViosUuDaiComponent
  ],
  imports: [
    FormsModule,
    TableModule
  ],
  exports: [
    ViosUuDaiComponent
  ]
})
export class BaiVietModule {}
