import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";

export class ToyotaCamry implements CarInfoInterface {
  name   = 'Toyoto Camry'
  type   =  CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/camry.png'
  banner = 'assets/img/toyota/camry/banner.jpg'
  models: CarModelInfoInterface[] =  [
    {
      brand: 'Toyota Camry 2.0G',
      price: 1029000000,
      lingo: 'Beautiful Monster',
      seats: 5,
      type: 'Sedan',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động 6 cấp','Động cơ xăng dung tích 1.998 cc'],
      library:[
        '/assets/img/toyota/camry/library/23ynyb.png',
        '/assets/img/toyota/camry/library/kvxrb4.png',
        '/assets/img/toyota/camry/library/mi0shn.png',
        '/assets/img/toyota/camry/library/nw3avi.png'
      ],
      colors: [
        {
          label: 'Đen - 222',
          image: '/assets/img/toyota/camry/colors/black-222.png',
          colorCode: '#221e25'
        },
        {
          label: 'Đỏ - 3T3',
          image: '/assets/img/toyota/camry/colors/red-3T3.png',
          colorCode: '#7a2438'
        },
        {
          label: 'Bạc - 1D4',
          image: '/assets/img/toyota/camry/colors/silver-1D4.png',
          colorCode: 'silver'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/camry/colors/black-218.png',
          colorCode: 'black'
        },
        {
          label: 'Nâu - 4W9',
          image: '/assets/img/toyota/camry/colors/brown-4W9.png',
          colorCode: 'rgb(68 48 47)'
        },
        {
          label: 'Nâu - 4X7',
          image: '/assets/img/toyota/camry/colors/brown-4X7.png',
          colorCode: 'rgb(72, 66, 63)'
        },
        {
          label: 'Trắng ngọc trai - 089',
          image: '/assets/img/toyota/camry/colors/white-089.png',
          colorCode: '#f7f9fa'
        }
      ],
      ngoaiThat: {
        label: 'NGÔN NGỮ THIẾT KẾ THÔNG MINH GIÀU CẢM XÚC',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/camry/ngoai-that/de0ts0.png',
        features: [
          {
            image: '/assets/img/toyota/camry/ngoai-that/0fxig5.png',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/camry/ngoai-that/0wvamc.png',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/camry/ngoai-that/dixt4l.png',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/camry/ngoai-that/se1qeu.png',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/camry/ngoai-that/xihrcs.png',
            label: 'Gương chiếu hậu'
          }
        ]
      },
      noiThat: {
        label: 'NỘI THẤT SANG TRỌNG - ĐẲNG CẤP',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/camry/noi-that/m4f133.png',
        features: [
          {
            image: '/assets/img/toyota/camry/noi-that/5z2fux.png',
            label: 'Rèm chắn nắng phía sau'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/21ntuo.png',
            label: 'Gạt mưa tự động'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/hh4dpj.png',
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/idrhig.png',
            label: 'Hệ thống âm thanh'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/pdq5wr.png',
            label: 'Hàng ghế sau'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/ulg5pf.png',
            label: 'Ghế ngồi'
          }
        ]
      },
      tinhNang: [
        {
          image: "/assets/img/toyota/camry/tinh-nang/0qpupd.png",
          title: "Vận hành",
          message: "TNGA giúp cho trọng tâm xe được hạ thấp, vận hành ổn định và tầm quan sát được rộng hơn. Đem lại khả năng vận hành tốt trong nhiều điều kiện lái khác nhau. Mang lại cảm giác tự tin, hứng thú cho người lái"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/2hs0lc.png",
          title: "Động cơ",
          message: "Động cơ mạnh mẽ, được trang bị các công nghệ tiên tiến"
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/3mkbko.png",
          title: "Túi khí",
          message: "Hệ thống túi khí tân tiến với 7 túi khí được trang bị trong xe đem đến sự an toàn tuyệt đối ở mọi ghế ngồi."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/bbp352.png",
          title: "Hệ thống hỗ trợ HAC",
          message: "Ngăn không cho xe bị trôi ngược về phía sau khi khởi hành trên các địa hình nghiêng."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/dhrh0e.png",
          title: "Hệ thống kiểm soát hành trình",
          message: "Hệ thống kiểm soát hành trình tăng sự thuận tiện và giảm thao tác cho người lái trên  những cung đường xa."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/djw0n0.png",
          title: "Camera lùi",
          message: "Camera lùi tăng khả năng quan sát các chướng ngại vật, giúp người lái an tâm vững tin khi lùi xe."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/kpd1j2.png",
          title: "Hộp số",
          message: "Cả 2 phiên bản đều được trang bj hộp số tự động 6 cấp giúp tăng giảm số êm ái. Riêng bản 2.5Q được trang bị lẫy chuyển số trên tay lái giúp thao tác nhanh chóng và thuận tiện."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/ludz15.png",
          title: "An toàn tuyệt đối chuẩn ASEAN NCAP 5*",
          message: "Trên tất cả, dòng Camry đem những công nghệ hiện đại nhất mang đến sự an toàn cho người sử dụng."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/m5awom.png",
          title: "Hệ hống mở khóa và khởi động thông minh",
          message: "Hệ hống mở khóa và khởi động thông minh bằng nút bấm tạo sự tiện lợi tối đa cho khách hàng khi ra/vào xe và khởi động/tắt máy với bộ điều khiển mang bên mình."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/rjk3d1.png",
          title: "Chức năng giữ phanh điện tử",
          message: "Chức năng giữ phanh điện tử làm giảm sự bất tiện cho người lái khi phải dừng chờ đèn đỏ bằng cách duy trì áp suất phanh ở các bánh xe. Chắc năng này tự động giải phóng áp suất phanh khi người lái đạp bàn đạp ga."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/y1odka.png",
          title: "Hệ thống cảnh báo điểm mù",
          message: "Chức năng này cảnh báo cho người lái các phương tiện đang di chuyển trong vùng không quan sát được, giúp người lái đảm bảo an toàn khi chuyển làn hay lùi xe trong bãi đỗ."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/ycpkj1.png",
          title: "Hệ thống cân bằng điện tử VSC",
          message: "Kiểm soát tình trạng trượt và tăng cường độ ổn định khi xe vào cua, đảm bảo xe luôn vận hành đúng quỹ đạo mong muốn. Đặc biệt, hệ thống còn được trang bị trang bị nút tắt (off) để khách hàng linh hoạt sử dụng."
        },
        {
          image: "/assets/img/toyota/camry/tinh-nang/ubwq13.png",
          title: "Hệ thống hỗ trợ lực phanh BA",
          message: "Tự động gia tăng thêm lực phanh trong trường hợp khẩn cấp, giúp người lái tự tin xử lý các tình huống bất ngờ."
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
       brand: 'Toyota Camry 2.5Q',
       price: 1235000000,
       noiThat: {
        label: 'NỘI THẤT SANG TRỌNG - ĐẲNG CẤP',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/camry/noi-that/m4f133.png',
        features: [
          {
            image: '/assets/img/toyota/camry/noi-that/5z2fux.png',
            label: 'Rèm chắn nắng phía sau'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/21ntuo.png',
            label: 'Gạt mưa tự động'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/bxmcqx.png',
            label: 'Hệ thống định vị'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/ceigm3.png',
            label: 'Bảng điều khiển'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/hh4dpj.png',
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/idrhig.png',
            label: 'Hệ thống âm thanh'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/pdq5wr.png',
            label: 'Hàng ghế sau'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/ulg5pf.png',
            label: 'Ghế ngồi'
          },
          {
            image: '/assets/img/toyota/camry/noi-that/vdcria.png',
            label: 'Hệ thống hiển thị kính lái HUD'
          }
        ]
      },
     }
  ]
}
