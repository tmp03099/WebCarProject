import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentModule } from "src/app/components";
import { AvanzaComponent } from "./avanza/avanza.component";
import { CamryComponent } from "./camry/camry.component";
import { CorollaAltisComponent } from "./corolla-altis/corolla-altis.component";
import { FortunerComponent } from "./fortuner/fortuner.component";
import { HiaceComponent } from "./hiace/hiace.component";
import { HiluxComponent } from "./hilux/hilux.component";
import { InnovaComponent } from "./innova/innova.component";
import { LandCruiserComponent } from "./land-cruiser/land-cruiser.component";
import { RushComponent } from "./rush/rush.component";
import { ViosComponent } from "./vios/vios.component";
import { WigoComponent } from "./wigo/wigo.component";
import { YarisComponent } from "./yaris/yaris.component";
import { CorollaCrossComponent } from './corolla-cross/corolla-cross.component';
import { LandPradoComponent } from './land-prado/land-prado.component';

@NgModule({
  declarations: [
    ViosComponent,
    CamryComponent,
    CorollaAltisComponent,
    WigoComponent,
    YarisComponent,
    LandCruiserComponent,
    RushComponent,
    FortunerComponent,
    InnovaComponent,
    AvanzaComponent,
    HiaceComponent,
    HiluxComponent,
    CorollaCrossComponent,
    LandPradoComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    ViosComponent,
    CamryComponent,
    CorollaAltisComponent,
    WigoComponent,
    YarisComponent,
    LandCruiserComponent,
    RushComponent,
    FortunerComponent,
    InnovaComponent,
    AvanzaComponent,
    HiaceComponent,
    HiluxComponent
  ]
})
export class ToyotaModule {}
