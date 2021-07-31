import { Component, Input } from "@angular/core";
import { ThongSoInterface } from "src/app/services/car-inventory/interfaces/thong-so.interface";

@Component({
  selector: 'app-thong-so',
  templateUrl: 'thong-so.component.html',
  styleUrls: ['thong-so.component.scss']
})
export class ThongSoComponent {
  @Input()
  public values: ThongSoInterface[];
}
