import { Component, Input } from "@angular/core";
import { TinhNangInterface } from "src/app/services";

@Component({
  selector: 'app-tinh-nang',
  templateUrl: 'tinh-nang.component.html',
  styleUrls: ['tinh-nang.component.scss']
})
export class TinhNangComponent {
  @Input()
  public values: TinhNangInterface[] = []


}

