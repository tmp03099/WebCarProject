import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaHilux implements CarInfoInterface {
  name = 'Toyota Hilux'
  type = CarTypeEnum.XeBanTai
  imgSrc = 'assets/img/cars/hilux.png'
  models = [
    {
      brand: 'Toyota HILUX 2.4L 4X2 MT',
      price: 628000000,
      lingo: 'Chinh phục đỉnh cao',   
      seats: 5,
      type: 'Bán tải',
      fuelType: 'Dầu',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tay 6 cấp'],
      library:[
        '/assets/img/toyota/hilux/library/4xmv0u.jpg',
        '/assets/img/toyota/hilux/library/mx5zws.jpg',
        '/assets/img/toyota/hilux/library/o2xa2d.jpg',
        '/assets/img/toyota/hilux/library/qrifsn.jpg'
      ],
      colors: [
        {
          label: 'Cam - 4R8',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-4R8-2.png',
          colorCode: 'orange'
        },
        {
          label: 'Bạc - 1D6',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-1D6-2.png',
          colorCode: 'silver'
        },
        {
          label: 'Xám - 1G3',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-1G3-2.png',
          colorCode: '#646464'
        },
        {
          label: 'Đỏ - 3T6',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-3T6-2.png',
          colorCode: 'red'
        },
        {
          label: 'Trắng - 070',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-070-2.png',
          colorCode: 'white'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-218-2.png',
          colorCode: 'black'
        }
      ],
      ngoaiThat: {
        label: 'THIẾT KẾ MẠNH MẼ ĐẦY UY LỰC',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/hilux/ngoai-that/umw5o3.jpg',
        features: [
          {
            image: '/assets/img/toyota/hilux/ngoai-that/4g2b0f.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/5vnhxb.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/a1nt0a.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/ap4vdv.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/atq0oh.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/d00s3g.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/fii4nt.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/gamhiq.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/isy5k4.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/lq2z5h.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/mqkr20.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/q1akx3.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/sh4tv2.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/ugkeeq.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'KHOANG LÁI RỘNG RÃI ĐẦY TIỆN NGHI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/hilux/noi-that/ljtxvk.jpg',
        features: [
          {
            image: '/assets/img/toyota/hilux/noi-that/1eis4i.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/1wkms4.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/3vamr5.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/5vikpf.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/37wodv.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/52thwp.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/bhov87.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/bt5rae.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/csyxzd.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/k2kdh1.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/t0xkzr.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/vl5w33.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/hilux/tinh-nang/0zivco.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/0zivco.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/0zivco.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/0zivco.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/2yosqb.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/f1saxz.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/iezzc1.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/ixbf1g.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/kwegyp.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/lfipmw.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/rdcoxr.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/v05ado.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/w9onyb.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/y11rx4.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/zpp1tm.jpg",
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
        brand: 'Toyota HILUX 2.4L 4X2 AT',
        price: 674000000
      },
      {
        brand: 'Toyota HILUX 2.4L 4X4 MT',
        price: 799000000
      },
      {
        brand: 'Toyota HILUX 2.8L 4X4 AT',
        price: 913000000
      }
  ]
}
