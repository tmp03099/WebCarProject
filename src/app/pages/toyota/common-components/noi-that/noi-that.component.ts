import { Component, Input } from "@angular/core";
import { CarNgoaiThatInterface } from "src/app/services";

@Component({
  selector: 'app-noi-that',
  templateUrl: 'noi-that.component.html',
  styleUrls: ['noi-that.component.scss']
})
export class NoiThatComponent {
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  @Input()
  public noiThat: CarNgoaiThatInterface;

  public get backgoundImage() {
    return `url("${this.noiThat.backgroundImage}")`
  }

  public get slogan() {
    return this.noiThat.label
  }
}
