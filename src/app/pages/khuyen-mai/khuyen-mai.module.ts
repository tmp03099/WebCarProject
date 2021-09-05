import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentModule } from "src/app/components";
import { BaiVietModule } from "./bai-viet/bai-viet.module";
import { KhuyenMaiComponent } from "./khuyen-mai.component";

@NgModule({
  declarations: [
    KhuyenMaiComponent
  ],
  imports: [
    CommonModule,
    ComponentModule,
    BaiVietModule
  ],
  exports: [
    KhuyenMaiComponent
  ]
})
export class KhuyenMaiModule {}
