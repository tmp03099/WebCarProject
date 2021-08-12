import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaFortuner implements CarInfoInterface {
  name = 'Toyota Fortuner'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/Fortuner.png'
  banner = 'assets/img/toyota/fortuner/banner.jpg'
  models = [
    {
      brand: 'Toyota Fortuner 2.4AT 4x2',
      price: 1088000000,
      seats: 7,
      type: 'SUV',
      fuelType: 'Dầu',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tự động 6 cấp/6AT'],
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
      ],
      ngoaiThat: {
        label: 'MẠNH MẼ ĐẦY CUỐN HÚT',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/fortuner/ngoai-that/hcycd3.jpg',
        features: [
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/0tbgq1.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/0tfbdj.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/l1wlxl.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/sfeik3.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/t1ijov.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'HOÀN HẢO, TIỆN NGHI VƯỢT TRỘI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/fortuner/noi-that/l0ggnf.jpg',
        features: [
          {
            image: '/assets/img/toyota/fortuner/noi-that/04jtqs.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/btiuxb.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/dgyi54.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/ekc0ms.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/xy0wfx.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/0txutn.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/2dg1zv.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/axbhm3.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/c4hyod.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/ds4kss.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/enntff.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/f3sqmn.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/gjjop4.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/i0cq4w.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/kkgtxu.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/knbszx.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/m2skvh.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/px0ibr.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/q3xwfs.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/scsr51.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/vdaagj.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/yvt2s1.jpg",
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
        brand: 'Toyota Fortuner 2.4MT 4x2',
        price: 995000000,
        otherInfo: ['Số sàn 6 cấp/6MT'],
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
