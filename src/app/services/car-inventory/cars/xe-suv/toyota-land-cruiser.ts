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
      price: 4060000000,
      lingo: 'UY LỰC THỐNG LĨNH',
      seats: 7,
      type: 'SUV',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động 10 cấp'],
      library:[
        '/assets/img/toyota/land-cruiser/library/1pvocz.jpg',
        '/assets/img/toyota/land-cruiser/library/135uni.jpg',      
        '/assets/img/toyota/land-cruiser/library/in5dcb.jpg',
        '/assets/img/toyota/land-cruiser/library/pyhvks.jpg'
      ],
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
      ],
      ngoaiThat: {
        label: 'KIÊU HÃNH VƯỢT TRỘI',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/land-cruiser/ngoai-that/kmyctu.jpg',
        features: [
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/1kbd04.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/4bsgty.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/eiwvpq.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/fu2kbx.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/huckfk.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/jjlksj.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/zdq5jm.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'NỘI THẤT TIỆN NGHI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/land-cruiser/noi-that/cyi4qr.jpg',
        features: [
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/2hkpkf.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/3da3it.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/d0cylm.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/ifciee.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/wirt1u.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/0jm1hm.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/5fwtco.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/asja0a.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/ir2u24.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/jzzwib.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/kiwwtg.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/piyuya.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/rf3hfr.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/t4oqff.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/v2mfbo.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/zp4z6r.jpg",
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
    }
  ]
}
