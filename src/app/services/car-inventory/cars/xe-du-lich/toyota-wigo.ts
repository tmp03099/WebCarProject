import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";

export class ToyotaWigo implements CarInfoInterface {
  name = 'Toyota Wigo'
  type = CarTypeEnum.XeDuLich
  banner = 'assets/img/toyota/wigo/banner.jpg'
  imgSrc = 'assets/img/cars/wigo.png'

  models: CarModelInfoInterface[] = [
    {
      brand: 'Toyota Wigo 1.2G MT',
      price: 352000000,
      lingo: 'Gọn nhỏ lướt phố',
      seats: 5,
      type: 'Hatchback',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số sàn 5 cấp'],
      promotion: `Nhận ngay gói Bảo hành 5 năm/150.000 km.
                 Chương trình áp dụng từ 7/6 đến 31/12/2021`,
      colors: [
        {
          label: 'Cam R71',
          image: '/assets/img/toyota/wigo/colors/5MT/R71_ORANGE-ME-2.png',
          colorCode: 'orange'
        },
        {
          label: 'Trắng W09',
          image: '/assets/img/toyota/wigo/colors/5MT/W09_WHITE-2.png',
          colorCode: 'white'
        },
        {
          label: 'Đỏ R40',
          image: '/assets/img/toyota/wigo/colors/5MT/R40_RED-2.png',
          colorCode: 'red'
        },
        {
          label: 'Đen X13',
          image: '/assets/img/toyota/wigo/colors/5MT/X13_BLACK-2.png',
          colorCode: 'black'
        },
        {
          label: 'Xám 1G3',
          image: '/assets/img/toyota/wigo/colors/5MT/1G3_GRAY-ME-2.png',
          colorCode: 'gray'
        },
        {
          label: 'Bạc S28',
          image: '/assets/img/toyota/wigo/colors/5MT/S28_SILVER-ME-2.png',
          colorCode: 'silver'
        },
        {
          label: 'Vàng Y13',
          image: '/assets/img/toyota/wigo/colors/5MT/Y13_YELLOW-SE-2.png',
          colorCode: 'yellow'
        }
      ]
     },
     {
       brand: 'Toyota Wigo 1.2G AT',
       price: 385000000
     }
  ]

}
