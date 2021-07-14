import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaLandCruiserPrado implements CarInfoInterface {
  name = 'Toyota Land Cruiser Prado'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/land-cruiser-prado-VX.png'
  banner = 'assets/img/toyota/land-cruiser-prado/banner.jpg'
  models = [
    {
      brand: 'Toyota Land Cruiser Prado VX',
      price: 2340000000,
      colors:[
        {
          label: 'Đỏ - 3R3',
          image: '/assets/img/toyota/land-cruiser-prado/colors/Do-3R3-2.png',
          colorCode: '#6F1A1E'
        },
        {
          label: 'Bạc - 1F7',
          image: '/assets/img/toyota/land-cruiser-prado/colors/Bac-1F7-2.png',
          colorCode: '#e8e8e8'
        },
        {
          label: 'Đen - 202',
          image: '/assets/img/toyota/land-cruiser-prado/colors/Den-202-2.png',
          colorCode: 'black'
        },
        
        {
          label: 'Đồng - 4V8',
          image: '/assets/img/toyota/land-cruiser-prado/colors/Dong-4V8-2.png',
          colorCode: '#d0c8c0'
        },
        {
          label: 'Nâu - 4X4',
          image: '/assets/img/toyota/land-cruiser-prado/colors/Nau-4X4-2.png',
          colorCode: '#42342d'
        },
        {
          label: 'Trắng - 070',
          image: '/assets/img/toyota/land-cruiser-prado/colors/Trang-070-2.png',
          colorCode: 'white'
        },
        {
          label: 'Xám - 1G3',
          image: '/assets/img/toyota/land-cruiser-prado/colors/Xam-1G3-2.png',
          colorCode: '#3a4346'
        },
        {
          label: 'Xanh đen - 221',
          image: '/assets/img/toyota/land-cruiser-prado/colors/Xanh Den-221-2.png',
          colorCode: '#0f212b'
        }
      ]
    }
  ]
}
