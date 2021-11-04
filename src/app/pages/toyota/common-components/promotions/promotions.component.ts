import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-promotions',
  templateUrl: 'promotions.component.html',
  styleUrls: ['promotions.component.scss']
})
export class PromotionsComponent {

  @Input()
  public header = "this is header";

  @Input()
  public promotions: string[] = [];

}
