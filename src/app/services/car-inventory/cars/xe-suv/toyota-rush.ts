import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaRush implements CarInfoInterface {
  name = 'Toyota Rush'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/Rush.png'
  models = [
    {
      brand: 'Toyota Rush 1.5 AT',
      price: 634000000,
      lingo: 'SẴN SÀNG CHO MỌI HÀNH TRÌNH',
      seats: 7,
      type: 'SUV',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động 4 cấp','Tặng thêm 1 năm bảo hiểm thân vỏ Toyota'],
      library:[
        '/assets/img/toyota/rush/library/4aiqtl.jpg',
        '/assets/img/toyota/rush/library/bf1fbf.jpg',      
        '/assets/img/toyota/rush/library/kbl3al.jpg',
        '/assets/img/toyota/rush/library/ldxarm.jpg',
        '/assets/img/toyota/rush/library/ns1s0q.jpg',
        '/assets/img/toyota/rush/library/qddgrw.jpg',      
        '/assets/img/toyota/rush/library/qz1gc4.jpg',
        '/assets/img/toyota/rush/library/rcgmj1.jpg'

      ],
      promotion: [
        `Gói bảo hiểm vật chất 01 năm Toyota (gói bảo hiểm vàng)
        trị giá lên đến 8.7 triệu đồng áp dụng từ ngày 07/05 đến 31/12`,
        `Gói tài chính Balloon áp dụng từ ngày 03/05 đến ngày 31/12 với:
        ✓ Số tiền đầu tư lúc đầu chỉ từ 126.8 triệu đồng
        ✓ Tiền trả hàng tháng chỉ từ 6.8 triệu đồng` 
        ],
      colors: [
        {
          label: 'Trắng - W09',
          image: '/assets/img/toyota/rush/colors/Trang-2.png',
          colorCode: 'white'
        },
        {
          label: 'Bạc - 1E7 ',
          image: '/assets/img/toyota/rush/colors/Bac-2.png',
          colorCode: '#e8e8e8'
        },
        {
          label: 'Đen - X12',
          image: '/assets/img/toyota/rush/colors/Den-2.png',
          colorCode: 'black'
        },
        {
          label: 'Đỏ - 3Q3',
          image: '/assets/img/toyota/rush/colors/Do-2.png',
          colorCode: '#401719'
        },
        {
          label: 'Đồng - 4T3',
          image: '/assets/img/toyota/rush/colors/Dong-4t3.png',
          colorCode: '#484536'
        },
        {
          label: 'Nâu - R54',
          image: '/assets/img/toyota/rush/colors/Nau-2.png',
          colorCode: '#421f2b'
        }
      ],
      ngoaiThat: {
        label: 'DIỆN MẠO KHỎE KHOẮN',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/rush/ngoai-that/4vtahl.jpg',
        features: [
          {
            image: '/assets/img/toyota/rush/ngoai-that/2ktjdf.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/aaz3cn.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/dheiuz.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/idstrq.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/mmsx1u.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/n20dqx.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/y1qqzm.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'THÔNG MINH - TINH TẾ',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/rush/noi-that/rcgmj1.jpg',
        features: [
          {
            image: '/assets/img/toyota/rush/noi-that/fcdzg0.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/olh0s1.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/t0w5yp.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/wg5lhb.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/zkla0x.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/zrdtvg.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/rush/tinh-nang/0fbjjl.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/4iary2.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/22qeyr.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/b5iag1.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/bjkhuu.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/chv3li.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/dcrxdq.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/deorge.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/dx2iht.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/ebkb00.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/fjjqnc.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/gr00zz.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/ibmof1.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/mf3yai.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/wwqzjn.jpg",
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
