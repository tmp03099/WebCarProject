import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaLandCruiser implements CarInfoInterface {
  name = 'Toyota Land Cruiser'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/land-cruiser.png'
  banner = 'assets/img/toyota/land-cruiser/banner.jpg'
  models = [
    {
      brand: 'Toyota Land Cruiser',
      price: 4038000000,
      colors:[
        {
          label: 'Đen - 202',
          image: '/assets/img/toyota/land-cruiser/colors/Den-202.png',
          colorCode: '#171717'
        },
        {
          label: 'Trắng - 070',
          image: '/assets/img/toyota/land-cruiser/colors/Trang-070.png',
          colorCode: 'white'
        },
        {
          label: 'Bạc - 1F7',
          image: '/assets/img/toyota/land-cruiser/colors/Bac-1F7.png',
          colorCode: '#e8e8e8'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/land-cruiser/colors/Den-218.png',
          colorCode: '#050505'
        },
        {
          label: 'Đồng - 4V8',
          image: '/assets/img/toyota/land-cruiser/colors/Dong-4V8.png',
          colorCode: '#b6b3af'
        },
        {
          label: 'Xám - 1G3',
          image: '/assets/img/toyota/land-cruiser/colors/Xam-1G3.png',
          colorCode: '#646464'
        },
        {
          label: 'Xanh - 8X8',
          image: '/assets/img/toyota/land-cruiser/colors/xanh-8X8.png',
          colorCode: '#19222e'
        }
      ]
    }
  ]
}
