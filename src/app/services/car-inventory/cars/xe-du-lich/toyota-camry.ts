import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";

export class ToyotaCamry implements CarInfoInterface {
  name   = 'Toyoto Camry'
  type   =  CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/camry.png'
  banner = 'assets/img/toyota/camry/banner.jpg'
  models: CarModelInfoInterface[] =  [
    {
      brand: 'Toyota Camry 2.0G',
      price: 1029000000,
      lingo: 'Beautiful Monster',
      colors: [
        {
          label: 'Đen - 222',
          image: '/assets/img/toyota/camry/colors/black-222.png',
          colorCode: '#221e25'
        },
        {
          label: 'Đỏ - 3T3',
          image: '/assets/img/toyota/camry/colors/red-3T3.png',
          colorCode: '#7a2438'
        },
        {
          label: 'Bạc - 1D4',
          image: '/assets/img/toyota/camry/colors/silver-1D4.png',
          colorCode: 'silver'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/camry/colors/black-218.png',
          colorCode: 'black'
        },
        {
          label: 'Nâu - 4W9',
          image: '/assets/img/toyota/camry/colors/brown-4W9.png',
          colorCode: 'rgb(68 48 47)'
        },
        {
          label: 'Nâu - 4X7',
          image: '/assets/img/toyota/camry/colors/brown-4X7.png',
          colorCode: 'rgb(72, 66, 63)'
        },
        {
          label: 'Trắng ngọc trai - 089',
          image: '/assets/img/toyota/camry/colors/white-089.png',
          colorCode: '#f7f9fa'
        }

      ]
     },
     {
       brand: 'Toyota Camry 2.5Q',
       price: 1235000000,
     }
  ]
}
