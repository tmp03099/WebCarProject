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
      lingo: 'HẬU DUỆ XỨNG TẦM',
      seats: 7,
      type: 'SUV',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động 6 cấp'],
      library:[
        '/assets/img/toyota/land-cruiser-prado/library/5yhct4.jpg',
        '/assets/img/toyota/land-cruiser-prado/library/p543sf.jpg',      
        '/assets/img/toyota/land-cruiser-prado/library/x2yckr.jpg'
      ],
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
      ],
      ngoaiThat: {
        label: 'NGOẠI THÂT ẤN TƯỢNG',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/g23aij.jpg',
        features: [
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/affact.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/cneovy.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/f0yreu.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/ofrebc.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/qw1srx.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/rne1hk.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/v3ibxo.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/ytz2kf.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'NỘI THẤT SANG TRỌNG',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/land-cruiser-prado/noi-that/zsserp.jpg',
        features: [
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/1q1m3j.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/e4fxwg.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/gvcrvd.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/no4ygf.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/oxnln2.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/qstmud.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/v50xfw.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/1mwn4w.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/51r1wn.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/156dh8.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/c7u909.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/dgqhwz.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/o7cvea.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/rg5zvn.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/v0jui3.jpg",
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
