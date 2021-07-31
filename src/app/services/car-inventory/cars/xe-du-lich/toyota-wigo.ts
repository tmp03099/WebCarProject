import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";

export class ToyotaWigo implements CarInfoInterface {
  name = 'Toyota Wigo'
  type = CarTypeEnum.XeDuLich
  banner = 'assets/img/toyota/wigo/banner.jpg'
  imgSrc = 'assets/img/cars/wigo.png'

  models: CarModelInfoInterface[] = [
    {
      brand: 'Toyota Wigo 5MT',
      price: 352000000,
      lingo: 'Gọn nhỏ lướt phố',
      seats: 5,
      type: 'Hatchback',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số sàn 5 cấp'],
      library: [
        '/assets/img/toyota/wigo/library/1.png',
        '/assets/img/toyota/wigo/library/2.png',
        '/assets/img/toyota/wigo/library/3.png',
        '/assets/img/toyota/wigo/library/4.jpg'
      ],
      promotion: [
        `Nhận ngay gói Bảo hành 5 năm/150.000 km.
        Chương trình áp dụng từ 7/6 đến 31/12/2021`
      ],
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
      ],
      ngoaiThat: {
        label: 'CẢI TIẾN MỚI - TIỆN ÍCH HƠN',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/wigo/ngoai-that/1.png',
        features: [
          {
            image: '/assets/img/toyota/wigo/ngoai-that/2.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/3.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/4.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/5.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/6.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/7.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/8.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/9.png',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'CẢI TIẾN MỚI - TIỆN ÍCH HƠN',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/wigo/noi-that/1.jpg',
        features: [
          {
            image: '/assets/img/toyota/wigo/noi-that/2.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/3.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/4.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/5.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/6.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/7.jpg',
            label: 'test'
          }
        ]
      }
     },
     {
       brand: 'Toyota Wigo 4AT',
       price: 385000000
     }
  ]

}
