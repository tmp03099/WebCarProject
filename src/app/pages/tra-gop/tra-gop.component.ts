import { Component, OnInit } from '@angular/core';
import { CarInventoryService } from 'src/app/services';

@Component({
  selector: 'app-tra-gop',
  templateUrl: './tra-gop.component.html',
  styleUrls: ['./tra-gop.component.scss']
})
export class TraGopComponent implements OnInit {

  public carList: string[] = [];
  public selectedCar: string;

  private readonly defaultSelected = "Dòng xe cần mua";

  constructor(
    private readonly carInventoryService: CarInventoryService,
  ) { }

  ngOnInit(): void {
    this.carList.push(this.defaultSelected);

    this.carList = this.carList.concat(this.carInventoryService.getCarList());
  }

  public contact() {
  }

}
