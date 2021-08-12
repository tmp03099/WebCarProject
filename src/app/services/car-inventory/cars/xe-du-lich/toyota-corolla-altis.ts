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
      seats: 5,
      type: 'Sedan',
      fuelType: 'Xăng',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tự động','Động cơ xăng dung tích 1.798 cm3'],
      library:[
        '/assets/img/toyota/altis/library/r2ozze.jpg',
        '/assets/img/toyota/altis/library/nb35q4.jpg',      
        '/assets/img/toyota/altis/library/qrvdqf.jpg',
        '/assets/img/toyota/altis/library/u1dq0c.jpg'
      ],
      promotion: [
        `Tặng kèm 2 năm bảo hiểm thân vỏ Toyota`
      ],
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
      ],
      ngoaiThat: {
        label: 'XỨNG TẦM THƯỢNG LƯU',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/altis/ngoai-that/hjp0b4.jpg',
        features: [
          {
            image: '/assets/img/toyota/altis/ngoai-that/1kt1s0.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/5e3obn.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/5fuabj.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/fxbsv0.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/ivce3v.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/mb3sm1.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/voynkn.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'KHÔNG GIAN NỘI THẤT SANG TRỌNG, TINH TẾ',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/altis/noi-that/kwnsjt.jpg',
        features: [
          {
            image: '/assets/img/toyota/altis/noi-that/0qebi4.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/1op5a3.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/4ijsya.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/bbi5rr.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/ebxn0q.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/emrgc2.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/kwnsjt.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/pirpf5.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/tbi3ma.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/ufammi.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/altis/tinh-nang/0lzs2f.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/0wwbvw.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/1j3cav.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/5omr3q.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/5tulmt.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/awks2q.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/ewhagj.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/ib4vdr.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/j4rrcy.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/jys1ct.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/ld3y24.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/viqfcg.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/vqgep1.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/vxqmopv.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/wfpwvd.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/yhv0bc.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/ylydya.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/zc0lof.jpg",
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
       brand: 'Toyota Corolla Altis 1.8G CVT',
       price: 763000000
     }
  ]
}
