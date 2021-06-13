import { Component, OnInit } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { ModelCarInterface } from 'src/app/interfaces';


@Component({
  selector: 'app-body-context',
  templateUrl: './body-context.component.html',
  styleUrls: ['./body-context.component.scss']
})
export class BodyContextComponent implements OnInit {

  public faCar = faCar;

  images = [
    "assets/img/banners/Product-website-01.jpg",
    "assets/img/banners/TOP-BANNER-compress.jpg"
  ]

  model5SeatsCars: ModelCarInterface[] = [
    {
      imageSrc: 'assets/img/cars/corolla altis.png',
      name: 'TOYOTA VIOS',
      price: '478.000.000'
    },
    {
      imageSrc: 'assets/img/cars/camry.png',
      name: 'TOYOTA CAMRY',
      price: '1.029.000.000'
    },
    {
      imageSrc: 'assets/img/cars/vios.png',
      name: 'TOYOTA COROLLA ALTIS',
      price: '733.000.000'
    },
    {
      imageSrc: 'assets/img/cars/wigo.png',
      name: 'TOYOTA WIGO',
      price: '352.000.000'
    },
    {
      imageSrc: 'assets/img/cars/yaris.png',
      name: 'TOYOTA YARIS',
      price: '668.000.000'
    }
  ]

  modelSUVCars: ModelCarInterface[] = [
    {
      imageSrc: 'assets/img/cars/Rush.png',
      name: 'TOYOTA RUSH',
      price: '478.000.000'
    },
    {
      imageSrc: 'assets/img/cars/Fortuner.png',
      name: 'TOYOTA FORTUNER',
      price: '1.029.000.000'
    },
    {
      imageSrc: 'assets/img/cars/Corolla Cross.jpg',
      name: 'TOYOTA COROLLA CROSS',
      price: '733.000.000'
    },
    {
      imageSrc: 'assets/img/cars/Land Cruiser Prado VX.png',
      name: 'TOYOTA LAND CRUISER PRADO VX',
      price: '352.000.000'
    },
    {
      imageSrc: 'assets/img/cars/Land Cruiser.png',
      name: 'TOYOTA LAND CRUISER',
      price: '352.000.000'
    }
  ]

  model16SeatsCars: ModelCarInterface[] = [
    {
      imageSrc: 'assets/img/cars/innova.png',
      name: 'TOYOTA INNOVA',
      price: '478.000.000'
    },
    {
      imageSrc: 'assets/img/cars/avanza.png',
      name: 'TOYOTA AVANZA',
      price: '1.029.000.000'
    },
    {
      imageSrc: 'assets/img/cars/alphard luxury.png',
      name: 'TOYOTA ALPHARD LUXURY',
      price: '733.000.000'
    }
  ]

  modelTrucksCars: ModelCarInterface[] = [
    {
      imageSrc: 'assets/img/cars/hilux.png',
      name: 'TOYOTA HILUX',
      price: '478.000.000'
    },
    {
      imageSrc: 'assets/img/cars/hiace.jpg',
      name: 'TOYOTA HIACE',
      price: '1.029.000.000'
    },
    {
      imageSrc: 'assets/img/cars/Granvia Premium package.png',
      name: 'GRANVIA PREMIUM PACKAGE',
      price: '733.000.000'
    }
  ]




  constructor()  { }

  ngOnInit(): void {
  }
}
