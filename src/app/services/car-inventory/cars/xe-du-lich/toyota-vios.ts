import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaVios implements CarInfoInterface {
  name   = 'Toyota Vios'
  type   =  CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/vios.png'
  banner = 'assets/img/toyota/vios/banner.jpg'

  models = [
    {
      brand: 'Toyota Vios 1.5E MT',
      lingo: 'Khởi xướng trào lưu',
      price: 478000000,
      colors: [
          {
            label: 'Đỏ - 3G3',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(3R3)-1.png',
            colorCode: 'red'
          },
          {
            label: 'Nâu Vàng - 4R0',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(4R0)-1.png',
            colorCode: '#afa599'
          },
          {
            label: 'Trắng - 040',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(040)-1.png',
            colorCode: 'white'
          },
          {
            label: 'Trắng ngọc trai - 089',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(089)-1.png',
            colorCode: '#d6d6d6'
          },
          {
            label: 'Đen - 218',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(218)-1.png',
            colorCode: 'black'
          },
          {
            label: 'Vàng - 576',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(576)-1.png',
            colorCode: 'yellow'
          },
          {
            label: 'Bạc - 1D6',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(1D6)-1.png',
            colorCode: 'silver'
          }
      ]
     },
     {
       brand: 'Toyota Vios 1.5E CVT',
       price: 531000000

     },
     {
       brand: 'Toyota Vios 1.5G CVT',
       price: 581000000
     },
     {
       brand: 'Toyota Vios 1.5G R-S',
       price: 630000000
     }
  ]
}
