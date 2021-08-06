import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaAvanza implements CarInfoInterface {
  name = 'Toyota Avanza'
  type = CarTypeEnum.XeChuyenDung
  imgSrc = 'assets/img/cars/avanza.png'
  models = [
    {
      brand: 'Toyota Avanza MT',
      price: 544000000,
      lingo: 'Mang yêu thương cho mỗi hành trình',   
      seats: 7,
      type: 'Đa dụng',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số sàn 5 cấp'],
      library:[
        '/assets/img/toyota/avanza/MT/library/2ys5br.jpg',
        '/assets/img/toyota/avanza/MT/library/ckbbbm.jpg',
        '/assets/img/toyota/avanza/MT/library/dr0g0m.jpg',
        '/assets/img/toyota/avanza/MT/library/nl1nql.jpg'
      ],
      colors:[
        {
          label:'Bạc - 1E7',
          image:'/assets/img/toyota/avanza/colors/MT/Bac-1E7-MT.png',
          colorCode: '#dedfe1'
        },
        {
          label:'Vàng - T23',
          image:'/assets/img/toyota/avanza/colors/MT/Be-T23-MT.png',
          colorCode: '#cfcbc1'
        },
        {
          label:'Đen - X12',
          image:'/assets/img/toyota/avanza/colors/MT/Den-X12-MT.png',
          colorCode: 'black'
        },
        {
          label:'Trắng - W09',
          image:'/assets/img/toyota/avanza/colors/MT/Trang-W09-MT.png',
          colorCode: 'white'
        },
        {
          label:'Xám - 1G3',
          image:'/assets/img/toyota/avanza/colors/MT/Xam-1G3-AT.png',
          colorCode: '#94989b'
        },
        {
          label:'Xanh sẫm - B79',
          image:'/assets/img/toyota/avanza/colors/MT/Xanh-8X2-MT.png',
          colorCode: '#133368'
        }
      ],
      ngoaiThat: {
        label: 'THIẾT KẾ MẠNH MẼ ĐẦY UY LỰC',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/avanza/MT/ngoai-that/0rdr2w.jpg',
        features: [
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/42uajl.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/4o1bf.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/fvr2vc.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/gyjkoz.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/nmcird.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/sgbasc.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'Diện mạo tinh tế, mạnh mẽ',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/avanza/MT/noi-that/hbrphl.jpg',
        features: [
          {
            image: '/assets/img/toyota/avanza/MT/noi-that/z4ddei.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/MT/noi-that/e2lffq.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/MT/noi-that/zlmjne.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/5dcbeo.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/41modv.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/eamrjh.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/eqx2tv.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/etbpjx.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/y3n5tw.jpg",
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
      brand: 'Toyota Avanza AT',
      price: 612000000,
      lingo: 'Mang yêu thương cho mỗi hành trình',   
      seats: 7,
      type: 'Đa dụng',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số sàn 4 cấp'],
      library:[
        '/assets/img/toyota/avanza/AT/library/hpr4tt.jpg',
        '/assets/img/toyota/avanza/AT/library/xwfgld.jpg',
        '/assets/img/toyota/avanza/AT/library/zc3wqa.jpg',
        '/assets/img/toyota/avanza/AT/library/nl1nql.jpg'
      ],
      colors:[
        {
          label:'Bạc - 1E7',
          image:'/assets/img/toyota/avanza/colors/AT/mauxe-600x249-bac.png',
          colorCode: '#dedfe1'
        },
        {
          label:'Xanh sẫm - B79',
          image:'/assets/img/toyota/avanza/colors/AT/mauxe-600x249-blue.png',
          colorCode: '#133368'
        },
        {
          label:'Vàng - T23',
          image:'/assets/img/toyota/avanza/colors/AT/mauxe-600x249-yellow.png',
          colorCode: '#cfcbc1'
        },
        {
          label:'Trắng - W09',
          image:'/assets/img/toyota/avanza/colors/AT/mauxe-600x249-white.png',
          colorCode: 'white'
        },
        {
          label:'Xám - 1G3',
          image:'/assets/img/toyota/avanza/colors/AT/mauxe-600x249-den.png',
          colorCode: '#94989b'
        },
        {
          label:'Đen - X12',
          image:'/assets/img/toyota/avanza/colors/AT/den-2.png',
          colorCode: 'black'
        }
      ],
      ngoaiThat: {
        label: 'DIỆN MẠO THỂ THAO, NĂNG ĐỘNG',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/avanza/AT/ngoai-that/luynyv.jpg',
        features: [
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/0grdsc.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/5tuoo0.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/55ymmq.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/tktlxp.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/uelewj.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/wlt5cb.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/yuc00z.jpg',
            label: 'test'
          }
        ]
      },
      noiThat: {
        label: 'KHÔNG GIAN NỘI THẤT RỘNG RÃI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/avanza/AT/noi-that/cusq1t.jpg',
        features: [
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/1gttye.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/bntdyq.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/ldblyr.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/ndaech.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/uxiqfd.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/kgibs5.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/rxzj13.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/yv2pfc.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/yzw2p2.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/zv5swb.jpg",
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
