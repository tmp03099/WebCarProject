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
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/cneovy.jpg',
            label: 'Cụm đèn pha'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/f0yreu.jpg',
            label: 'Cánh hướng gió'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/ofrebc.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/qw1srx.jpg',
            label: 'Cụm đèn LED'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/rne1hk.jpg',
            label: 'Kính hậu'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/v3ibxo.jpg',
            label: 'Gương chiếu hậu'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/ngoai-that/ytz2kf.jpg',
            label: 'Bánh xe lớn'
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
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/e4fxwg.jpg',
            label: 'Hộp lạnh'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/gvcrvd.jpg',
            label: 'Hệ thống âm thanh'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/no4ygf.jpg',
            label: 'Hệ thống điều hòa tự động'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/oxnln2.jpg',
            label: 'Bảng đồng hồ'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/qstmud.jpg',
            label: 'Ghế bọc da'
          },
          {
            image: '/assets/img/toyota/land-cruiser-prado/noi-that/v50xfw.jpg',
            label: 'Cổng AUX, USB'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/1mwn4w.jpg",
          title: "Hệ thống túi khí",
          message: "Trang bị hệ thống túi khí hiện đại giúp giảm thiểu tối đa chấn thương cho người lái và hành khách trong trường hợp không may xảy ra va chạm."
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/51r1wn.jpg",
          title: "Hệ thống kiểm soát ổn định xe VSC",
          message: "Hệ thống kiểm soát ổn định xe VSC tự động giảm công suất động cơ và tự động phanh ở các bánh xe trước và sau khi có hiện tượng thiếu lái và lái quá đà lúc vào cua nhằm ngăn ngừa hiện tượng chệch hướng."
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/156dh8.jpg",
          title: "Hộp số tự động 6 cấp",
          message: "Hộp số tự động 6 cấp giúp người lái chuyển số nhẹ nhàng, tập trung xử lý các tình huống trên đường."
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/c7u909.jpg",
          title: "Trợ lực tay lái thủy lực biến thiên theo tốc độ",
          message: "Ưu việt hơn loại trợ lực thông thường. Được trang bị cơ cấu bơm trợ lực thùy lực loại VFC."
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/dgqhwz.jpg",
          title: "Hệ thống an toàn",
          message: "Trang bị đầy đủ các hệ thống hỗ trợ an toàn như ABS, EBD, BA, VSC, TRC giúp xe cần bằng tốt và ổn định trong mọi trạng thái. "
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/o7cvea.jpg",
          title: "Hệ thống truyền động 4 bánh (4WD)",
          message: "Hệ thống truyền động 4 bánh chủ động toàn thời gian giúp xe đạt được lực kéo tối đa, tăng khả năng bám đường và dộ ổn định của xe."
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/rg5zvn.jpg",
          title: "Động  cơ 2TR-FE 2.7L",
          message: "Được trang bị hệ thống điều phối van biến thiên thông minh Dual VVT-i với 4 xylanh thẳng hàng cho phép tăng tốc êm ái và mạnh mẽ, giúp tiết kiệm nhiên liệu và giảm thiểu khí xả."
        },
        {
          image: "/assets/img/toyota/land-cruiser-prado/tinh-nang/v0jui3.jpg",
          title: "Hệ thống treo trước",
          message: "Hệ thống treo trước độc lập với lò xo cuộn, tay đòn kép và thanh cân bằng, hệ thống treo sau liên kết 4 điểm, lò xo cuộn và tay đòn bên đảm bảo độ ổn định ưu việt."
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
