import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input()
  public text: string = '';

  @Input()
  public img: string  = '../../../assets/img/background01.jpg';

  public backgoundImgStyle = ''

  constructor() {}

  public ngOnInit() {
    this.backgoundImgStyle = `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0,0,0,0.8)),url(${this.img})`;
  }
}
