import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaVios implements CarInfoInterface {
  name   = 'Toyota Vios'
  type   =  CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/vios.png'
  banner = 'assets/img/toyota/vios/banner.jpg'

  models = [
    {
      brand: 'Toyota Vios 1.5E MT',
      price: 478000000,
      lingo: 'Khởi xướng trào lưu',  
      seats: 5,
      type: 'Sedan',
      fuelType: 'Xăng',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tay 5 cấp'],
      library:[
        '/assets/img/toyota/vios/library/czcwkc.jpg',
        '/assets/img/toyota/vios/library/dz5zvo.jpg',
        '/assets/img/toyota/vios/library/fjsivp.jpg',
        '/assets/img/toyota/vios/library/lcalpp.jpg',
        '/assets/img/toyota/vios/library/tab01q.jpg',
        '/assets/img/toyota/vios/library/zj4nwk.jpg'
      ],
      promotion: [
        `Hỗ trợ 1 phần lệ trí trước bạ lên đến 20 triệu dồng,
        áp dụng từ 1/8-31/8/2021`,
        `Sở hữu xe chỉ với 95,2 triệu thanh toán ban đầu, trả góp
        từ 4,0 triệu đồng/tháng trong 6 tháng đầu tiên`
      ],
      colors: [
          {
            label: 'Đỏ - 3G3',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(3R3)-1.png',
            colorCode: 'red'
          },
          {
            label: 'Nâu Vàng - 4R0',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(4R0)-1.png',
            colorCode: '#afa599'
          },
          {
            label: 'Trắng - 040',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(040)-1.png',
            colorCode: 'white'
          },
          {
            label: 'Trắng ngọc trai - 089',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(089)-1.png',
            colorCode: '#f7f9fa'
          },
          {
            label: 'Đen - 218',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(218)-1.png',
            colorCode: 'black'
          },
          {
            label: 'Vàng - 576',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(576)-1.png',
            colorCode: 'yellow'
          },
          {
            label: 'Bạc - 1D6',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(1D6)-1.png',
            colorCode: 'silver'
          }
      ],
      ngoaiThat: {
        label: 'THIẾT KẾ GIÀU CẢM XÚC',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/vios/ngoai-that/rrewc4.jpg',
        features: [
          {
            image: '/assets/img/toyota/vios/ngoai-that/1gmbwf.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/bgmjef.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/h15foc.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/jvsbxm.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/mempep.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/q24lq5.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/vuezqm.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'TRUYỀN CẢM HỨNG TỪ TIỆN NGHI VÀ THOẢI MÁI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/vios/noi-that/l.jpg',
        features: [
          {
            image: '/assets/img/toyota/vios/noi-that/0g24rw.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/0j2ezj.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/1toaq0.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/2toejf.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/owj0qm.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/sgkurw.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/usycoq.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/vios/tinh-nang/cambien.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/cambiendoxe.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/cameralui.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/canbang.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/chongcung.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/dongco.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/hethongphanh.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/hopso.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/khoihanh.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/kiemsoatluckeo.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/phanhkhancap.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/phanphoi.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/thietkedonghoc.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/tuikhi.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/vanhanh.jpg",
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
       brand: 'Toyota Vios 1.5E CVT',
       price: 531000000

     },
     {
       brand: 'Toyota Vios 1.5G CVT',
       price: 581000000
     },
     {
       brand: 'Toyota Vios 1.5G R-S',
       price: 630000000
     }
  ]
}
