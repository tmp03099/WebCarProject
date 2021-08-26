import { Component, OnInit } from "@angular/core";
import { PhoneService } from "src/app/services";

@Component({
  selector: 'app-side-bar',
  templateUrl: 'side-bar.component.html',
  styleUrls: ['side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public zaloLink = '';
  public messengerLink = '';
  public phoneLink = '';


  constructor(
    private readonly phoneService: PhoneService
  ) {
    this.phoneLink = this.phoneService.phoneLink;
  }

  public ngOnInit() {
  }

}
