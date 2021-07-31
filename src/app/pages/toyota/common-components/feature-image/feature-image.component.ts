import { Component, Input } from "@angular/core";
import { CarFeatureInterface } from "src/app/services";

@Component({
  selector: 'app-feature-image',
  templateUrl: 'feature-image.component.html',
  styleUrls: ['feature-image.component.scss']
})
export class FeatureImageComponent {
  @Input()
  public feature: CarFeatureInterface
}
