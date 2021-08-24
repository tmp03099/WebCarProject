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
      price: 2379000000,
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
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)	",value:"	4840 x 1885 x 1845	"},
        {label:"	Chiều dài cơ sở (mm)	",value:"	2790	"},
        {label:"	Chiều rộng cơ sở (Trước/sau) (mm)	",value:"	1585/1585	"},
        {label:"	Khoảng sáng gầm xe (mm)	",value:"	215	"},
        {label:"	Bán kính vòng quay tối thiểu (m)	",value:"	5.8	"},
        {label:"	Trọng lượng không tải (kg)	",value:"	2030-2190	"},
        {label:"	Trọng lượng toàn tải (kg)	",value:"	2850	"},
        {label:"	Dung tích bình nhiên liệu (L)	",value:"	87	"},
        {label:"	Động cơ xăng Loại động cơ	",value:"	2TR-FE, 4 xi lanh thẳng hàng, 16 van, DOHC, Dual VVT-i/2TR-FE, 4 in-line cylinders, 16 valve DOHC, Dual VVT-i	"},
        {label:"	Dung tích xy lanh (cc)	",value:"	2694	"},
        {label:"	Loại nhiên liệu	",value:"	Xăng/Petrol	"},
        {label:"	Công suất tối đa ((KW) HP/ vòng/phút)	",value:"	(120)164 / 5200	"},
        {label:"	Mô men xoắn tối đa (Nm/vòng/phút)	",value:"	246/3900	"},
        {label:"	Tốc độ tối đa	",value:"	160	"},
        {label:"	Tiêu chuẩn khí thải	",value:"	Euro 5	"},
        {label:"	Hệ thống truyền động	",value:"	4 bánh toàn thời gian/Full-time 4WD	"},
        {label:"	Hộp số	",value:"	Số tự động 6 cấp/6AT	"},
        {label:"	Hệ thống treo Trước	",value:"	Độc lập, tay đòn kép/Double wishbone	"},
        {label:"	Sau	",value:"	Phụ thuộc, liên kết đa điểm/Mutiple link	"},
        {label:"	Hệ thống lái Trợ lực tay lái	",value:"	Thủy lực/Hydraulic	"},
        {label:"	Hệ thống tay lái tỉ số truyền biến thiên (VGRS)	",value:"	Biến thiên theo tốc độ/Variable Gear Ratio Steering System	"},
        {label:"	Vành & lốp xe Loại vành	",value:"	Mâm đúc/Alloy	"},
        {label:"	Kích thước lốp	",value:"	265/60R18	"},
        {label:"	Lốp dự phòng	",value:"	Có/With	"},
        {label:"	Phanh Trước	",value:"	Đĩa thông gió/Ventilated discs	"},
        {label:"	Sau	",value:"	Đĩa thông gió/Ventilated discs	"},
        {label:"	Tiêu thụ nhiên liệu Trong đô thị (L/100km)	",value:"	15.41	"},
        {label:"	Ngoài đô thị (L/100km)	",value:"	9.75	"},
        {label:"	Kết hợp (L/100km)	",value:"	11.83	"},
        {label:"	Cụm đèn trước Đèn chiếu gần	",value:"	LED dạng bóng chiếu/ LED projector	"},
        {label:"	Đèn chiếu xa	",value:"	LED phản xạ đa hướng/ LED multi reflector	"},
        {label:"	Đèn chiếu sáng ban ngày	",value:"	LED	"},
        {label:"	Chế độ điều khiển đèn tự động	",value:"	Chế độ tự ngắt/Auto cut	"},
        {label:"	Hệ thống nhắc nhở đèn sáng	",value:"	Có, tự động ngắt/With, auto cut	"},
        {label:"	Hệ thống cân bằng góc chiếu	",value:"	Tự động, loại chủ động/Auto, proactive type	"},
        {label:"	Cụm đèn sau	",value:"	LED	"},
        {label:"	Đèn báo phanh trên cao	",value:"	LED	"},
        {label:"	Đèn sương mù Trước	",value:"	Có/With	"},
        {label:"	Sau	",value:"	Có/With	"},
        {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện	",value:"	Có/With	"},
        {label:"	Chức năng gập điện	",value:"	Có/With	"},
        {label:"	Tích hợp đèn báo rẽ	",value:"	Có/With	"},
        {label:"	Màu	",value:"	Cùng màu thân xe/Body colored	"},
        {label:"	Chức năng sấy gương	",value:"	Có/With	"},
        {label:"	Gạt mưa Trước	",value:"	Cảm biến tự động/Rain sensor	"},
        {label:"	Sau	",value:"	Có/With	"},
        {label:"	Ăng ten	",value:"	Tích hợp trên kính hậu/Back glass integrated	"},
        {label:"	Tay nắm cửa ngoài	",value:"	Cùng màu thân xe/Body colored	"},
        {label:"	Lưới tản nhiệt Trước	",value:"	Mạ crôm/Chrome plating	"},
        {label:"	Sau	",value:"	Cùng màu thân xe/Body colored	"},
        {label:"	Chắn bùn	",value:"	Có/With	"},
        {label:"	Tay lái Loại tay lái	",value:"	4 chấu/4-spoke	"},
        {label:"	Chất liệu	",value:"	Bọc da/Leather	"},
        {label:"	Nút bấm điều khiển tích hợp	",value:"	Có/With	"},
        {label:"	Điều chỉnh	",value:"	Chỉnh tay 4 hướng/Manual tilt & telescopic	"},
        {label:"	Gương chiếu hậu trong	",value:"	Chống chói tự động/ Electrochromic	"},
        {label:"	Tay nắm cửa trong	",value:"	Bạc/Silver	"},
        {label:"	Cụm đồng hồ Loại đồng hồ	",value:"	Optitron	"},
        {label:"	Đèn báo Eco	",value:"	Có/With	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu	",value:"	Có/With	"},
        {label:"	Chức năng báo vị trí cần số	",value:"	Có/With	"},
        {label:"	Màn hình hiển thị đa thông tin	",value:"	Màn hình màu/TFT display	"},
        {label:"	Hệ thống âm thanh Màn hình giải trí trung tâm	",value:"	Màn hình cảm ứng	"},
        {label:"	Số loa	",value:"	9	"},
        {label:"	Cổng kết nối USB	",value:"	Có/With	"},
        {label:"	Kết nối Bluetooth	",value:"	Có/With	"},
        {label:"	Hệ thống đàm thoại rảnh tay	",value:"	Có/With	"},
        {label:"	Kết nối điện thoại thông minh	",value:"	Có/With	"},
        {label:"	Hệ thống điều hòa Hệ thống điều hòa (Tự động/Auto)	",value:"	Tự động 3 vùng độc lập, cửa gió cho cả 3 hàng ghế/Automatic, 3 zone, with air vents for all seat rows	"},
        {label:"	Chất liệu bọc ghế	",value:"	Da/Leather	"},
        {label:"	Ghế trước Điều chỉnh ghế lái	",value:"	Chỉnh điện 10 hướng/10 way power adjustable	"},
        {label:"	Điều chỉnh ghế hành khách	",value:"	Chỉnh điện 4 hướng/4 way power adjustable	"},
        {label:"	Chức năng thông gió	",value:"	Có/With	"},
        {label:"	Chức năng sưởi	",value:"	Có/With	"},
        {label:"	Ghế sau Hàng ghế thứ hai	",value:"	Gập 40:20:40/40:20:40 fold	"},
        {label:"	Hàng ghế thứ ba	",value:"	Gập điện phẳng 50:50/50:50 flat elec fold	"},
        {label:"	Tựa tay hàng ghế sau	",value:"	Khay đựng ly/Glass tray	"},
        {label:"	Cửa gió sau	",value:"	Có/With	"},
        {label:"	Hộp làm mát	",value:"	Có/With	"},
        {label:"	Khóa cửa điện	",value:"	Có (điều chỉnh & tự động, khóa cửa điện kép)/With (Driver switch & speed auto, double lock)	"},
        {label:"	Chức năng khóa cửa từ xa	",value:"	Có/With	"},
        {label:"	Cửa sổ điều chỉnh điện	",value:"	Có (tự động lên/xuống, chống kẹt tất cả các cửa)/With (Auto & jam protection for all windows)	"},
        {label:"	Ga tự động	",value:"	Có/With	"},
        {label:"	Hệ thống báo động	",value:"	Có/With	"},
        {label:"	Hệ thống mã hóa khóa động cơ	",value:"	Có (với còi báo động)/With (Alarm)	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)	",value:"	Có/With	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)	",value:"	Có/With	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)	",value:"	Có/With	"},
        {label:"	Hệ thống cân bằng điện tử (VSC)	",value:"	Có/With	"},
        {label:"	Hệ thống kiểm soát lực kéo chủ động (A-TRC)	",value:"	Có/With	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)	",value:"	Có/With	"},
        {label:"	Camera lùi	",value:"	Có/With	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau	",value:"	Có/With	"},
        {label:"	Túi khí Số lượng túi khí	",value:"	7	"},
        {label:"	Túi khí người lái & hành khách phía trước	",value:"	Có/With	"},
        {label:"	Túi khí bên hông phía trước	",value:"	Có/With	"},
        {label:"	Túi khí rèm	",value:"	Có/With	"},
        {label:"	Túi khí đầu gối người lái	",value:"	Có/With	"},
        {label:"	Khung xe GOA	",value:"	Có/With	"},
        {label:"	Dây đai an toàn	",value:"	3 điểm ELR, 7 vị trí/3 points ELRx7	"}
      ]
    }
  ]
}
