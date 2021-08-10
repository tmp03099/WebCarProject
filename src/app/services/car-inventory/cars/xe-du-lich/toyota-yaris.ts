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
      library:[
        '/assets/img/toyota/yaris/library/drlqtx.jpg',
        '/assets/img/toyota/yaris/library/q0aumm.jpg',
        '/assets/img/toyota/yaris/library/syf0a1.jpg',
        '/assets/img/toyota/yaris/library/ujkjrk.jpg'
      ],
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
      ],
      ngoaiThat: {
        label: 'THU HÚT MỌI ÁNH NHÌN',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/yaris/ngoai-that/0aj3gg.jpg',
        features: [
          {
            image: '/assets/img/toyota/yaris/ngoai-that/0hyavd.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/hy1yub.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/iqctm2.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/marq3c.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/pfcfxz.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/qpgdkj.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/z5qpfw.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'TINH TẾ - KHÔNG GIAN THOÁNG ĐÃNG',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/yaris/noi-that/yfegd1.jpg',
        features: [
          {
            image: '/assets/img/toyota/yaris/noi-that/21xrr1.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/hie4aa.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/lgrxtj.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/m3ts1g.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/mpgfk4.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/s5riu3.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/sccib0.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/xdsiyz.jpg',
            label: 'test'
          }

        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/yaris/tinh-nang/1pgve5.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/1qmjik.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/1uuxfj.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/4dym1b.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/5kfaqq.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/45ttrh.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/adhiv0.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/c5avpj.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/frec0j.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/jrkyub.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/juzvkn.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/r0x2jv.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/wuifqj.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/zfc1sr.jpg",
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
