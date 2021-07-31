import { Component, Input } from "@angular/core";
import { CarNgoaiThatInterface } from "src/app/services";

@Component({
  selector: 'app-ngoai-that',
  templateUrl: 'ngoai-that.component.html',
  styleUrls: ['ngoai-that.component.scss']
})
export class NgoaiThatComponent {
  @Input()
  public ngoaiThat: CarNgoaiThatInterface;
}
