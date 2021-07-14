import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaHilux implements CarInfoInterface {
  name = 'Toyota Hilux'
  type = CarTypeEnum.XeBanTai
  imgSrc = 'assets/img/cars/hilux.png'
  models = [
    {
      brand: 'Toyota HILUX 2.4L 4X2 MT',
      price: 622000000,
      colors: [
        {
          label: 'Cam - 4R8',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-4R8-2.png',
          colorCode: 'orange'
        },
        {
          label: 'Bạc - 1D6',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-1D6-2.png',
          colorCode: 'silver'
        },
        {
          label: 'Xám - 1G3',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-1G3-2.png',
          colorCode: '#646464'
        },
        {
          label: 'Đỏ - 3T6',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-3T6-2.png',
          colorCode: 'red'
        },
        {
          label: 'Trắng - 070',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-070-2.png',
          colorCode: 'white'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-218-2.png',
          colorCode: 'black'
        }
      ]
      },
      {
        brand: 'Toyota HILUX 2.4L 4X2 AT',
        price: 674000000
      },
      {
        brand: 'Toyota HILUX 2.4L 4X4 MT',
        price: 799000000
      },
      {
        brand: 'Toyota HILUX 2.8L 4X4 AT',
        price: 913000000
      }
  ]
}
