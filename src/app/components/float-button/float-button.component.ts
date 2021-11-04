import { Component, Input, OnInit } from "@angular/core";
import { PhoneService } from "src/app/services";

@Component({
  selector: 'app-float-button',
  templateUrl: 'float-button.component.html',
  styleUrls: ['float-button.component.scss']
})
export class FloatButtonComponent implements OnInit {

  public leftButtonLabel = 'Zalo';
  public leftButtonLink = 'https://zalo.me/0987777529';

  public rightButtonLabel = '0987-777-529';
  public rightButtonLink = '';

  constructor(
    private readonly phoneService: PhoneService
  ) {}

  public ngOnInit() {
    this.rightButtonLink = this.phoneService.phoneLink;
  }
}
