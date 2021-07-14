import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaRush implements CarInfoInterface {
  name = 'Toyota Rush'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/Rush.png'
  models = [
    {
      brand: 'Toyota Rush 1.5 AT',
      price: 634000000,
      colors: [
        {
          label: 'Trắng - W09',
          image: '/assets/img/toyota/rush/colors/Trang-2.png',
          colorCode: 'white'
        },
        {
          label: 'Bạc - 1E7 ',
          image: '/assets/img/toyota/rush/colors/Bac-2.png',
          colorCode: '#e8e8e8'
        },
        {
          label: 'Đen - X12',
          image: '/assets/img/toyota/rush/colors/Den-2.png',
          colorCode: 'black'
        },
        {
          label: 'Đỏ - 3Q3',
          image: '/assets/img/toyota/rush/colors/Do-2.png',
          colorCode: '#401719'
        },
        {
          label: 'Đồng - 4T3',
          image: '/assets/img/toyota/rush/colors/Dong-4t3.png',
          colorCode: '#484536'
        },
        {
          label: 'Nâu - R54',
          image: '/assets/img/toyota/rush/colors/Nau-2.png',
          colorCode: '#421f2b'
        }
        
      ]
    }
  ]
}
