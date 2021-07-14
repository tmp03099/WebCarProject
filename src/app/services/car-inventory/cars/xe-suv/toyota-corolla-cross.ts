import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaCorollaCross implements CarInfoInterface {
  name = 'Toyota Corolla Cross'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/Corolla Cross.jpg'
  banner = 'assets/img/toyota/corolla-cross/banner.jpg'
  models = [
    {
      brand: 'Toyota Corolla Cross 1.8G',
      price: 720000000,
      colors:[
        {
          label: 'Bạc - 1K0',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/bac-1k0.jpg',
          colorCode: '#4d4845'
        },
        {
          label: 'Xám - 1K3',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/xam-1k3.jpg',
          colorCode: '#818f9c'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/den-218.jpg',
          colorCode: 'black'
        },
        {
          label: 'Đỏ - 3R3',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/do-3r3.jpg',
          colorCode: 'red'
        },
        {
          label: 'Nâu - 4X7',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/nau-4x7.jpg',
          colorCode: '#4d4845'
        },
        {
          label: 'Trắng ngọc trai - 089',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/trangngoctrai-089.jpg',
          colorCode: '#f7f9fa'
        },
        {
          label: 'Xanh - 8X2',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/xanh-8x2.jpg',
          colorCode: '#0c2e7d'
        }
      ]
      },
      {
        brand: 'Toyota Corolla Cross 1.8V',
        price: 82000000
      },
      {
        brand: 'Toyota Corolla Cross 1.8HV',
        price: 910000000
      }
  ]

}
