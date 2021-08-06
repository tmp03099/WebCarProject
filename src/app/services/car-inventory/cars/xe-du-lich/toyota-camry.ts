import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";

export class ToyotaCamry implements CarInfoInterface {
  name   = 'Toyoto Camry'
  type   =  CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/camry.png'
  banner = 'assets/img/toyota/camry/banner.jpg'
  models: CarModelInfoInterface[] =  [
    {
      brand: 'Toyota Camry 2.0G',
      price: 1029000000,
      lingo: 'Beautiful Monster',
      seats: 5,
      type: 'Sedan',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động 6 cấp','Động cơ xăng dung tích 1.998 cc'],
      library:[
        '/assets/img/toyota/camry/library/23ynyb.png',
        '/assets/img/toyota/camry/library/kvxrb4.png',
        '/assets/img/toyota/camry/library/mi0shn.png',
        '/assets/img/toyota/camry/library/nw3avi.png'
      ],
      colors: [
        {
          label: 'Đen - 222',
          image: '/assets/img/toyota/camry/colors/black-222.png',
          colorCode: '#221e25'
        },
        {
          label: 'Đỏ - 3T3',
          image: '/assets/img/toyota/camry/colors/red-3T3.png',
          colorCode: '#7a2438'
        },
        {
          label: 'Bạc - 1D4',
          image: '/assets/img/toyota/camry/colors/silver-1D4.png',
          colorCode: 'silver'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/camry/colors/black-218.png',
          colorCode: 'black'
        },
        {
          label: 'Nâu - 4W9',
          image: '/assets/img/toyota/camry/colors/brown-4W9.png',
          colorCode: 'rgb(68 48 47)'
        },
        {
          label: 'Nâu - 4X7',
          image: '/assets/img/toyota/camry/colors/brown-4X7.png',
          colorCode: 'rgb(72, 66, 63)'
        },
        {
          label: 'Trắng ngọc trai - 089',
          image: '/assets/img/toyota/camry/colors/white-089.png',
          colorCode: '#f7f9fa'
        }
      ],
      ngoaiThat: {
        label: 'NGÔN NGỮ THIẾT KẾ THÔNG MINH GIÀU CẢM XÚC',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/camry/ngoai-that/de0ts0.png',
        features: [
          {
            image: '/assets/img/toyota/camry/ngoai-that/0fxig5.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/ngoai-that/0wvamc.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/ngoai-that/dixt4l.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/ngoai-that/se1qeu.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/ngoai-that/xihrcs.png',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'NỘI THẤT SANG TRỌNG - ĐẲNG CẤP',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/camry/noi-that/m4f133.png',
        features: [
          {
            image: '/assets/img/toyota/camry/noi-that/5z2fux.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/21ntuo.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/bxmcqx.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/ceigm3.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/hh4dpj.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/idrhig.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/pdq5wr.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/ulg5pf.png',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/vdcria.png',
            label: 'test'
          }
        ]
      },
      tinhNang: [
        {
          image: "/assets/img/toyota/camry/tinh-nang/ayt5cx.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/fxpa30.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/hgylir.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/hp4b41.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/ilg3ag.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/ircsls.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/jf0c3w.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/k2cwrp.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/n25szp.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/qvk0h1.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/rlp5or.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/v2mb52.png",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/vhx51e.png",
          title: "Title",
          message: "Message"
        }

      ],
      thongSo: [
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "3660 x 1600 x 1520"
        },
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "3660 x 1600 x 1520"
        }
      ]
     },
     {
       brand: 'Toyota Camry 2.5Q',
       price: 1235000000,
     }
  ]
}
