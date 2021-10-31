import { Component, OnInit } from "@angular/core";
import { PhoneService } from "src/app/services";

@Component({
  selector: 'app-side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrls: ['side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public zaloLink = 'https://zalo.me/0987777529';
  public dangKyLaiThuLink = 'mua-xe/lai-thu';
  public phoneLink = '';
  public messengerLink = 'https://www.facebook.com/toyotaangiang0987777529';

  constructor(
    private readonly phoneService: PhoneService
  ) {
    this.phoneLink = this.phoneService.phoneLink;
  }

  public ngOnInit() {
  }

}
