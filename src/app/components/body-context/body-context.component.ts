import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCar, faGift, faGrinStars, faMoneyCheckAlt, faPhoneSquare, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { ModelCarInterface } from 'src/app/interfaces';
import { CarInventoryService, CarTypeEnum, ChiPhiService, EmailService, PhoneService } from 'src/app/services';


@Component({
  selector: 'app-body-context',
  templateUrl: './body-context.component.html',
  styleUrls: ['./body-context.component.scss']
})
export class BodyContextComponent implements OnInit {

  public faPhone = faPhoneSquare;
  public faMoney = faMoneyCheckAlt;
  public faGift = faGift;
  public faCar = faCar;
  public faFaceStar = faGrinStars;

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

  images = [
    "assets/img/banners/Homebanner2.png",
    "assets/img/banners/Homebanner1.png",
    "assets/img/banners/Homebanner3.png",
    "assets/img/banners/RushBanner.png",
    "assets/img/banners/WigoBanner.png",
    "assets/img/banners/RaizeBanner.png"
  ]

  customerImg = [
    "assets/img/customer/1.png",
    "assets/img/customer/2.png",
    "assets/img/customer/3.png",
    "assets/img/customer/4.png",
    "assets/img/customer/5.png",
    "assets/img/customer/6.png",
    "assets/img/customer/7.png",
    "assets/img/customer/8.png",
    "assets/img/customer/9.png",
    "assets/img/customer/10.png",
    "assets/img/customer/11.png",
    "assets/img/customer/12.png",
    "assets/img/customer/13.png",
    "assets/img/customer/14.png"
  ]

  model5SeatsCars : ModelCarInterface[] = [];
  modelSUVCars    : ModelCarInterface[] = [];
  model16SeatsCars: ModelCarInterface[] = [];
  modelTrucksCars : ModelCarInterface[] = [];

  public phoneLink = '';
  public emailLink = '';

  constructor(
    private readonly router: Router,
    private readonly carInventoryService: CarInventoryService,
    private readonly chiPhiService: ChiPhiService,
    private readonly emailService: EmailService,
    private readonly phoneService: PhoneService
  ) {
    this.phoneLink = this.phoneService.phoneLink;
    this.emailLink = this.emailService.emailLink;
  }

  ngOnInit(): void {
    this.extractCarType(CarTypeEnum.XeDuLich, this.model5SeatsCars);
    this.extractCarType(CarTypeEnum.XeSuv, this.modelSUVCars);
    this.extractCarType(CarTypeEnum.XeChuyenDung, this.model16SeatsCars);
    this.extractCarType(CarTypeEnum.XeBanTai, this.modelTrucksCars);
  }

  public redirect(link: string) {
    console.log(link);
    this.router.navigate([link]);
  }

  public extractCarType(carType: CarTypeEnum, outputList: ModelCarInterface[]) {
    this.carInventoryService.getCarsByType(carType).forEach((car) => {
      outputList.push({
        imageSrc: car.imgSrc!!,
        name: car.name.toUpperCase(),
        link: car.link!!,
        price: this.chiPhiService.formatValue(car.lowestPrice!!)
      });
    });
  }
}
