import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaCorollaAltis implements CarInfoInterface {
  name = 'Toyota Corolla Altis'
  type = CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/corolla altis.png'
  banner = 'assets/img/toyota/altis/banner.jpg'
  models = [
    {
      brand: 'Toyota Corolla Altis 1.8E CVT',
      price: 733000000,
      colors: [
        {
          label: 'Trắng ngọc trai - 070',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/WHILE-070-2.png',
          colorCode: '#f7f9fa'
        },
        {
          label: 'Đỏ - 3R3',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/Đỏ-3R3-2.png',
          colorCode: '#841b23'
        },
        {
          label: 'Đen - 218',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/BLACK-218-2.png',
          colorCode: 'black'
        },
        {
          label: 'Nâu - 4W9',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/BROWN-4W9-2.png',
          colorCode: '#1f1a1a'
        },
        {
          label: 'Trắng - 040',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/WHILE-040-2.png',
          colorCode: 'white'
        }
        
      ]
     },
     {
       brand: 'Toyota Corolla Altis 1.8G CVT',
       price: 763000000
     }
  ]
}
