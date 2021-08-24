import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaLandCruiser implements CarInfoInterface {
  name = 'Toyota Land Cruiser'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/land-cruiser.png'
  banner = 'assets/img/toyota/land-cruiser/banner.jpg'
  models = [
    {
      brand: 'Toyota Land Cruiser',
      price: 4060000000,
      lingo: 'UY LỰC THỐNG LĨNH',
      seats: 7,
      type: 'SUV',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động 10 cấp'],
      library:[
        '/assets/img/toyota/land-cruiser/library/1pvocz.jpg',
        '/assets/img/toyota/land-cruiser/library/135uni.jpg',      
        '/assets/img/toyota/land-cruiser/library/in5dcb.jpg',
        '/assets/img/toyota/land-cruiser/library/pyhvks.jpg'
      ],
      colors:[
        {
          label: 'Đen - 202',
          image: '/assets/img/toyota/land-cruiser/colors/Den-202.png',
          colorCode: '#171717'
        },
        {
          label: 'Trắng - 070',
          image: '/assets/img/toyota/land-cruiser/colors/Trang-070.png',
          colorCode: 'white'
        },
        {
          label: 'Bạc - 1F7',
          image: '/assets/img/toyota/land-cruiser/colors/Bac-1F7.png',
          colorCode: '#e8e8e8'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/land-cruiser/colors/Den-218.png',
          colorCode: '#050505'
        },
        {
          label: 'Đồng - 4V8',
          image: '/assets/img/toyota/land-cruiser/colors/Dong-4V8.png',
          colorCode: '#b6b3af'
        },
        {
          label: 'Xám - 1G3',
          image: '/assets/img/toyota/land-cruiser/colors/Xam-1G3.png',
          colorCode: '#646464'
        },
        {
          label: 'Xanh - 8X8',
          image: '/assets/img/toyota/land-cruiser/colors/xanh-8X8.png',
          colorCode: '#19222e'
        }
      ],
      ngoaiThat: {
        label: 'KIÊU HÃNH VƯỢT TRỘI',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/land-cruiser/ngoai-that/kmyctu.jpg',
        features: [
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/1kbd04.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/4bsgty.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/eiwvpq.jpg',
            label: 'Cửa sổ trời'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/fu2kbx.jpg',
            label: 'Gương chiếu hậu'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/huckfk.jpg',
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/jjlksj.jpg',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/zdq5jm.jpg',
            label: 'Cụm đèn sau'
          }
        ]
      },
      noiThat: {
        label: 'NỘI THẤT TIỆN NGHI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/land-cruiser/noi-that/cyi4qr.jpg',
        features: [
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/2hkpkf.jpg',
            label: 'Hệt thống sưởi và thông gió'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/3da3it.jpg',
            label: 'Điều hòa tự động phía sau'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/d0cylm.jpg',
            label: 'Bố trí ghê ngồi'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/ifciee.jpg',
            label: 'Màn hình giải trí'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/wirt1u.jpg',
            label: 'Bảng đồng hồ'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/0jm1hm.jpg",
          title: "Hệ thống khởi hành ngang dốc HAC",
          message: "Khi khởi hành trên dốc cao, hệ thống hỗ trợ khởi hành ngang dốc sẽ lập tức tự động phanh các bánh xe khi người lái chuyển từ chân phanh sang chân ga, giúp xe không bị trôi dốc."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/5fwtco.jpg",
          title: "Hệ thống cân bằng điện tử VSC",
          message: "Hệ thống kiểm soát ổn định xe VSC tự động giảm công suất động cơ và tự động phanh ở các bánh xe trước và sau khi có hiện tượng thiếu lái và lái quá đà lúc vào cua nhằm ngăn ngừa hiện tượng chệch hướng."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/asja0a.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/ir2u24.jpg",
          title: "Hệ thống khóa cửa và khởi động thông minh",
          message: "Hệ thống khóa cửa thông mình và khởi động bằng nút bấm mang đến ự tiện lợi khi ra vào xe và khởi động động cơ."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/kiwwtg.jpg",
          title: "Hệ thống túi khí",
          message: "Hệ thống túi khí bảo vệ hành khách trong trường hợp xảy ra va chạm có thể gây nguy hiểm."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/piyuya.jpg",
          title: "Hệ thống cảm ứng an toàn 2.0",
          message: "Tích hợp tính năng an toàn 2.0 đảm bảo an toàn cho hành khách."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/jzzwib.jpg",
          title: "Hệ thống lựa chọn địa hình",
          message: "Cho phép chọn lựa các chế độ lái phù hợp với các địa hình khác nhau, làm tăng khả năng bám đường và độ ổn định xe."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/rf3hfr.jpg",
          title: "Động cơ 3.5 V6 Turbo",
          message: "Trang bị động cơ dung tích 3.5L V6 Tubor với công suất vượt trội cùng với các công nghệ tiên tiến mang lại trải nghiệm và tiết kiệm nhiên liệu."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/t4oqff.jpg",
          title: "Hệ thống số tự động 10 cấp",
          message: "Hệ thống số tự động 10 cấp đảm bảo khả năng vận hành mượt mà trên mọi địa hình."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/v2mfbo.jpg",
          title: "Hệ thống kiểm soát hành trình",
          message: "Hệ thống giúp người lái có thẻ cài đặt một vận tốc không đổi, tiện lợi và hữu tích khi chạy xe trên cao tốc hoặc đường ít xe."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/zp4z6r.jpg",
          title: "Hệ thống chống bó cứng phanh (ABS)",
          message: "Khi được kích hoạt bằng cách đạp phanh dứt khoát, hệ thống chống bó cứng phanh ABS sẽ tự động nhấp nhả phanh liên tục, giúp các bánh xe không bị bó cứng, cho phép người lái duy trì khả năng điều khiển xe tránh chướng ngại vật và đảm bảo ổn định thân xe."
        }

      ],
      thongSo: [
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)	",value:"	4965 x 1980 x 1945	"},
        {label:"	Chiều dài cơ sở (mm)	",value:"	2850	"},
        {label:"	Chiều rộng cơ sở (Trước/sau) (mm)	",value:"	1665/1670	"},
        {label:"	Khoảng sáng gầm xe (mm)	",value:"	235	"},
        {label:"	Góc thoát (Trước/Sau) (độ/degree)	",value:"	32/24	"},
        {label:"	Bán kính vòng quay tối thiểu (m)	",value:"	5,9	"},
        {label:"	Trọng lượng không tải (kg)	",value:"	2520	"},
        {label:"	Trọng lượng toàn tải (kg)	",value:"	3230	"},
        {label:"	Dung tích bình nhiên liệu (L)	",value:"	93L	"},
        {label:"	Động cơ xăng Loại động cơ	",value:"	V35A-FTS, V6, tăng áp kép/ V35A-FTS, 6 cylinders, V arrangement, twin turbo charger	"},
        {label:"	Dung tích xy lanh (cc)	",value:"	3445	"},
        {label:"	Công suất tối đa ((KW) HP/ vòng/phút)	",value:"	(305) 409 / 5200	"},
        {label:"	Mô men xoắn tối đa (Nm/vòng/phút)	",value:"	650 / 2000 - 3600	"},
        {label:"	Hệ thống truyền động	",value:"	4 bánh toàn thời gian/Full-time 4WD	"},
        {label:"	Hộp số	",value:"	Tự động 10 cấp/10AT	"},
        {label:"	Hệ thống treo Trước	",value:"	Hệ thống treo động lực học độc lập tay đòn kép/ IFS, Kinetic Dynamic Suspension System	"},
        {label:"	Sau	",value:"	Hệ thống treo động lực học liên kết 4 điểm/ 4-link	"},
        {label:"	Hệ thống lái	",value:"	Thủy lực biến thiên theo tốc độ & Bộ chấp hành hệ thống lái/ HPS, Steer act	"},
        {label:"	Vành & lốp xe Loại vành	",value:"	Mâm đúc 18 inch/ Alloy 18 inch	"},
        {label:"	Kích thước lốp	",value:"	265/65R18	"},
        {label:"	Lốp dự phòng	",value:"	Như lốp chính/ Ground tire	"},
        {label:"	PhanhTrước	",value:"	Đĩa thông gió/ Ventilated disc	"},
        {label:"	Sau	",value:"	Đĩa thông gió/ Ventilated disc	"},
        {label:"	Tiêu chuẩn khí thải	",value:"	Euro 5, OBD	"},
        {label:"	Cụm đèn trướcĐèn chiếu gần	",
        value:"	LED	"},
        {label:"	Đèn chiếu xa	",
        value:"	LED	"},
        {label:"	Đèn chiếu sáng ban ngày	",
        value:"	LED	"},
        {label:"	Đèn xi nhan tuần tự	",
        value:"	Có / With	"},
        {label:"	Tự động bật/tắt	",
        value:"	Có / With	"},
        {label:"	Hệ thống nhắc nhở đèn sáng	",
        value:"	Có / With	"},
        {label:"	Hệ thống cân bằng góc chiếu	",
        value:"	Có (tự động)/ With (auto)	"},
        {label:"	Cụm đèn sau	",
        value:"	LED	"},
        {label:"	Đèn báo phanh trên cao	",
        value:"	LED	"},
        {label:"	Đèn sương mùTrước	",
        value:"	LED	"},
        {label:"	Sau	",
        value:"	LED	"},
        {label:"	Gương chiếu hậu ngoàiChức năng điều chỉnh điện	",
        value:"	Có / With	"},
        {label:"	Chức năng gập điện	",
        value:"	Có (tự động) / With (auto)	"},
        {label:"	Tích hợp đèn chào mừng	",
        value:"	Có / With	"},
        {label:"	Tích hợp đèn báo rẽ	",
        value:"	Có / With	"},
        {label:"	Màu	",
        value:"	Cùng màu thân xe	"},
        {label:"	Chức năng tự điều chỉnh khi lùi	",
        value:"	Có / With	"},
        {label:"	Chức năng sấy gương	",
        value:"	Có / With	"},
        {label:"	Chức năng chống chói tự động	",
        value:"	Có / With	"},
        {label:"	Gạt mưaTrước	",
        value:"	Tự động / Auto	"},
        {label:"	Sau	",
        value:"	Gián đoạn theo thời gian / Intermittent	"},
        {label:"	Thanh giá nóc	",
        value:"	Có / With	"},
        {label:"	Tay lái Loại tay lái	",value:"	3 chấu / 3 spokes	"},
        {label:"	Chất liệu	",value:"	Da ốp gỗ / Leather & wood	"},
        {label:"	Nút bấm điều khiển tích hợp	",value:"	Tích hợp chế độ đàm thoại rảnh tay, điều chỉnh âm thanh, MID, điều khiển hành trình thích ứng, cảnh báo lệch làn/ Telephone, Audio, MID, DRCC, LDA	"},
        {label:"	Điều chỉnh	",value:"	Chỉnh điện 4 hướng/ E-tilt & Telescopic adjustable	"},
        {label:"	Gương chiếu hậu trong	",value:"	Chống chói tự động/ Electrochromic	"},
        {label:"	Cụm đồng hồ Loại đồng hồ	",value:"	Optitron	"},
        {label:"	Đèn báo Eco	",value:"	Có / With	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu	",value:"	Có / With	"},
        {label:"	Màn hình hiển thị đa thông tin	",value:"	7	"},
        {label:"	Cửa sổ trời	",value:"	Có / With	"},
        {label:"	Hệ thống âm thanh Màn hình giải trí trung tâm	",value:"	12.3, chạm đa điểm	"},
        {label:"	Màn hình đa địa hình	",value:"	Có / With	"},
        {label:"	Số loa	",value:"	14 JBL	"},
        {label:"	Cổng kết nối USB	",value:"	Có / With	"},
        {label:"	Kết nối Bluetooth	",value:"	Có / With	"},
        {label:"	Kết nối điện thoại thông minh	",value:"	Có / With	"},
        {label:"	Hệ thống điều hòa	",value:"	Tự động 4 vùng độc lập	"},
        {label:"	Cổng sạc	",value:"	Có / With (5)	"},
        {label:"	Chất liệu bọc ghế	",
        value:"	Da cao cấp / Premium leather	"},
        {label:"	Ghế trướcĐiều chỉnh ghế lái	",
        value:"	Chỉnh điện 10 hướng, sưởi ghế, thông gió / 10-way power adjust, heater, ventilation	"},
        {label:"	Điều chỉnh ghế hành khách	",
        value:"	Chỉnh điện 8 hướng, sưởi ghế, thông gió / 8-way power adjust, heater, ventilation	"},
        {label:"	Bộ nhớ vị trí	",
        value:"	Có / With	"},
        {label:"	Chức năng thông gió	",
        value:"	Có / With	"},
        {label:"	Ghế sauHàng ghế thứ hai	",
        value:"	40:20:40, thông gió, ngả lưng/ 40:20:40, ventilation, recline	"},
        {label:"	Hàng ghế thứ ba	",
        value:"	50:50, ngả/gập điện/ 50:50, power recline/fold	"},
        {label:"	Tính năng hỗ trợ ra vào xe	",value:"	Có/ With	"},
        {label:"	Cửa hậu điều khiển điện và mở cốp rảnh tay	",value:"	Có/ With	"},
        {label:"	Tích hợp chế độ lái thể thao	",value:"	3 chế độ / 3 modes/ (Eco / Normal / Sport)	"},
        {label:"	Hệ thống chống ồn chủ động	",value:"	Có/ With	"},
        {label:"	Hệ thống hỗ trợ khi vào cua	",value:"	Có/ With	"},
        {label:"	Hộp làm mát	",value:"	Có / with	"},
        {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm	",value:"	Có / With	"},
        {label:"	Chức năng mở cửa thông minh	",value:"	Có / With	"},
        {label:"	Phanh tay điện tử	",value:"	Có / With	"},
        {label:"	Hệ thống dẫn đường	",value:"	Có / With	"},
        {label:"	Cửa sổ điều chỉnh điện	",value:"	Có (tự động lên/xuống, chống kẹt tất cả các cửa) /With (auto& jam protection at all windows)	"},
        {label:"	Cửa hậu điều khiển điện	",value:"	Có / With	"},
        {label:"	Hệ thống báo động	",value:"	Có/ With	"},
        {label:"	Hệ thống mã hóa khóa động cơ	",value:"	Có / With	"},
        {label:"	Hệ thống an toàn Toyota (Toyota Safety Sense)Cảnh báo tiền va chạm (PCS)	",
        value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ theo dõi làn đường (LTA)	",
        value:"	Có/ With	"},
        {label:"	Điều khiển hành trình chủ động (DRCC)	",
        value:"	Có / With	"},
        {label:"	Đèn chiếu xa tự động (AHB)	",
        value:"	Có / With	"},
        {label:"	Chức năng hỗ trợ vượt địa hình	",
        value:"	Có/ With	"},
        {label:"	Camera phát hiện người phía sau	",
        value:"	Có / With	"},
        {label:"	Hệ thống kiểm soát tích hợp động lực học (VDIM)	",
        value:"	Có / With	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)	",
        value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)	",
        value:"	Có / With	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)	",
        value:"	Có / With	"},
        {label:"	Hệ thống cân bằng điện tử (VSC)	",
        value:"	Có / With	"},
        {label:"	Hệ thống kiểm soát lực kéo chủ động (A-TRC)	",
        value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)	",
        value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ đổ đèo (DAC)	",
        value:"	Có / With	"},
        {label:"	Hệ thống cảnh báo áp suất lốp (TPMS)	",
        value:"	Có / With	"},
        {label:"	Hệ thống lựa chọn đa địa hình (MTS)	",
        value:"	Có / With (Auto, Dirt, Sand, Mud, Deep Snow)	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)	",
        value:"	Có / With	"},
        {label:"	Hệ thống cảnh báo điểm mù (BSM)	",
        value:"	Có / With	"},
        {label:"	Hệ thống cảnh báo phương tiện cắt ngang phía sau (RCTA)	",
        value:"	Có / With	"},
        {label:"	Cảm biến hỗ trợ đỗ xeTrước	",
        value:"	Có / With	"},
        {label:"	Sau	",
        value:"	Có / With	"},
        {label:"	Góc trước	",
        value:"	Có / With	"},
        {label:"	Góc sau	",
        value:"	Có / With	"},
        {label:"	Túi khí Số lượng túi khí	",value:"	10	"},
        {label:"	Túi khí người lái & hành khách phía trước	",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía trước & hàng ghế thứ 2	",value:"	Có / With	"},
        {label:"	Túi khí rèm	",value:"	Có / With	"},
        {label:"	Túi khí đầu gối người lái và hành khách	",value:"	Có / With	"},
        {label:"	Dây đai an toàn Hàng ghế trước	",value:"	Dây đai 3 điểm, căng đai, hạn chế lực căng khẩn cấp/ 3P ELR, pretension, force limit	"},
        {label:"	Hàng ghế thứ 2	",value:"	3 điểm, hạn chế lực căng khẩn cấp/ 3P ELR, force limit	"},
        {label:"	Hàng ghế thứ 3	",value:"	3 điểm, hạn chế lực căng khẩn cấp/ 3P ELR, force limit	"},
        {label:"	Trục lái có cơ cấu hấp thụ lực khi va đập	",value:"	Có / With	"}
      ]
    }
  ]
}
