import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentModule } from "src/app/components";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [ HomeComponent ]
})
export class HomeModule {}
