import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
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

  constructor(
    private readonly router: Router //add router for navigate
  ) {}

  public onClick(car: ModelCarInterface) {
    this.router.navigate([car.link]); //add router for navigate
  } 

}
