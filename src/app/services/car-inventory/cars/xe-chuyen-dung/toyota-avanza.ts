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
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/4o1bf.jpg',
            label: 'Đuôi xe'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/fvr2vc.jpg',
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/gyjkoz.jpg',
            label: 'Gương chiếu hậu'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/nmcird.jpg',
            label: 'Cánh hướng gió sau'
          },
          {
            image: '/assets/img/toyota/avanza/MT/ngoai-that/sgbasc.jpg',
            label: 'Cụm đèn trước'
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
            label: 'Hộc chứa đồ'
          },
          {
            image: '/assets/img/toyota/avanza/MT/noi-that/e2lffq.jpg',
            label: 'Hệ thống âm thanh'
          },
          {
            image: '/assets/img/toyota/avanza/MT/noi-that/zlmjne.jpg',
            label: 'Hệ thống điều hòa'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/5dcbeo.jpg",
          title: "Hộp số",
          message: "Hộp số sàn 5 cấp (1.3MT) hỗ trợ vận hành mượt mà và tiết kiệm nhiên liệu tối ưu trên mọi cung đường."
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/41modv.jpg",
          title: "Bán kính vòng quay",
          message: "Bán kính vòng quay tối thiểu nhỏ - 4.7m cho phép xe chuyển động linh hoạt trên mọi cung đường."
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/eamrjh.jpg",
          title: "Túi khí",
          message: "Hai túi khí trang bị cho nguyowif lái và hành khách phía trước mang lại sự an tâm trong mỗi chuyến đi."
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/eqx2tv.jpg",
          title: "Hệ thống phân phối lực phanh điện",
          message: "Hệ thống phân phối lực phanh điện tử EBD phân bố lực phanh hợp lý đến các bánh xe, giúp nâng cao hiệu quả phanh, đặc biệt khi xe đang chất tải và cào cua."
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/etbpjx.jpg",
          title: "Hệ thống chống bó cứng phanh (ABS)",
          message: "ABS giúp các bánh xe không bị bó cứng khi phanh gấp hay phanh trên đường trơn trượt, đảm bảo an toàn cho người lái và hành khách trên xe."
        },
        {
          image: "/assets/img/toyota/avanza/MT/tinh-nang/y3n5tw.jpg",
          title: "Hệ thống treo trước",
          message: "Hệ thống treo trước giúp xe vận hành êm dịu và đảm bảo bộ bám đường cho bánh xe."
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
      otherInfo: ['Số tự động 4 cấp'],
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
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/5tuoo0.jpg',
            label: 'Cánh hướng gió sau'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/55ymmq.jpg',
            label: 'Đuôi xe'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/tktlxp.jpg',
            label: 'Gương chiếu hậu'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/uelewj.jpg',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/wlt5cb.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/avanza/AT/ngoai-that/yuc00z.jpg',
            label: 'Đèn sương mù'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/uxiqfd.jpg",
          title: "Bán kính vòng quay",
          message: "Bán kính vòng quay tối thiểu nhỏ - 4.7m cho phép xe chuyển động linh hoạt trên mọi cung đường."
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/kgibs5.jpg",
          title: "Hệ thống chống bó cứng phanh (ABS)",
          message: "ABS giúp các bánh xe không bị bó cứng khi phanh gấp hay phanh trên đường trơn trượt, đảm bảo an toàn cho người lái và hành khách trên xe."
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/rxzj13.jpg",
          title: "Hệ thống treo trước",
          message: "Hệ thống treo trước giúp xe vận hành êm dịu và đảm bảo bộ bám đường cho bánh xe."
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/yv2pfc.jpg",
          title: "Hệ thống phân phối lực phanh điện",
          message: "Hệ thống phân phối lực phanh điện tử EBD phân bố lực phanh hợp lý đến các bánh xe, giúp nâng cao hiệu quả phanh, đặc biệt khi xe đang chất tải và cào cua."
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/yzw2p2.jpg",
          title: "Hộp số",
          message: "Hộp số tự động 4 cấp (1.5 AT) và số sàn 5 cấp (1.3 MT) vận hành mượt mà."
        },
        {
          image: "/assets/img/toyota/avanza/AT/tinh-nang/zv5swb.jpg",
          title: "Động cơ",
          message: "Động cơ WT - i kép cho hiệu suất cao, tiết kiệm nhiên liệu và thân thiện với môi trường."
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
