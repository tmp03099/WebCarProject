import { Component, Input } from "@angular/core";
import { ModelCarInterface } from "src/app/interfaces";

@Component({
  selector: 'app-car-collection',
  templateUrl: './car-collection.component.html',
  styleUrls: ['./car-collection.component.scss']
})
export class CarCollectionComponent {
  @Input()
  public title: string = '';

  @Input()
  public collection: ModelCarInterface[] = []

}
