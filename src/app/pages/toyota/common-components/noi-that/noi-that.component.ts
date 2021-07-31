import { Component, Input } from "@angular/core";
import { CarNgoaiThatInterface } from "src/app/services";

@Component({
  selector: 'app-noi-that',
  templateUrl: 'noi-that.component.html',
  styleUrls: ['noi-that.component.scss']
})
export class NoiThatComponent {
  @Input()
  public noiThat: CarNgoaiThatInterface;

  public get backgoundImage() {
    return `url("${this.noiThat.backgroundImage}")`
  }

  public get slogan() {
    return this.noiThat.label
  }
}
