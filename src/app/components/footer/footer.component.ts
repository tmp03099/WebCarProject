import { Component, OnInit } from '@angular/core';
import { faCar, faCaretRight, faEnvelope, faMapSigns, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public directionIcon = faMapSigns;
  public phoneIcon = faPhone;
  public mailIcon = faEnvelope;
  public carImage = faCar;
  public faCaretRight = faCaretRight;

  constructor() { }

  ngOnInit(): void {
  }

}
