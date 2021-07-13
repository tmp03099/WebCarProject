import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";

export class ToyotaYaris implements CarInfoInterface {
  name = 'Toyota Yaris'
  type = CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/yaris.png'
  banner = 'assets/img/toyota/yaris/banner.jpg'
  models: CarModelInfoInterface[] = [
    {
      brand: 'Toyota Yaris 1.5G CVT',
      price: 668000000,
      lingo: 'Sành điệu xuống phố',
      seats: 5,
      type: 'Hatchback',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động vô cấp'],
      colors: [
        {
          label: 'Xanh - 8W9',
          image: '/assets/img/toyota/yaris/colors/8W9_CYAN-METALLIC-1.png',
          colorCode: 'blue'
        },
        {
          label: 'Xám - 1G3',
          image: '/assets/img/toyota/yaris/colors/1G3_GRAY-1.png',
          colorCode: 'gray'
        },
        {
          label: 'Trắng- 040',
          image: '/assets/img/toyota/yaris/colors/040_SUPER-WHITE-1.png',
          colorCode: 'white'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/yaris/colors/218_ATTITUDE-BLACK-1.png',
          colorCode: 'black'
        },
        {
          label: 'Cam - 4R8',
          image: '/assets/img/toyota/yaris/colors/4R8_ORANGE-1.png',
          colorCode: 'orange'
        },
        {
          label: 'Vàng - 6W2',
          image: '/assets/img/toyota/yaris/colors/6W2_YELLOW-1.png',
          colorCode: 'yellow'
        },
        {
          label: 'Bạc - 1D4',
          image: '/assets/img/toyota/yaris/colors/1D4_SILVER-1.png',
          colorCode: 'silver'
        },
        {
          label: 'Đỏ - 3R3',
          image: '/assets/img/toyota/yaris/colors/3R3_RED-1.png',
          colorCode: 'red'
        }
      ]
     }
  ]
}
