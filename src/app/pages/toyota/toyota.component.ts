
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "primeng/api";
import { HeaderComponent } from "src/app/components";
import { CarInfoInterface, CarInventoryService, CarModelInfoInterface, PhoneService } from "src/app/services";

@Component({
  selector: 'app-toyota',
  templateUrl: 'toyota.component.html',
  styleUrls: ['toyota.component.scss']
})
export class ToyotaComponent implements OnInit {

  public carUri: string;

  public menu: MenuItem[] = [];

  public carInfo: CarInfoInterface;
  public displayingModel: CarModelInfoInterface;
  public otherModels: CarModelInfoInterface[] = [];
  public banner: string;

  public pictureLibrary: string[] = [];

  @ViewChild('tongQuan')
  public tongQuanRef: ElementRef;

  @ViewChild('ngoaiThat')
  public ngoaiThatRef: ElementRef;

  @ViewChild('noiThat')
  public noiThatRef: ElementRef;

  @ViewChild('tinhNang')
  public tinhNangRef: ElementRef;

  @ViewChild('thongSo')
  public thongSoRef: ElementRef;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly carInventoryService: CarInventoryService
  ) {}

  public ngOnInit() {
    console.log('ngOnInit');

    this.route.paramMap.subscribe(paramMap => {
      console.log('change');

      this.carUri = paramMap.get('car-model')!!;
      console.log(this.carUri);

      this.otherModels = [];
      this.carInfo = this.carInventoryService.getCarFromUri(this.carUri)!!;
      this.banner = this.carInfo.banner!!;
      if (this.carInfo) {
        this.carInfo.models.forEach((model) => {
          if (model.link!!.indexOf(this.carUri) >= 0) {
            this.displayingModel = model;
          } else {
            this.otherModels.push(model);
          }
        });
      }

      if (this.displayingModel.library) {
        this.pictureLibrary = this.displayingModel.library;
      }

      this.menu = [];
      this.menu.push({label: 'TỔNG QUAN', command: () => {
        this.tongQuanRef.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }});

      if (this.displayingModel.ngoaiThat) {
        this.menu.push({label: 'NGOẠI THẤT', command: () => {
          this.ngoaiThatRef.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }});
      }

      if (this.displayingModel.noiThat) {
        this.menu.push({label: 'NỘI THẤT', command: () => {
          this.noiThatRef.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }});
      }

      if (this.displayingModel.tinhNang) {
        this.menu.push({label: 'TÍNH NĂNG', command: () => {
          this.tinhNangRef.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }});
      }

      if (this.displayingModel.thongSo) {
        this.menu.push({label: 'THÔNG SỐ', command: () => {
          this.thongSoRef.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }});
      }
    });
  }
}
