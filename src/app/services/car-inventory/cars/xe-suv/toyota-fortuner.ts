import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaFortuner implements CarInfoInterface {
  name = 'Toyota Fortuner'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/fortuner.png'
  banner = 'assets/img/toyota/fortuner/banner.jpg'
  models = [
    {
      brand: 'Toyota Fortuner 2.4AT 4x2',
      price: 1088000000,
      seats: 7,
      type: 'SUV',
      fuelType: 'Dầu',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tự động 6 cấp'],
      library:[
        '/assets/img/toyota/fortuner/library/1i4ixg.jpg',
        '/assets/img/toyota/fortuner/library/jgf1ww.jpg',
        '/assets/img/toyota/fortuner/library/xxgjfk.jpg'
      ],
      colors: [
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Den.png',
          colorCode: 'black'
        },
        {
          label: 'Trắng ngọc trai - 089',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Trang.png',
          colorCode: '#f7f9fa'
        },
        {
          label: 'Bạc - 1D6',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Bac.png',
          colorCode: '#c4c4c4'
        },
        {
          label: 'Đồng - 4V8',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Dong.png',
          colorCode: '#908b85'
        },
        {
          label: 'Nâu - 4W9',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Nau.png',
          colorCode: '#513e3a'
        }
      ]
    },
    {
      brand: 'Toyota Fortuner 2.4MT 4x2',
      price: 995000000
    },
    {
      brand: 'Toyota Fortuner 2.7AT 4x2',
      price: 1130000000
    },
    {
      brand: 'Toyota Fortuner 2.7AT 4x4',
      price: 1230000000
    },
    {
      brand: 'Toyota Fortuner 2.8AT 4x4',
      price: 1388000000
    },
    {
      brand: 'Toyota Fortuner Legender 2.4AT 4X2',
      price: 1195000000
    },
    {
      brand: 'Toyota Fortuner Legender 2.8AT 4X4',
      price: 1434000000
    }
  ]

}
