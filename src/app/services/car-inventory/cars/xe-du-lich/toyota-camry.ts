import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";
import { ThongSo } from "../../interfaces/thong-so.interface";

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
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	4885x 1840 x 1445	"},
        {label:"	Chiều dài cơ sở (mm)		",value:"	2825	"},
        {label:"	Chiều rộng cơ sở (Trước/sau) (mm)		",value:"	1590/1615	"},
        {label:"	Khoảng sáng gầm xe (mm)		",value:"	140	"},
        {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	5,7	"},
        {label:"	Trọng lượng không tải (kg)		",value:"	1520	"},
        {label:"	Trọng lượng toàn tải (kg)		",value:"	2030	"},
        {label:"	Dung tích bình nhiên liệu (L)		",value:"	60	"},
        {label:"	Động cơ xăng Loại động cơ		",value:"	6AR-FSE, 4 xy lanh thẳng hàng, 16 van, DOHC, VVT-iW (Van nạp) & VVT-i (Van xả), Phun xăng trực tiếp D-4S	"},
        {label:"	Số xy lanh		",value:"	4	"},
        {label:"	Bố trí xy lanh		",value:"	Thẳng hàng	"},
        {label:"	Dung tích xy lanh (cc)		",value:"	1998	"},
        {label:"	Hệ thống nhiên liệu		",value:"	Phun xăng đa điểm	"},
        {label:"	Loại nhiên liệu		",value:"	Xăng không chì	"},
        {label:"	Công suất tối đa ((KW) HP/ vòng/phút)		",value:"	123/6500	"},
        {label:"	Mô men xoắn tối đa (Nm/vòng/phút)		",value:"	199/4600	"},
        {label:"	Tiêu chuẩn khí thải		",value:"	Euro 4	"},
        {label:"	Chế độ lái (công suất cao/tiết kiệm nhiên liệu)  		",value:"	1 chế độ (Thường)	"},
        {label:"	Hệ thống truyền động  		",value:"	Cầu trước, dẫn động bánh trước	"},
        {label:"	Hộp số  		",value:"	Số tự động 6 cấp	"},
        {label:"	Hệ thống treo Trước		",value:"	Mc Pherson/McPherson Struts	"},
        {label:"	Sau		",value:"	Double Wishbone	"},
        {label:"	Vành & lốp xe Loại vành		",value:"	Mâm đúc	"},
        {label:"	Kích thước lốp		",value:"	215/55R17	"},
        {label:"	Lốp dự phòng		",value:"	Full size spare tires (aluminum)	"},
        {label:"	Phanh Trước		",value:"	Đĩa tản nhiệt	"},
        {label:"	Sau		",value:"	Đĩa đặc	"},
        {label:"	Tiêu thụ nhiên liệu Trong đô thị (L/100km)		",value:"	10.23	"},
        {label:"	Ngoài đô thị (L/100km)		",value:"	6.5	"},
        {label:"	Kết hợp (L/100km)		",value:"	7.88	"},
        {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	Bi-LED dạng bóng chiếu	"},
        {label:"	Đèn chiếu xa		",value:"	Bi-LED dạng bóng chiếu	"},
        {label:"	Đèn chiếu sáng ban ngày		",value:"	LED	"},
        {label:"	Hệ thống rửa đèn		",value:"	Không có	"},
        {label:"	Chế độ điều khiển đèn tự động		",value:"	Có, chế độ tự ngắt	"},
        {label:"	Hệ thống nhắc nhở đèn sáng		",value:"	Có	"},
        {label:"	Hệ thống cân bằng đèn pha		",value:"	Không có	"},
        {label:"	Hệ thống cân bằng góc chiếu		",value:"	Tự động	"},
        {label:"	Chế độ đèn chờ dẫn đường		",value:"	Có	"},
        {label:"	Cụm đèn sau Đèn vị trí		",value:"	LED	"},
        {label:"	Đèn phanh		",value:"	LED	"},
        {label:"	Đèn báo rẽ		",value:"	Bóng thường	"},
        {label:"	Đèn lùi		",value:"	Bóng thường	"},
        {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
        {label:"	Đèn sương mù Trước		",value:"	Có (LED)	"},
        {label:"	Sau		",value:"	Không	"},
        {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có	"},
        {label:"	Chức năng gập điện		",value:"	Có	"},
        {label:"	Tích hợp đèn chào mừng		",value:"	Có	"},
        {label:"	Tích hợp đèn báo rẽ		",value:"	Có	"},
        {label:"	Chức năng tự điều chỉnh khi lùi		",value:"	Không có	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có	"},
        {label:"	Chức năng sấy gương		",value:"	Không có	"},
        {label:"	Chức năng chống bám nước		",value:"	Có	"},
        {label:"	Chức năng chống chói tự động		",value:"	Không có	"},
        {label:"	Gạt mưa Trước		",value:"	Gạt mưa tự động	"},
        {label:"	Sau		",value:"	Không có	"},
        {label:"	Chức năng sấy kính sau  		",value:"	Có, điều chỉnh thời gian	"},
        {label:"	Ăng ten  		",value:"	Kính sau	"},
        {label:"	Tay nắm cửa ngoài  		",value:"	Mạ crôm	"},
        {label:"	Chắn bùn  		",value:"	Không	"},
        {label:"	Ống xả kép  		",value:"	Không	"},
        {label:"	Cánh hướng gió nóc xe  		",value:"	Không	"},
        {label:"	Thanh đỡ nóc xe		",value:"	Có / With	"},
        {label:"	Tay lái Loại tay lái		",value:"	3 chấu	"},
        {label:"	Chất liệu		",value:"	Bọc da	"},
        {label:"	Nút bấm điều khiển tích hợp		",value:"	Có	"},
        {label:"	Điều chỉnh		",value:"	Chỉnh tay 4 hướng	"},
        {label:"	Lẫy chuyển số		",value:"	Không có	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có	"},
        {label:"	Gương chiếu hậu trong  		",value:"	Chống chói tự động	"},
        {label:"	Tay nắm cửa trong  		",value:"	Mạ crôm	"},
        {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Optitron	"},
        {label:"	Đèn báo Eco		",value:"	Có	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có	"},
        {label:"	Chức năng báo vị trí cần số		",value:"	Có	"},
        {label:"	Màn hình hiển thị đa thông tin		",value:"	TFT 4.2''	"},
        {label:"	Cửa sổ trời  		",value:"	Không có	"},
        {label:"	Hệ thống âm thanh Đầu đĩa		",value:"	DVD 1 đĩa, màn hình cảm ứng 7 inch	"},
        {label:"	Số loa		",value:"	6	"},
        {label:"	Cổng kết nối AUX		",value:"	Có	"},
        {label:"	Cổng kết nối USB		",value:"	Có	"},
        {label:"	Kết nối Bluetooth		",value:"	Có	"},
        {label:"	Hệ thống điều khiển bằng giọng nói		",value:"	Không có	"},
        {label:"	Bảng điều khiển từ hàng ghế sau		",value:"	Không có	"},
        {label:"	Kết nối wifi		",value:"	Không có	"},
        {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có	"},
        {label:"	Kết nối điện thoại thông minh		",value:"	Có	"},
        {label:"	Hệ thống điều hòa Trước		",value:"	Tự động 2 vùng độc lập	"},
        {label:"	Hệ thống sạc không dây  		",value:"	Không có	"},
        {label:"	Chất liệu bọc ghế  		",value:"	Da	"},
        {label:"	Ghế trước Loại ghế		",value:"	Thường	"},
        {label:"	Điều chỉnh ghế lái		",value:"	Chỉnh điện 10 hướng	"},
        {label:"	Điều chỉnh ghế hành khách		",value:"	Chỉnh điện 8 hướng	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có	"},
        {label:"	Chức năng thông gió		",value:"	Không có	"},
        {label:"	Chức năng sưởi		",value:"	Không có	"},
        {label:"	Ghế sau Hàng ghế thứ hai		",value:"	Cố định	"},
        {label:"	Hàng ghế thứ ba		",value:"	Không có	"},
        {label:"	Tựa tay hàng ghế sau		",value:"	Có Khay đựng ly + Nắp đậy	"},
        {label:"	Rèm che nắng kính sau  		",value:"	Chỉnh điện	"},
        {label:"	Rèm che nắng cửa sau  		",value:"	Không có	"},
        {label:"	Cửa gió sau  		",value:"	Có	"},
        {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Có	"},
        {label:"	Khóa cửa điện  		",value:"	Có (Tự động)	"},
        {label:"	Chức năng khóa cửa từ xa  		",value:"	Có	"},
        {label:"	Phanh tay điện tử  		",value:"	Có	"},
        {label:"	Hệ thống dẫn đường  		",value:"	Không có	"},
        {label:"	Hiển thị thông tin trên kính lái  		",value:"	Không có	"},
        {label:"	Cửa sổ điều chỉnh điện  		",value:"	Tự động lên/xuống tất cả các cửa	"},
        {label:"	Cốp điều khiển điện  		",value:"	Không	"},
        {label:"	Ga tự động  		",value:"	Không có	"},
        {label:"	Hệ thống báo động		",value:"	Có / With	"},
        {label:"	Hệ thống mã hóa khóa động cơ		",value:"	Có / With	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có	"},
        {label:"	Hệ thống ổn định thân xe  		",value:"	Có	"},
        {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có	"},
        {label:"	Hệ thống lựa chọn vận tốc vượt địa hình  		",value:"	Không có	"},
        {label:"	Hệ thống cảnh báo áp suất lốp (TPMS)  		",value:"	Có	"},
        {label:"	Hệ thống thích nghi địa hình (MTS)  		",value:"	Không có	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Có	"},
        {label:"	Hệ thống cảnh báo điểm mù (BSM)  		",value:"	Không có	"},
        {label:"	Hệ thống cảnh báo phương tiện cắt ngang phía sau  		",value:"	Không có	"},
        {label:"	Camera lùi  		",value:"	Có	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có	"},
        {label:"	Góc trước		",value:"	Có	"},
        {label:"	Góc sau		",value:"	Có	"},
        {label:"	Chức năng giữ phanh điện tử  		",value:"	Có	"},
        {label:"	Túi khí Túi khí người lái & hành khách phía trước		",value:"	Có	"},
        {label:"	Túi khí bên hông phía trước		",value:"	Có	"},
        {label:"	Túi khí rèm		",value:"	Có	"},
        {label:"	Túi khí bên hông phía sau		",value:"	Không có	"},
        {label:"	Túi khí đầu gối người lái		",value:"	Có	"},
        {label:"	Túi khí đầu gối hành khách		",value:"	Không có	"},
        {label:"	Khung xe GOA  		",value:"	Có	"},
        {label:"	Dây đai an toàn Trước		",value:"	3 điểm ELR, 5 vị trí	"},
        {label:"	Hàng ghế sau thứ nhất		",value:"	3 điểm ELR, 5 vị trí	"},
        {label:"	Ghế có cấu trúc giảm chấn thương cổ  		",value:"	Có	"},
        {label:"	Cột lái tự đổ  		",value:"	Có	"},
        {label:"	Bàn đạp phanh tự đổ  		",value:"	Có	"}
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
        ],
      },
      thongSo: [
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)	",value:"	4885x 1840 x 1445	"},
        {label:"	Chiều dài cơ sở (mm)	",value:"	2825	"},
        {label:"	Chiều rộng cơ sở (Trước/sau) (mm)	",value:"	1590/1615	"},
        {label:"	Khoảng sáng gầm xe (mm)	",value:"	140	"},
        {label:"	Bán kính vòng quay tối thiểu (m)	",value:"	5,7	"},
        {label:"	Trọng lượng không tải (kg)	",value:"	1520	"},
        {label:"	Trọng lượng toàn tải (kg)	",value:"	2030	"},
        {label:"	Dung tích bình nhiên liệu (L)	",value:"	60	"},
        {label:"	Động cơ xăng Loại động cơ	",value:"	6AR-FSE, 4 xy lanh thẳng hàng, 16 van, DOHC, VVT-iW (Van nạp) & VVT-i (Van xả), Phun xăng trực tiếp D-4S	"},
        {label:"	Số xy lanh	",value:"	4	"},
        {label:"	Bố trí xy lanh	",value:"	Thẳng hàng	"},
        {label:"	Dung tích xy lanh (cc)	",value:"	1998	"},
        {label:"	Hệ thống nhiên liệu	",value:"	Phun xăng đa điểm	"},
        {label:"	Loại nhiên liệu	",value:"	Xăng không chì	"},
        {label:"	Công suất tối đa ((KW) HP/ vòng/phút)	",value:"	123/6500	"},
        {label:"	Mô men xoắn tối đa (Nm/vòng/phút)	",value:"	199/4600	"},
        {label:"	Tiêu chuẩn khí thải	",value:"	Euro 4	"},
        {label:"	Chế độ lái (công suất cao/tiết kiệm nhiên liệu)  	",value:"	1 chế độ (Thường)	"},
        {label:"	Hệ thống truyền động  	",value:"	Cầu trước, dẫn động bánh trước	"},
        {label:"	Hộp số  	",value:"	Số tự động 6 cấp	"},
        {label:"	Hệ thống treo Trước	",value:"	Mc Pherson/McPherson Struts	"},
        {label:"	Sau	",value:"	Double Wishbone	"},
        {label:"	Vành & lốp xe Loại vành	",value:"	Mâm đúc	"},
        {label:"	Kích thước lốp	",value:"	215/55R17	"},
        {label:"	Lốp dự phòng	",value:"	Full size spare tires (aluminum)	"},
        {label:"	Phanh Trước	",value:"	Đĩa tản nhiệt	"},
        {label:"	Sau	",value:"	Đĩa đặc	"},
        {label:"	Tiêu thụ nhiên liệu Trong đô thị (L/100km)	",value:"	10.23	"},
        {label:"	Ngoài đô thị (L/100km)	",value:"	6.5	"},
        {label:"	Kết hợp (L/100km)	",value:"	7.88	"},
        {label:"	Cụm đèn trước Đèn chiếu gần	",value:"	Bi-LED dạng bóng chiếu	"},
        {label:"	Đèn chiếu xa	",value:"	Bi-LED dạng bóng chiếu	"},
        {label:"	Đèn chiếu sáng ban ngày	",value:"	LED	"},
        {label:"	Hệ thống rửa đèn	",value:"	Không có	"},
        {label:"	Chế độ điều khiển đèn tự động	",value:"	Có, chế độ tự ngắt	"},
        {label:"	Hệ thống nhắc nhở đèn sáng	",value:"	Có	"},
        {label:"	Hệ thống cân bằng đèn pha	",value:"	Không có	"},
        {label:"	Hệ thống cân bằng góc chiếu	",value:"	Tự động	"},
        {label:"	Chế độ đèn chờ dẫn đường	",value:"	Có	"},
        {label:"	Cụm đèn sau Đèn vị trí	",value:"	LED	"},
        {label:"	Đèn phanh	",value:"	LED	"},
        {label:"	Đèn báo rẽ	",value:"	Bóng thường	"},
        {label:"	Đèn lùi	",value:"	Bóng thường	"},
        {label:"	Đèn báo phanh trên cao  	",value:"	LED	"},
        {label:"	Đèn sương mù Trước	",value:"	Có (LED)	"},
        {label:"	Sau	",value:"	Không	"},
        {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện	",value:"	Có	"},
        {label:"	Chức năng gập điện	",value:"	Có	"},
        {label:"	Tích hợp đèn chào mừng	",value:"	Có	"},
        {label:"	Tích hợp đèn báo rẽ	",value:"	Có	"},
        {label:"	Chức năng tự điều chỉnh khi lùi	",value:"	Không có	"},
        {label:"	Bộ nhớ vị trí	",value:"	Không có	"},
        {label:"	Chức năng sấy gương	",value:"	Không có	"},
        {label:"	Chức năng chống bám nước	",value:"	Có	"},
        {label:"	Chức năng chống chói tự động	",value:"	Không có	"},
        {label:"	Gạt mưa Trước	",value:"	Gạt mưa tự động	"},
        {label:"	Sau	",value:"	Không có	"},
        {label:"	Chức năng sấy kính sau  	",value:"	Có, điều chỉnh thời gian	"},
        {label:"	Ăng ten  	",value:"	Kính sau	"},
        {label:"	Tay nắm cửa ngoài  	",value:"	Mạ crôm	"},
        {label:"	Chắn bùn  	",value:"	Không	"},
        {label:"	Ống xả kép  	",value:"	Không	"},
        {label:"	Cánh hướng gió nóc xe  	",value:"	Không	"},
        {label:"	Thanh đỡ nóc xe	",value:"	Có / With	"},
        {label:"	Tay lái Loại tay lái	",value:"	3 chấu	"},
        {label:"	Chất liệu	",value:"	Bọc da	"},
        {label:"	Nút bấm điều khiển tích hợp	",value:"	Có	"},
        {label:"	Điều chỉnh	",value:"	Chỉnh tay 4 hướng	"},
        {label:"	Lẫy chuyển số	",value:"	Không có	"},
        {label:"	Bộ nhớ vị trí	",value:"	Không có	"},
        {label:"	Gương chiếu hậu trong  	",value:"	Chống chói tự động	"},
        {label:"	Tay nắm cửa trong  	",value:"	Mạ crôm	"},
        {label:"	Cụm đồng hồ Loại đồng hồ	",value:"	Optitron	"},
        {label:"	Đèn báo Eco	",value:"	Có	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu	",value:"	Có	"},
        {label:"	Chức năng báo vị trí cần số	",value:"	Có	"},
        {label:"	Màn hình hiển thị đa thông tin	",value:"	TFT 4.2''	"},
        {label:"	Cửa sổ trời  	",value:"	Không có	"},
        {label:"	Hệ thống âm thanh Đầu đĩa	",value:"	DVD 1 đĩa, màn hình cảm ứng 7 inch	"},
        {label:"	Số loa	",value:"	6	"},
        {label:"	Cổng kết nối AUX	",value:"	Có	"},
        {label:"	Cổng kết nối USB	",value:"	Có	"},
        {label:"	Kết nối Bluetooth	",value:"	Có	"},
        {label:"	Hệ thống điều khiển bằng giọng nói	",value:"	Không có	"},
        {label:"	Bảng điều khiển từ hàng ghế sau	",value:"	Không có	"},
        {label:"	Kết nối wifi	",value:"	Không có	"},
        {label:"	Hệ thống đàm thoại rảnh tay	",value:"	Có	"},
        {label:"	Kết nối điện thoại thông minh	",value:"	Có	"},
        {label:"	Hệ thống điều hòa Trước	",value:"	Tự động 2 vùng độc lập	"},
        {label:"	Hệ thống sạc không dây  	",value:"	Không có	"},
        {label:"	Chất liệu bọc ghế  	",value:"	Da	"},
        {label:"	Ghế trước Loại ghế	",value:"	Thường	"},
        {label:"	Điều chỉnh ghế lái	",value:"	Chỉnh điện 10 hướng	"},
        {label:"	Điều chỉnh ghế hành khách	",value:"	Chỉnh điện 8 hướng	"},
        {label:"	Bộ nhớ vị trí	",value:"	Không có	"},
        {label:"	Chức năng thông gió	",value:"	Không có	"},
        {label:"	Chức năng sưởi	",value:"	Không có	"},
        {label:"	Ghế sau Hàng ghế thứ hai	",value:"	Cố định	"},
        {label:"	Hàng ghế thứ ba	",value:"	Không có	"},
        {label:"	Tựa tay hàng ghế sau	",value:"	Có Khay đựng ly + Nắp đậy	"},
        {label:"	Rèm che nắng kính sau  	",value:"	Chỉnh điện	"},
        {label:"	Rèm che nắng cửa sau  	",value:"	Không có	"},
        {label:"	Cửa gió sau  	",value:"	Có	"},
        {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  	",value:"	Có	"},
        {label:"	Khóa cửa điện  	",value:"	Có (Tự động)	"},
        {label:"	Chức năng khóa cửa từ xa  	",value:"	Có	"},
        {label:"	Phanh tay điện tử  	",value:"	Có	"},
        {label:"	Hệ thống dẫn đường  	",value:"	Không có	"},
        {label:"	Hiển thị thông tin trên kính lái  	",value:"	Không có	"},
        {label:"	Cửa sổ điều chỉnh điện  	",value:"	Tự động lên/xuống tất cả các cửa	"},
        {label:"	Cốp điều khiển điện  	",value:"	Không	"},
        {label:"	Ga tự động  	",value:"	Không có	"},
        {label:"	Hệ thống báo động	",value:"	Có / With	"},
        {label:"	Hệ thống mã hóa khóa động cơ	",value:"	Có / With	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)  	",value:"	Có	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  	",value:"	Có	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  	",value:"	Có	"},
        {label:"	Hệ thống ổn định thân xe  	",value:"	Có	"},
        {label:"	Hệ thống kiểm soát lực kéo (TRC)  	",value:"	Có	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  	",value:"	Có	"},
        {label:"	Hệ thống lựa chọn vận tốc vượt địa hình  	",value:"	Không có	"},
        {label:"	Hệ thống cảnh báo áp suất lốp (TPMS)  	",value:"	Có	"},
        {label:"	Hệ thống thích nghi địa hình (MTS)  	",value:"	Không có	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)  	",value:"	Có	"},
        {label:"	Hệ thống cảnh báo điểm mù (BSM)  	",value:"	Không có	"},
        {label:"	Hệ thống cảnh báo phương tiện cắt ngang phía sau  	",value:"	Không có	"},
        {label:"	Camera lùi  	",value:"	Có	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau	",value:"	Có	"},
        {label:"	Góc trước	",value:"	Có	"},
        {label:"	Góc sau	",value:"	Có	"},
        {label:"	Chức năng giữ phanh điện tử  	",value:"	Có	"},
        {label:"	Túi khí Túi khí người lái & hành khách phía trước	",value:"	Có	"},
        {label:"	Túi khí bên hông phía trước	",value:"	Có	"},
        {label:"	Túi khí rèm	",value:"	Có	"},
        {label:"	Túi khí bên hông phía sau	",value:"	Không có	"},
        {label:"	Túi khí đầu gối người lái	",value:"	Có	"},
        {label:"	Túi khí đầu gối hành khách	",value:"	Không có	"},
        {label:"	Khung xe GOA  	",value:"	Có	"},
        {label:"	Dây đai an toàn Trước	",value:"	3 điểm ELR, 5 vị trí	"},
        {label:"	Hàng ghế sau thứ nhất	",value:"	3 điểm ELR, 5 vị trí	"},
        {label:"	Ghế có cấu trúc giảm chấn thương cổ  	",value:"	Có	"},
        {label:"	Cột lái tự đổ  	",value:"	Có	"},
        {label:"	Bàn đạp phanh tự đổ  	",value:"	Có	"},
      ]
     }
  ]
}
