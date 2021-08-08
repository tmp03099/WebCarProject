import { Component, Input } from "@angular/core";
import { CarNgoaiThatInterface } from "src/app/services";

@Component({
  selector: 'app-ngoai-that',
  templateUrl: 'ngoai-that.component.html',
  styleUrls: ['ngoai-that.component.scss']
})
export class NgoaiThatComponent {
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
  public ngoaiThat: CarNgoaiThatInterface;

  public get backgoundImage() {
    return `url("${this.ngoaiThat.backgroundImage}")`
  }

  public get slogan() {
    return this.ngoaiThat.label
  }

}
