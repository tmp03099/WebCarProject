import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";

export class ToyotaWigo implements CarInfoInterface {
  name = 'Toyota Wigo'
  type = CarTypeEnum.XeDuLich
  banner = 'assets/img/toyota/wigo/banner.jpg'
  imgSrc = 'assets/img/cars/wigo.png'

  models: CarModelInfoInterface[] = [
    {
      brand: 'Toyota Wigo 5MT',
      price: 352000000,
      lingo: 'Gọn nhỏ lướt phố',
      seats: 5,
      type: 'Hatchback',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số sàn 5 cấp'],
      library: [
        '/assets/img/toyota/wigo/library/1.png',
        '/assets/img/toyota/wigo/library/2.png',
        '/assets/img/toyota/wigo/library/3.png',
        '/assets/img/toyota/wigo/library/4.jpg'
      ],
      promotion: [
        `Nhận ngay gói Bảo hành 5 năm/150.000 km.
        Chương trình áp dụng từ 7/6 đến 31/12/2021`
      ],
      colors: [
        {
          label: 'Cam R71',
          image: '/assets/img/toyota/wigo/colors/5MT/R71_ORANGE-ME-2.png',
          colorCode: 'orange'
        },
        {
          label: 'Trắng W09',
          image: '/assets/img/toyota/wigo/colors/5MT/W09_WHITE-2.png',
          colorCode: 'white'
        },
        {
          label: 'Đỏ R40',
          image: '/assets/img/toyota/wigo/colors/5MT/R40_RED-2.png',
          colorCode: 'red'
        },
        {
          label: 'Đen X13',
          image: '/assets/img/toyota/wigo/colors/5MT/X13_BLACK-2.png',
          colorCode: 'black'
        },
        {
          label: 'Xám 1G3',
          image: '/assets/img/toyota/wigo/colors/5MT/1G3_GRAY-ME-2.png',
          colorCode: 'gray'
        },
        {
          label: 'Bạc S28',
          image: '/assets/img/toyota/wigo/colors/5MT/S28_SILVER-ME-2.png',
          colorCode: 'silver'
        },
        {
          label: 'Vàng Y13',
          image: '/assets/img/toyota/wigo/colors/5MT/Y13_YELLOW-SE-2.png',
          colorCode: 'yellow'
        }
      ],
      ngoaiThat: {
        label: 'DIỆN MẠO MỚI NĂNG ĐỘNG KHỎE KHOẮN',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/wigo/ngoai-that/1.png',
        features: [
          {
            image: '/assets/img/toyota/wigo/ngoai-that/2.png',
            label: 'Đuôi xe'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/3.png',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/4.png',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/5.png',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/6.png',
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/7.png',
            label: 'Gương chiếu hậu'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/8.png',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/wigo/ngoai-that/9.png',
            label: 'lưới tản nhiệt'
          }
        ]
      },
      noiThat: {
        label: 'CẢI TIẾN MỚI - TIỆN ÍCH HƠN',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/wigo/noi-that/1.jpg',
        features: [
          {
            image: '/assets/img/toyota/wigo/noi-that/2.jpg',
            label: 'Khoang hành lí'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/3.jpg',
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/4.jpg',
            label: 'Màn hình DVD'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/5.png',
            label: 'Nút bấm khởi động'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/6.png',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/wigo/noi-that/7.jpg',
            label: 'Đồng hồ táp lô'
          }
        ]
      },
      tinhNang: [
        {
          image: "/assets/img/toyota/wigo/tinh-nang/0.png",
          title: "Hệ thống treo",
          message: "Hệ thống treo với thiết kế thông minh giúp TOYOTA WIGO vận hành êm mượt và ổn định."
        },
        {
          image: "/assets/img/toyota/wigo/tinh-nang/1.png",
          title: "Động cơ",
          message: "TOYOTA WIGO được trang bị khả năng tăng tốc tốt, tiết kiệm nhiên liệu và bền bỉ xuyên suốt chặng đường dài."
        },
        {
          image: "/assets/img/toyota/wigo/tinh-nang/2.png",
          title: "Thiết kế khí động học",
          message: "Các đường khí động học cá tính sắc nét cùng góc cản trước thấp, hạ trọng tâm, tạo phong cách thể thao chinh phục mọi ánh nhìn."
        },
        {
          image: "/assets/img/toyota/wigo/tinh-nang/3.png",
          title: "Dây đeo an toàn",
          message: "2 túi khí (người lái và hành khách phía trước), kết hợp cùng dây đai an toàn 3 điểm cho tất cả các vị trí đảm bảo an toàn cho mọi hành khách."
        },
        {
          image: "/assets/img/toyota/wigo/tinh-nang/4.png",
          title: "Hệ thống chống bó cứng phanh",
          message: "Đươc trang bị phanh ABS giúp người lái có thể điều khiển xe an toàn trong những tình huống nguy cấp."
        },
        {
          image: "/assets/img/toyota/wigo/tinh-nang/5.jpg",
          title: "ISOFIX",
          message: "Điểm kết nối ghế an toàn trẻ em với tiêu chuẩn ISOFIX giúp hành khách hoàn toàn yên tâm khi mang theo con nhỏ trong những chuyến đi."
        },
        {
          image: "/assets/img/toyota/wigo/tinh-nang/6.jpg",
          title: "Túi khí",
          message: "2 túi khí (người lái và hành khách phía trước), kết hợp cùng dây đai an toàn 3 điểm cho tất cả các vị trí đảm bảo an toàn cho mọi hành khách."
        }
      ],
      thongSo: [
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "3660 x 1600 x 1520"
        },
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "1940 x 1365 x 1235"
        },
        {
          label:"Chiều dài cơ sở (mm)",
          value:"2455",
        },
        {
          label:"Chiều rộng cơ sở (Trước / sau) (mm)",
          value:"1410 / 1405",
        },
        {
          label:"Khoảng sáng gầm xe (mm)",
          value:"160",
        },

        {
          label:"Góc thoát (Trước / Sau) (độ / degree)",
          value:"N / A",
        },
        {
          label:"Bán kính vòng quay tối thiểu (m)",
          value:"4,7",
        },

        {
          label:"Trọng lượng không tải (kg)",
          value:"870",
        },
        {
          label:"Trọng lượng toàn tải (kg)",
          value:"1290",
        },
        {
          label:"Dung tích bình nhiên liệu (L)",
          value:"33",
        },
        {
          label:"Dung tích khoang hành lý (L)",
          value:"N / A",
        },
        {
          label:"Động cơ xăng Loại động cơ",
          value:"3NR-VE",
        },
        {
          label:"Số xy lanh",
          value:"4",
        },
        {
          label:"Bố trí xy lanh",
          value:"Thẳng hàng / In line",
        },
        {
          label:"Dung tích xy lanh (cc)",
          value:"1197",
        },
        {
          label:"Hệ thống nhiên liệu",
          value:"Phun xăng điện tử / Electronic fuel injection",
        },
        {
          label:"Loại nhiên liệu",
          value:"Xăng / Petrol",
        },
        {
          label:"Công suất tối đa ((KW) HP / vòng / phút)",
          value:"(65)87 / 6000",
        },
        {
          label:"Mô men xoắn tối đa (Nm / vòng / phút)",
          value:"108 / 4200",
        },
        {
          label:"Hệ thống truyền động  ",
          value:"Dẫn động cầu trước / FWD",
        },
        {
          label:"Hộp số  ",
          value:"Số sàn 5 cấp / 5MT",
        },
        {
          label:"Hệ thống treo Trước",
          value:"Mc Pherson",
        },
        {
          label:"Sau",
          value:"Trục xoắn bán độc lập với lò xo cuộn / Semi Independent Torsion Axle Beam with Coil Spring",
        },
        {
          label:"Hệ thống lái Trợ lực tay lái",
          value:"Điện / Electric",
        },
        {
          label:"Vành & lốp xe Loại vành",
          value:"Hợp kim / Alloy",
        },
        {
          label:"Kích thước lốp",
          value:"175 / 65 R14",
        },
        {
          label:"Lốp dự phòng",
          value:"Vành thép / Steel",
        },
        {
          label:"Phanh Trước",
          value:"Phanh đĩa / Disc",
        },
        {
          label:"Sau",
          value:"Tang trống / Drum",
        },
        {
          label:"Tiêu chuẩn khí thải  ",
          value:"Euro 4",
        },
        {
          label:"Tiêu thụ nhiên liệu Trong đô thị (L / 100km)",
          value:"6,8",
        },
        {
          label:"Ngoài đô thị (L / 100km)",
          value:"4,21",
        },
        {
          label:"Kết hợp (L / 100km)",
          value:"5,16",
        },
        {
          label:"Cụm đèn trước  ",
          value:"Halogen",
        },
        {
          label:"Cụm đèn trước Đèn chiếu gần",
          value:"Dạng bóng chiếu / Projector",
        },
        {
          label:"Đèn chiếu xa",
          value:"Phản xạ đa chiều / Reflector",
        },
        {
          label:"Đèn chiếu sáng ban ngày",
          value:"Không có / Without",
        },
        {
          label:"Hệ thống cân bằng góc chiếu",
          value:"Không có / Without",
        },
        {
          label:"Cụm đèn sau  ",
          value:"LED",
        },
        {
          label:"Đèn báo phanh trên cao  ",
          value:"LED",
        },
        {
          label:"Đèn sương mù Trước",
          value:"Có / With",
        },
        {
          label:"Sau",
          value:"Không có / Without",
        },
        {
          label:"Gương chiếu hậu ngoài Chức năng điều chỉnh điện",
          value:"Có / With",
        },
        {
          label:"Chức năng gập điện",
          value:"Có / With",
        },
        {
          label:"Tích hợp đèn báo rẽ",
          value:"Có / With",
        },
        {
          label:"Màu",
          value:"Cùng màu thân xe / Body color",
        },
        {
          label:"Gạt mưa Trước",
          value:"Gián đoạn / Intermittent",
        },
        {
          label:"Sau",
          value:"Gián đoạn / Intermittent",
        },
        {
          label:"Chức năng sấy kính sau  ",
          value:"	Có / With",
        },
        {
          label:"Ăng ten  ",
          value:"Dạng thường / Pillar",
        },
        {
          label:"Tay nắm cửa ngoài  ",
          value:"Cùng màu thân xe / Body color",
        },
        {
          label:"Cánh hướng gió sau  ",
          value:"Có / With",
        },
        {
          label:"Tay lái Loại tay lái",
          value:"3 chấu / 3-spoke",
        },
        {
          label:"Trợ lực",
          value:"Điện / EPS",
        },
        {
          label:"Chất liệu",
          value:"Nhựa / Urethane",
        },
        {
          label:"Nút bấm điều khiển tích hợp",
          value:"Hệ thống âm thanh / Audio system",
        },
        {
          label:"Điều chỉnh",
          value:"Không có / Without",
        },
        {
          label:"Gương chiếu hậu trong  ",
          value:"2 chế độ ngày và đêm / Day & night",
        },
        {
          label:"Tay nắm cửa trong  ",
          value:"Mạ bạc / Silver plating",
        },
        {
          label:"Cụm đồng hồ Loại đồng hồ",
          value:"Digital",
        },
        {
          label:"Đèn báo Eco",
          value:"Có / With",
        },
        {
          label:"Chức năng báo lượng tiêu thụ nhiên liệu",
          value:"Có / With",
        },
        {
          label:"Chức năng báo vị trí cần số",
          value:"Không có / Without",
        },
        {
          label:"Màn hình hiển thị đa thông tin",
          value:"Có / With",
        },
        {
          label:"Nhắc nhở đèn bật",
          value:"Có / With",
        },
        {
          label:"Đèn cảnh báo thắt dây an toàn",
          value:"D only / Ghế lái",
        },
        {
          label:"Đèn cảnh báo cửa mở",
          value:"Có / With",
        },
        {
          label:"Chất liệu bọc ghế  ",
          value:"Nỉ / Fabric",
        },
        {
          label:"Ghế trước Điều chỉnh ghế lái",
          value:"Chỉnh tay 4 hướng / 4 way manual",
        },
        {
          label:"Điều chỉnh ghế hành khách",
          value:"	Chỉnh tay 4 hướng / 4 way manual",
        },
        {
          label:"Túi đựng đồ sau lưng ghế",
          value:"Có / With",
        },
        {
          label:"Ghế sau Hàng ghế thứ hai",
          value:"Gập hoàn toàn / United fold",
        },
        {
          label:"Hệ thống điều hòa  ",
          value:"Manual with Max cool mode / Chỉnh tay với chế độ Max Cool",
        },
        {
          label:"Hệ thống âm thanh Đầu đĩa",
          value:"	Màn hình cảm ứng 7inch",
        },
        {
          label:"Số loa",
          value:"4",
        },
        {
          label:"Cổng kết nối AUX",
          value:"Không / Without",
        },
        {
          label:"Cổng kết nối USB",
          value:"Có / With",
        },
        {
          label:"Kết nối Bluetooth",
          value:"Có / With",
        },
        {
          label:"Điều khiển giọng nói",
          value:"Không / Without",
        },
        {
          label:"Kết nối wifi",
          value:"Không / Without",
        },
        {
          label:"Kết nối điện thoại thông minh / Smartphone connectivity",
          value:"Không / Without",
        },
        {
          label:"Chìa khóa thông minh & Khởi động bằng nút bấm  ",
          value:"Có / With",
        },
        {
          label:"Khóa cửa điện  ",
          value:"Có / With",
        },
        {
          label:"Chức năng khóa cửa từ xa  ",
          value:"Có / With",
        },
        {
          label:"Cửa sổ điều chỉnh điện  ",
          value:"Có (tự động xuống bên lái) / With (D: auto down)",
        },
        {
          label:"Hệ thống báo động  ",
          value:"Có / With",
        },
        {
          label:"Hệ thống mã hóa khóa động cơ ",
          value:"Có / With",
        },
        {
          label:"Hệ thống mở khóa cần số  ",
          value:"Không có / Without",
        },
        {
          label:"Hệ thống chống bó cứng phanh (ABS)  ",
          value:"Có / With",
        },
        {
          label:"Hệ thống phân phối lực phanh điện tử (EBD)",
          value:"Có / With",
        },
        {
          label:"Camera lùi  ",
          value:"Có / With",
        },
        {
          label:"Cảm biến hỗ trợ đỗ xe Sau",
          value:"2",
        },
        {
          label:"Túi khí Túi khí người lái & hành khách phía trước",
          value:"Có / With",
        },
        {
          label:"Dây đai an toàn",
          value:"3 điểm ELR, 5 vị trí / 3 P ELR x5",
        },
        {
          label:"Khóa cửa an toàn  ",
          value:"Hàng ghế sau / Rear only",
        },
        {
          label:"Khóa an toàn trẻ em  ",
          value:"	ISO FIX",
        }
      ]
     },
     {
       brand: 'Toyota Wigo 4AT',
       price: 385000000
     }
  ]

}
