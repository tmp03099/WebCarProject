import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaCorollaCross implements CarInfoInterface {
  name = 'Toyota Corolla Cross'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/Corolla Cross.png'
  banner = 'assets/img/toyota/corolla-cross/banner.png'
  models = [
    {
      brand: 'Toyota Corolla Cross 1.8G',
      price: 720000000,
      lingo: 'DẪN ĐẦU XU THẾ',   
      seats: 5,
      type: 'SUV',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động vô cấp/CVT'],
      library:[
        '/assets/img/toyota/corolla-cross/1.8g/library/wq34do.jpg',
        '/assets/img/toyota/corolla-cross/1.8g/library/slfwrt.jpg',
        '/assets/img/toyota/corolla-cross/1.8g/library/mjhp2c.jpg',
        '/assets/img/toyota/corolla-cross/1.8g/library/hqzsjn.jpg',
        '/assets/img/toyota/corolla-cross/1.8g/library/5bib2o.jpg',
        '/assets/img/toyota/corolla-cross/1.8g/library/0sk5ap.jpg'
      ],
      colors:[
        {
          label: 'Bạc - 1K0',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/bac-1k0.jpg',
          colorCode: '#4d4845'
        },
        {
          label: 'Xám - 1K3',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/xam-1k3.jpg',
          colorCode: '#818f9c'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/den-218.jpg',
          colorCode: 'black'
        },
        {
          label: 'Đỏ - 3R3',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/do-3r3.jpg',
          colorCode: 'red'
        },
        {
          label: 'Nâu - 4X7',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/nau-4x7.jpg',
          colorCode: '#4d4845'
        },
        {
          label: 'Trắng ngọc trai - 089',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/trangngoctrai-089.jpg',
          colorCode: '#f7f9fa'
        },
        {
          label: 'Xanh - 8X2',
          image: '/assets/img/toyota/corolla-cross/colors/1.8G/xanh-8x2.jpg',
          colorCode: '#0c2e7d'
        }
      ],
      ngoaiThat: {
        label: 'NGOẠI HÌNH ẤN TƯỢNG - NĂNG ĐỘNG',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/corolla-cross/1.8v1/ngoai-that/u3gb3g.jpg',
        features: [
          {
            image: '/assets/img/toyota/corolla-cross/1.8v1/ngoai-that/ncoidl.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8v1/ngoai-that/dwg4zw.jpg',
            label: 'Đuôi xe'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8v1/ngoai-that/hrl2wh.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8v1/ngoai-that/jlq100.jpg',
            label: 'Thân xe'
          }
        ]
      },
      noiThat: {
        label: 'KHÔNG GIAN VƯỢT CHUẨN',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/mkwlds.jpg',
        features: [
          {
            image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/o1jd00.jpg',
            label: 'Thiết kế tiện nghi'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/xlxqqr.jpg',
            label: 'Khoang hành lý'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/xnckhy.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/yiofm1.jpg',
            label: 'Cửa sau rộng rãi'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/znc5nv.jpg',
            label: 'Bảng đồng hồ'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/2yeilx.jpg",
          title: "Hệ thống hỗ trợ lực phanh khẩn cấp",
          message: "Hệ thống hỗ trợ lực phanh khẩn cấp BA tự động gia tăng thêm lực phanh trong trường hợp khẩn cấp, giúp người lái tự tin xử lý các tình huống bất ngờ."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/4d3zq0.jpg",
          title: "Hệ thống kiểm soát lực kéo",
          message: "Hệ thống tác động lên công suất động cơ và lực phanh ở mỗi bánh xe, nhờ đó giúp chiếc xe vó thể dễ dàng tăng tốc và khởi hành trên đường trơn trượt."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/baoo2t.jpg",
          title: "Hệ thống hỗ trợ khởi hành ngang dốc (HAC)",
          message: "Khi người lái chuyển từ chân phanh sang chân ga để khởi hành ngang dốc, hệ thống HAC sẽ tự động tác độgn phanh tới cả 4 bánh xe trong vòng 2 giây, nhờ đố giúp chiếc xe không bị trôi dốc và dễ dàng khởi hành hơn."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/htez0n.jpg",
          title: "Hệ thống phân phối lực phanh điện tử (EBD)",
          message: "Hệ thống phân phối lực phanh điện tử EBD phân bổ lực phanh hợp lý lên các bánh xe, giúp nâng cao hiệu quả phanh, đặc biệt khi xe đang chất tải và vào cua."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/jyvpmy.jpg",
          title: "Định hướng thiết kế toàn cầu mới TNGA",
          message: "Định hướng thiết kế toàn cầu mới TNGA mang đến cảm giác lái êm ái, thoải mái phù hợp khách hàng cá nhân, gia đình."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/safasfasf.jpg",
          title: "Hộp số",
          message: "Corolla Cross được trang bị hộp số CVT mang đến khả năng tăng tốc nhẹ nhàng, vận hành mượt mà, êm ái."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/uuvqcv.jpg",
          title: "Túi khí SRS",
          message: "Hệ thống trang bị 07 túi khí cho người lái và hành khách."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/uxnklp.jpg",
          title: "Hệ thống cân bằng điện tử (VSC)",
          message: "Hệ thống VSC kiểm soát công suất động cơ và phân bổ lực phanh hợp lý tới từng bánh xe, nhờ đó giảm thiểu nguy cơ mất lái và trượt bánh xe, đặc biệt trên các cung đường trơn trượt khi vào cua gấp."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/x4wrtj.jpg",
          title: "Động cơ",
          message: "Động cơ 2ZR-FE tích hợp các công nghệ DOHC, Dual, WT-i, ACIS giúp vận hành êm ái, tăng tốc nhanh, tiết kiệm nhiên liệu."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8g/tinh-nang/ypqhce.jpg",
          title: "Hệ thống chống bó cứng phanh (ABS)",
          message: "Khi được kích hoạt bằng cách đạp phanh dứt khoát, hệ thống chống bó cứng phanh ABS sẽ tự động nhấp nhá phanh liên tục, giúp các bánh xe không bị bó cứng, cho phép người lái duy trì khả năng điều khiển xe tránh chướng ngại vật bà đảm bảo ổn định thân xe."
        }
      ],
      thongSo: [
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	4460 x 1825 x1620	"},
        {label:"	Chiều dài cơ sở (mm)		",value:"	2640	"},
        {label:"	Vết bánh xe (Trước / Sau) (mm)		",value:"	1570 / 1580	"},
        {label:"	Khoảng sáng gầm xe (mm)		",value:"	161	"},
        {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	5.2	"},
        {label:"	Trọng lượng không tải (kg)		",value:"	1360	"},
        {label:"	Trọng lượng toàn tải (kg)		",value:"	1815	"},
        {label:"	Dung tích bình nhiên liệu (L)		",value:"	47	"},
        {label:"	Dung tích khoang hành lý (L)		",value:"	440	"},
        {label:"	Động cơ xăng Loại động cơ		",value:"	2ZR-FE	"},
        {label:"	Số xy lanh		",value:"	4	"},
        {label:"	Bố trí xy lanh		",value:"	Thẳng hàng / In line	"},
        {label:"	Dung tích xy lanh (cc)		",value:"	1798	"},
        {label:"	Tỉ số nén		",value:"	10	"},
        {label:"	Hệ thống nhiên liệu		",value:"	Phun xăng điện tử / Electronic fuel injection	"},
        {label:"	Loại nhiên liệu		",value:"	Xăng / Petrol	"},
        {label:"	Công suất tối đa ((KW) HP / vòng / phút)		",value:"	(103)138 / 6400	"},
        {label:"	Mô men xoắn tối đa (Nm / vòng / phút)		",value:"	172 / 4000	"},
        {label:"	Loại dẫn động  		",value:"	Dẫn động cầu trước / FWD	"},
        {label:"	Hộp số  		",value:"	Số tự động vô cấp / CVT	"},
        {label:"	Hệ thống treo Trước		",value:"	Macpherson với thanh cân bằng / MACPHERSON STRUT w stabilizer bar	"},
        {label:"	Sau		",value:"	Bán phụ thuộc, dạng thanh xoắn với thanh cân bằng / Torsion beam with stabilizer bar	"},
        {label:"	Khung xe Loại		",value:"	TNGA	"},
        {label:"	Hệ thống lái Trợ lực tay lái		",value:"	Trợ lực điện / Electric	"},
        {label:"	Vành & lốp xe Loại vành		",value:"	Hợp kim / Alloy	"},
        {label:"	Kích thước lốp		",value:"	215 / 60R17	"},
        {label:"	Lốp dự phòng  		",value:"	Vành thép / Steel, T155 / 70D17	"},
        {label:"	Phanh Trước		",value:"	Đĩa / Disc	"},
        {label:"	Sau		",value:"	Đĩa / Disc	"},
        {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
        {label:"	Tiêu thụ nhiên liệu Trong đô thị (L / 100km)		",value:"	11	"},
        {label:"	Ngoài đô thị (L / 100km)		",value:"	6.1	"},
        {label:"	Kết hợp (L / 100km)		",value:"	7.9	"},
        {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	HALOGEN	"},
        {label:"	Đèn chiếu xa		",value:"	HALOGEN	"},
        {label:"	Đèn chiếu sáng ban ngày		",value:"	HALOGEN	"},
        {label:"	Chế độ điều khiển đèn tự động		",value:"	Có / With	"},
        {label:"	Hệ thống nhắc nhở đèn sáng		",value:"	Có / With	"},
        {label:"	Hệ thống cân bằng góc chiếu		",value:"	Chỉnh cơ / Manual	"},
        {label:"	Chế độ đèn chờ dẫn đường		",value:"	Có / With	"},
        {label:"	Cụm đèn sau  		",value:"	LED	"},
        {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
        {label:"	Đèn sương mù Trước		",value:"	LED	"},
        {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có / With	"},
        {label:"	Chức năng gập điện		",value:"	Tự động / Auto	"},
        {label:"	Tích hợp đèn báo rẽ		",value:"	Có / With	"},
        {label:"	Gạt mưa Trước		",value:"	Thường, có chức năng gián đoạn điều chỉnh thời gian / Normal, Intermittent control with time adjustment.	"},
        {label:"	Sau		",value:"	Gián đoạn / Liên tục / Intermittent control / Continuous	"},
        {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
        {label:"	Ăng ten  		",value:"	Đuôi cá / Shark fin	"},
        {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
        {label:"	Chất liệu		",value:"	Da / Leather	"},
        {label:"	Nút bấm điều khiển tích hợp		",value:"	Có / With	"},
        {label:"	Điều chỉnh		",value:"	Chỉnh tay 4 hướng / Tilt & Telescope	"},
        {label:"	Gương chiếu hậu trong  		",value:"	Chống chói tự động / EC mirror	"},
        {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Kỹ thuật số / Digital	"},
        {label:"	Đèn báo Eco		",value:"	Có / With	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
        {label:"	Chức năng báo vị trí cần số		",value:"	Có / With	"},
        {label:"	Màn hình hiển thị đa thông tin		",value:"	4.2 TFT	"},
        {label:"	Chất liệu bọc ghế  		",value:"	Da / Leather	"},
        {label:"	Ghế trước Ghế lái		",value:"	Chỉnh điện 8 hướng / 8-way power adjustment	"},
        {label:"	Ghế hành khách trước		",value:"	Chỉnh cơ 4 hướng / 4-way mannual adjustment	"},
        {label:"	Ghế sau  		",value:"	Gập 60:40, ngả lưng ghế / 60:40 FOLDING, RECLINING	"},
        {label:"	Hệ thống điều hòa  		",value:"	Tự động / Auto	"},
        {label:"	Cửa gió sau  		",value:"	Có / With	"},
        {label:"	Hệ thống âm thanh Màn hình		",value:"	Cảm ứng 7 / 7 Touch screen	"},
        {label:"	Số loa		",value:"	6	"},
        {label:"	Cổng kết nối USB		",value:"	Có / With	"},
        {label:"	Kết nối Bluetooth		",value:"	Có / With	"},
        {label:"	Điều khiển giọng nói		",value:"	Có / With	"},
        {label:"	Kết nối wifi		",value:"	Có / With	"},
        {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
        {label:"	Kết nối điện thoại thông minh / Smartphone connectivity		",value:"	Có / With	"},
        {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Có / With	"},
        {label:"	Khóa cửa điện  		",value:"	Có / With	"},
        {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
        {label:"	Cửa sổ điều chỉnh điện  		",value:"	Tất cả 1 chạm lên / xuống, chống kẹt / All one touch up / down, jam protection	"},
        {label:"	Hệ thống điều khiển hành trình  		",value:"	Có / With	"},
        {label:"	Hệ thống báo động  		",value:"	Có / With	"},
        {label:"	Hệ thống mã hóa khóa động cơ  		",value:"	Có / With	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có / With	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có / With	"},
        {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có / With	"},
        {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có / With	"},
        {label:"	Hệ thống cảnh báo áp suất lốp (TPMS)  		",value:"	Có / With	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Có / With	"},
        {label:"	Camera lùi  		",value:"	Có / With	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có / With	"},
        {label:"	Góc trước		",value:"	Có / With	"},
        {label:"	Góc sau		",value:"	Có / With	"},
        {label:"	Túi khí Số lượng túi khí		",value:"	7	"},
        {label:"	Túi khí người lái & hành khách phía trước		",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
        {label:"	Túi khí rèm		",value:"	Có / With	"},
        {label:"	Túi khí đầu gối người lái		",value:"	Có / With	"},
        {label:"	Dây đai an toàn Loại		",value:"	3 điểm ELR	"},
        {label:"	Bộ căng đai khẩn cấp cho dây đai phía trước		",value:"	Có / With	"}
      ]
      },
      {
        brand: 'Toyota Corolla Cross 1.8V',
        price: 820000000,
        otherInfo: ['Số tự động vô cấp/CVT','Dung tích 1798 cm3'],
        tinhNang:[
          {
            image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/adfi5v.jpg",
            title: "Hệ thống cảnh báo chuyển làn đường",
            message: "Hệ thống cảnh báo người lái bằng còi và đèn nếu xe có xu hướng rời khỏi làn đường mà không bật tín hiệu báo rẽ. Hệ thống cũng có thể kích hoạt chế độ hỗ trợ lái và ngăn không cho xe rời khỏi làn đường."
          },
          {
            image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/b3rwcz.jpg",
            title: "Hệ thống kiểm soát hành trình chủ động (DRCC)",
            message: "DRCC được trang bị rada sóng âm và camera giúp xác định và giữ khoảng cách an toàn với xe phía trước."
          },
          {
            image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/fedfhx.jpg",
            title: "Hộp số",
            message: "Corolla Cross được trang bị hộp số CVT mang đến khả năng tăng tốc nhẹ nhàng, vận hành mượt mà, êm ái."
          },
          {
            image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/kkcd4y.jpg",
            title: "Định hướng thiết kế toàn cầu mới TNGA",
            message: "Định hướng thiết kế toàn cầu mới TNGA mang đến cảm giác lái êm ái, thoải mái phù hợp với khách hàng cá nhân, gia đình."
          },
          {
            image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/omdfev.jpg",
            title: "Túi khí SRS",
            message: "Hệ thống trang bị 07 túi khí cho người lái và hành khách"
          },
          {
            image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/uqhvlw.jpg",
            title: "Hệ thống cảnh báo tiền va chạm",
            message: "Phát hiện phương tiện (ban ngày) trên đường bằng cách sử dụng radar sóng âm và camera cảm biến. Khi hệ thống xác định có khả năng cao va chạm với một vật thể phía trước, hệ thống cảnh báo sẽ kích hoạt để thông báo cho người lái và ngăn chặn va chạm. Nếu hệ thống xác định rằng khả năng va chạm mặt trước với đối tượng là cực kỳ cao, hệ thống phanh tự động kích hoạt để giúp tránh/ giảm thiểu va chạm."
          },
          {
            image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/ydsqmc.jpg",
            title: "Hệ thống hỗ trợ cảnh báo phương tiện cắt ngang phía sau RCTA",
            message: "Hệ thống RCTA phát hiện các phương tiện di chuyển tới gần và khó quan sát từ phía sau."
          },
          {
            image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/yh3mze.jpg",
            title: "Động cơ",
            message: "Động cơ 2ZR-FE tích hợp các công nghệ DOHC, Dual VVT-i, ACIS giúp vận hành êm ái, tăng tốc nhanh, tiết kiệm nhiên liệu."
          },
          {
            image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/z5mzrx.jpg",
            title: "Đèn chiếu xa tự động",
            message: "Message"
          }
        ],
        thongSo:[
          {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	4460 x 1825 x1620	"},
          {label:"	Chiều dài cơ sở (mm)		",value:"	2640	"},
          {label:"	Vết bánh xe (Trước / Sau) (mm)		",value:"	1560 / 1570	"},
          {label:"	Khoảng sáng gầm xe (mm)		",value:"	161	"},
          {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	5.2	"},
          {label:"	Trọng lượng không tải (kg)		",value:"	1360	"},
          {label:"	Trọng lượng toàn tải (kg)		",value:"	1815	"},
          {label:"	Dung tích bình nhiên liệu (L)		",value:"	47	"},
          {label:"	Dung tích khoang hành lý (L)		",value:"	440	"},
          {label:"	Động cơ xăng Loại động cơ		",value:"	2ZR-FE	"},
          {label:"	Số xy lanh		",value:"	4	"},
          {label:"	Bố trí xy lanh		",value:"	Thẳng hàng / In line	"},
          {label:"	Dung tích xy lanh (cc)		",value:"	1798	"},
          {label:"	Tỉ số nén		",value:"	10	"},
          {label:"	Hệ thống nhiên liệu		",value:"	Phun xăng điện tử / Electronic fuel injection	"},
          {label:"	Loại nhiên liệu		",value:"	Xăng / Petrol	"},
          {label:"	Công suất tối đa ((KW) HP / vòng / phút)		",value:"	(103)138 / 6400	"},
          {label:"	Mô men xoắn tối đa (Nm / vòng / phút)		",value:"	172 / 4000	"},
          {label:"	Loại dẫn động  		",value:"	Dẫn động cầu trước / FWD	"},
          {label:"	Hộp số  		",value:"	Số tự động vô cấp / CVT	"},
          {label:"	Hệ thống treo Trước		",value:"	MacPherson với thanh cân bằng / MACPHERSON STRUT w stabilizer bar	"},
          {label:"	Sau		",value:"	Bán phụ thuộc, dạng thanh xoắn với thanh cân bằng / Torsion beam with stabilizer bar	"},
          {label:"	Khung xe Loại		",value:"	TNGA	"},
          {label:"	Hệ thống lái Trợ lực tay lái		",value:"	Trợ lực điện / Electric	"},
          {label:"	Vành & lốp xe Loại vành		",value:"	Hợp kim / Alloy	"},
          {label:"	Kích thước lốp		",value:"	225 / 50R18	"},
          {label:"	Lốp dự phòng  		",value:"	Vành thép / Steel, T155 / 70D17	"},
          {label:"	Phanh Trước		",value:"	Đĩa / Disc	"},
          {label:"	Sau		",value:"	Đĩa / Disc	"},
          {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
          {label:"	Tiêu thụ nhiên liệu Trong đô thị (L / 100km)		",value:"	10.3	"},
          {label:"	Ngoài đô thị (L / 100km)		",value:"	6.1	"},
          {label:"	Kết hợp (L / 100km)		",value:"	7.6	"},
          {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	LED	"},
          {label:"	Đèn chiếu xa		",value:"	LED	"},
          {label:"	Đèn chiếu sáng ban ngày		",value:"	LED	"},
          {label:"	Chế độ điều khiển đèn tự động		",value:"	Có / With	"},
          {label:"	Hệ thống nhắc nhở đèn sáng		",value:"	Có / With	"},
          {label:"	Hệ thống cân bằng góc chiếu		",value:"	Chỉnh cơ / Manual	"},
          {label:"	Chế độ đèn chờ dẫn đường		",value:"	Có / With	"},
          {label:"	Cụm đèn sau  		",value:"	LED	"},
          {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
          {label:"	Đèn sương mù Trước		",value:"	LED	"},
          {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có / With	"},
          {label:"	Chức năng gập điện		",value:"	Tự động / Auto	"},
          {label:"	Tích hợp đèn báo rẽ		",value:"	Có / With	"},
          {label:"	Chức năng tự điều chỉnh khi lùi		",value:"	Có / With	"},
          {label:"	Gạt mưa Trước		",value:"	Gạt mưa tự động / Auto	"},
          {label:"	Sau		",value:"	Gián đoạn / Liên tục / Intermittent control / Continuous	"},
          {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
          {label:"	Ăng ten  		",value:"	Đuôi cá / Shark fin	"},
          {label:"	Thanh đỡ nóc xe  		",value:"	Có / With	"},
          {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
          {label:"	Chất liệu		",value:"	Da / Leather	"},
          {label:"	Nút bấm điều khiển tích hợp		",value:"	Có / With	"},
          {label:"	Điều chỉnh		",value:"	Chỉnh tay 4 hướng / Tilt & Telescope	"},
          {label:"	Gương chiếu hậu trong  		",value:"	Chống chói tự động / EC mirror	"},
          {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Kỹ thuật số / Digital	"},
          {label:"	Đèn báo Eco		",value:"	Có / With	"},
          {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
          {label:"	Chức năng báo vị trí cần số		",value:"	Có / With	"},
          {label:"	Màn hình hiển thị đa thông tin		",value:"	4.2 TFT	"},
          {label:"	Chất liệu bọc ghế  		",value:"	Da / Leather	"},
          {label:"	Ghế trước Ghế lái		",value:"	Chỉnh điện 8 hướng / 8-way power adjustment	"},
          {label:"	Ghế hành khách trước		",value:"	Chỉnh cơ 4 hướng / 4-way mannual adjustment	"},
          {label:"	Ghế sau  		",value:"	Gập 60:40, ngả lưng ghế / 60:40 FOLDING, RECLINING	"},
          {label:"	Cửa sổ trời  		",value:"	Có / With	"},
          {label:"	Hệ thống điều hòa  		",value:"	Tự động 2 vùng / Auto dual mode	"},
          {label:"	Cửa gió sau  		",value:"	Có / With	"},
          {label:"	Hệ thống âm thanh Màn hình		",value:"	Cảm ứng 9 / 9 Touch screen	"},
          {label:"	Số loa		",value:"	6	"},
          {label:"	Cổng kết nối USB		",value:"	Có / With	"},
          {label:"	Kết nối Bluetooth		",value:"	Có / With	"},
          {label:"	Điều khiển giọng nói		",value:"	Có / With	"},
          {label:"	Kết nối wifi		",value:"	Có / With	"},
          {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
          {label:"	Kết nối điện thoại thông minh / Smartphone connectivity		",value:"	Có / With	"},
          {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Có / With	"},
          {label:"	Khóa cửa điện  		",value:"	Có / With	"},
          {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
          {label:"	Cửa sổ điều chỉnh điện  		",value:"	Tất cả 1 chạm lên / xuống, chống kẹt / All one touch up / down, jam protection	"},
          {label:"	Hệ thống điều khiển hành trình  		",value:"	Có / With	"},
          {label:"	Hệ thống báo động  		",value:"	Có / With	"},
          {label:"	Hệ thống mã hóa khóa động cơ  		",value:"	Có / With	"},
          {label:"	Hệ thống an toàn Toyota (Toyota Safety Sense) Toyota Safety Sense		",value:"	Thế hệ 2 (mới nhất) / 2nd generation (latest)	"},
          {label:"	Cảnh báo tiền va chạm (PCS)		",value:"	Có / With	"},
          {label:"	Cảnh báo chệch làn đường (LDA)		",value:"	Có / With	"},
          {label:"	Hỗ trợ giữ làn đường (LTA)		",value:"	Có / With	"},
          {label:"	Điều khiển hành trình chủ động (DRCC)		",value:"	Có / With	"},
          {label:"	Điều chỉnh đèn chiếu xa tự động (AHB)		",value:"	Có / With	"},
          {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có / With	"},
          {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có / With	"},
          {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có / With	"},
          {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có / With	"},
          {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có / With	"},
          {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có / With	"},
          {label:"	Hệ thống cảnh báo áp suất lốp (TPMS)  		",value:"	Có / With	"},
          {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Có / With	"},
          {label:"	Hệ thống cảnh báo điểm mù (BSM)  		",value:"	Có / With	"},
          {label:"	Hệ thống cảnh báo phương tiện cắt ngang phía sau  		",value:"	Có / With	"},
          {label:"	Camera 360 độ  		",value:"	Có / With	"},
          {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có / With	"},
          {label:"	Góc trước		",value:"	Có / With	"},
          {label:"	Góc sau		",value:"	Có / With	"},
          {label:"	Túi khí Số lượng túi khí		",value:"	7	"},
          {label:"	Túi khí người lái & hành khách phía trước		",value:"	Có / With	"},
          {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
          {label:"	Túi khí rèm		",value:"	Có / With	"},
          {label:"	Túi khí đầu gối người lái		",value:"	Có / With	"},
          {label:"	Dây đai an toàn Loại		",value:"	3 điểm ELR	"},
          {label:"	Dây đai an toàn		",value:"	Có / With	"}
        ]
      },
      {
        brand: 'Toyota Corolla Cross 1.8HV',
        price: 910000000,
        fuelType: 'Xăng + Điện',
        manufacture: 'Xe nhập khẩu',
        otherInfo: ['Số tự động vô cấp/CVT','Tính năng an toàn TSS'],
      library:[
        '/assets/img/toyota/corolla-cross/1.8hv/library/0sxosh.jpg',
        '/assets/img/toyota/corolla-cross/1.8hv/library/0yir2p.jpg',
        '/assets/img/toyota/corolla-cross/1.8hv/library/d15eel.jpg',
        '/assets/img/toyota/corolla-cross/1.8hv/library/ehzajc.jpg',
        '/assets/img/toyota/corolla-cross/1.8hv/library/kc2rpu.jpg',
        '/assets/img/toyota/corolla-cross/1.8hv/library/rbqdll.jpg'
      ],
      tinhNang:[
        {
          image: "/assets/img/toyota/corolla-cross/1.8hv/tinh-nang/2hnrht.jpg",
          title: "Động cơ 2ZR-FXE",
          message: "Được thiết kế dành riêng cho xe Hybrid, động cơ 1.8 lít với hệ thống điều phối van biến thiên kép (Dual VVT-i) và chu trình Atkinson đem lại hiệu suất tối ưu và tiết kiệm nhiên liệu."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8hv/tinh-nang/mkq0c2.jpg",
          title: "Hệ thống Hybird",
          message: "Kết hợp với động cơ xăng hiệu suất cao, hệ thống Hybird mang lại khả năng tăng tốc mạnh mẽ và hiệu suất tiêu hao nhiên liệu tối ưu."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/adfi5v.jpg",
          title: "Hệ thống cảnh báo chuyển làn đường",
          message: "Hệ thống cảnh báo người lái bằng còi và đèn nếu xe có xu hướng rời khỏi làn đường mà không bật tín hiệu báo rẽ. Hệ thống cũng có thể kích hoạt chế độ hỗ trợ lái và ngăn không cho xe rời khỏi làn đường."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/b3rwcz.jpg",
          title: "Hệ thống kiểm soát hành trình chủ động (DRCC)",
          message: "DRCC được trang bị rada sóng âm và camera giúp xác định và giữ khoảng cách an toàn với xe phía trước."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/fedfhx.jpg",
          title: "Hộp số",
          message: "Corolla Cross được trang bị hộp số CVT mang đến khả năng tăng tốc nhẹ nhàng, vận hành mượt mà, êm ái."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/kkcd4y.jpg",
          title: "Định hướng thiết kế toàn cầu mới TNGA",
          message: "Định hướng thiết kế toàn cầu mới TNGA mang đến cảm giác lái êm ái, thoải mái phù hợp với khách hàng cá nhân, gia đình."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/omdfev.jpg",
          title: "Túi khí SRS",
          message: "Hệ thống trang bị 07 túi khí cho người lái và hành khách"
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/uqhvlw.jpg",
          title: "Hệ thống cảnh báo tiền va chạm",
          message: "Phát hiện phương tiện (ban ngày) trên đường bằng cách sử dụng radar sóng âm và camera cảm biến. Khi hệ thống xác định có khả năng cao va chạm với một vật thể phía trước, hệ thống cảnh báo sẽ kích hoạt để thông báo cho người lái và ngăn chặn va chạm. Nếu hệ thống xác định rằng khả năng va chạm mặt trước với đối tượng là cực kỳ cao, hệ thống phanh tự động kích hoạt để giúp tránh/ giảm thiểu va chạm."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/ydsqmc.jpg",
          title: "Hệ thống hỗ trợ cảnh báo phương tiện cắt ngang phía sau RCTA",
          message: "Hệ thống RCTA phát hiện các phương tiện di chuyển tới gần và khó quan sát từ phía sau."
        },
        {
          image: "/assets/img/toyota/corolla-cross/1.8v1/tinh-nang/z5mzrx.jpg",
          title: "Đèn chiếu xa tự động",
          message: "Phát hiện ánh sáng của xe phía trước và tự động điều chỉnh đèn pha ở chế độ chiếu gần hoặc chiếu xa."
        }
      ],
      thongSo: [
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	4460 x 1825 x1620	"},
        {label:"	Chiều dài cơ sở (mm)		",value:"	2640	"},
        {label:"	Vết bánh xe (Trước / Sau) (mm)		",value:"	1560 / 1570	"},
        {label:"	Khoảng sáng gầm xe (mm)		",value:"	161	"},
        {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	5.2	"},
        {label:"	Trọng lượng không tải (kg)		",value:"	1410	"},
        {label:"	Trọng lượng toàn tải (kg)		",value:"	1850	"},
        {label:"	Dung tích bình nhiên liệu (L)		",value:"	36	"},
        {label:"	Dung tích khoang hành lý (L)		",value:"	440	"},
        {label:"	Động cơ xăng Loại động cơ		",value:"	2ZR-FXE	"},
        {label:"	Số xy lanh		",value:"	4	"},
        {label:"	Bố trí xy lanh		",value:"	Thẳng hàng / In line	"},
        {label:"	Dung tích xy lanh (cc)		",value:"	1798	"},
        {label:"	Tỉ số nén		",value:"	13	"},
        {label:"	Hệ thống nhiên liệu		",value:"	Phun xăng điện tử / Electronic fuel injection	"},
        {label:"	Loại nhiên liệu		",value:"	Xăng / Petrol	"},
        {label:"	Công suất tối đa ((KW) HP / vòng / phút)		",value:"	(72)97 / 5200	"},
        {label:"	Mô men xoắn tối đa (Nm / vòng / phút)		",value:"	142 / 3600	"},
        {label:"	Động cơ điện Công suất tối đa		",value:"	53	"},
        {label:"	Mô men xoắn tối đa		",value:"	163	"},
        {label:"	Ắc quy Hybrid Loại		",value:"	Nickel metal	"},
        {label:"	Chế độ lái (công suất cao / tiết kiệm nhiên liệu)  		",value:"	Lái Eco 3 chế độ (Bình thường / Mạnh mẽ / Eco) / 3 Eco drive mode (Normal / PWR / Eco), Lái điện / EV mode	"},
        {label:"	Loại dẫn động  		",value:"	Dẫn động cầu trước / FWD	"},
        {label:"	Hộp số  		",value:"	Số tự động vô cấp / CVT	"},
        {label:"	Hệ thống treo Trước		",value:"	MacPherson với thanh cân bằng / MACPHERSON STRUT w stabilizer	"},
        {label:"	Sau		",value:"	Bán phụ thuộc, dạng thanh xoắn với thanh cân bằng / Torsion beam with stabilizer bar	"},
        {label:"	Khung xe Loại		",value:"	TNGA	"},
        {label:"	Hệ thống lái Trợ lực tay lái		",value:"	Trợ lực điện / Electric	"},
        {label:"	Vành & lốp xe Loại vành		",value:"	Hợp kim / Alloy	"},
        {label:"	Kích thước lốp		",value:"	225 / 50R18	"},
        {label:"	Lốp dự phòng  		",value:"	Vành thép / Steel, T155 / 70D17	"},
        {label:"	Phanh Trước		",value:"	Đĩa / Disc	"},
        {label:"	Sau		",value:"	Đĩa / Disc	"},
        {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
        {label:"	Tiêu thụ nhiên liệu Trong đô thị (L / 100km)		",value:"	3.7	"},
        {label:"	Ngoài đô thị (L / 100km)		",value:"	4.5	"},
        {label:"	Kết hợp (L / 100km)		",value:"	4.2	"},
        {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	LED	"},
        {label:"	Đèn chiếu xa		",value:"	LED	"},
        {label:"	Đèn chiếu sáng ban ngày		",value:"	LED	"},
        {label:"	Chế độ điều khiển đèn tự động		",value:"	Có / With	"},
        {label:"	Hệ thống nhắc nhở đèn sáng		",value:"	Có / With	"},
        {label:"	Hệ thống cân bằng góc chiếu		",value:"	Chỉnh cơ / Manual	"},
        {label:"	Chế độ đèn chờ dẫn đường		",value:"	Có / With	"},
        {label:"	Cụm đèn sau  		",value:"	LED	"},
        {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
        {label:"	Đèn sương mù Trước		",value:"	LED	"},
        {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có / With	"},
        {label:"	Chức năng gập điện		",value:"	Tự động / Auto	"},
        {label:"	Tích hợp đèn báo rẽ		",value:"	Có / With	"},
        {label:"	Chức năng tự điều chỉnh khi lùi		",value:"	Có / With	"},
        {label:"	Gạt mưa Trước		",value:"	Gạt mưa tự động / Auto	"},
        {label:"	Sau		",value:"	Gián đoạn / Liên tục / Intermittent control / Continuous	"},
        {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
        {label:"	Ăng ten  		",value:"	Đuôi cá / Shark fin	"},
        {label:"	Thanh đỡ nóc xe  		",value:"	Có / With	"},
        {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
        {label:"	Chất liệu		",value:"	Da / Leather	"},
        {label:"	Nút bấm điều khiển tích hợp		",value:"	Có / With	"},
        {label:"	Điều chỉnh		",value:"	Chỉnh tay 4 hướng / Tilt & Telescope	"},
        {label:"	Gương chiếu hậu trong  		",value:"	Chống chói tự động / EC mirror	"},
        {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Kỹ thuật số / Digital	"},
        {label:"	Đèn báo hệ thống Hybird		",value:"	Có / With	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
        {label:"	Chức năng báo vị trí cần số		",value:"	Có / With	"},
        {label:"	Màn hình hiển thị đa thông tin		",value:"	7 TFT	"},
        {label:"	Chất liệu bọc ghế  		",value:"	Da / Leather	"},
        {label:"	Ghế trước Ghế lái		",value:"	Chỉnh điện 8 hướng / 8-way power adjustment	"},
        {label:"	Ghế hành khách trước		",value:"	Chỉnh cơ 4 hướng / 4-way mannual adjustment	"},
        {label:"	Ghế sau  		",value:"	Gập 60:40, ngả lưng ghế / 60:40 FOLDING, RECLINING	"},
        {label:"	Cửa sổ trời  		",value:"	Có / With	"},
        {label:"	Hệ thống điều hòa  		",value:"	Tự động 2 vùng / Auto dual mode	"},
        {label:"	Cửa gió sau  		",value:"	Có / With	"},
        {label:"	Hệ thống âm thanh Màn hình		",value:"	Cảm ứng 9 / 9 Touch screen	"},
        {label:"	Số loa		",value:"	6	"},
        {label:"	Cổng kết nối USB		",value:"	Có / With	"},
        {label:"	Kết nối Bluetooth		",value:"	Có / With	"},
        {label:"	Điều khiển giọng nói		",value:"	Có / With	"},
        {label:"	Kết nối wifi		",value:"	Có / With	"},
        {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
        {label:"	Kết nối điện thoại thông minh / Smartphone connectivity		",value:"	Có / With	"},
        {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Có / With	"},
        {label:"	Khóa cửa điện  		",value:"	Có / With	"},
        {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
        {label:"	Cửa sổ điều chỉnh điện  		",value:"	Tất cả 1 chạm lên / xuống, chống kẹt / All one touch up / down, jam protection	"},
        {label:"	Hệ thống điều khiển hành trình  		",value:"	Có / With	"},
        {label:"	Hệ thống báo động  		",value:"	Có / With	"},
        {label:"	Hệ thống mã hóa khóa động cơ  		",value:"	Có / With	"},
        {label:"	Hệ thống an toàn Toyota (Toyota Safety Sense) Toyota Safety Sense		",value:"	Thế hệ 2 (mới nhất) / 2nd generation (latest)	"},
        {label:"	Cảnh báo tiền va chạm (PCS)		",value:"	Có / With	"},
        {label:"	Cảnh báo chệch làn đường (LDA)		",value:"	Có / With	"},
        {label:"	Hỗ trợ giữ làn đường (LTA)		",value:"	Có / With	"},
        {label:"	Điều khiển hành trình chủ động (DRCC)		",value:"	Có / With	"},
        {label:"	Điều chỉnh đèn chiếu xa tự động (AHB)		",value:"	Có / With	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có / With	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có / With	"},
        {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có / With	"},
        {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có / With	"},
        {label:"	Hệ thống cảnh báo áp suất lốp (TPMS)  		",value:"	Có / With	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Có / With	"},
        {label:"	Hệ thống cảnh báo điểm mù (BSM)  		",value:"	Có / With	"},
        {label:"	Hệ thống cảnh báo phương tiện cắt ngang phía sau  		",value:"	Có / With	"},
        {label:"	Camera 360 độ  		",value:"	Có / With	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có / With	"},
        {label:"	Góc trước		",value:"	Có / With	"},
        {label:"	Góc sau		",value:"	Có / With	"},
        {label:"	Túi khí Số lượng túi khí		",value:"	7	"},
        {label:"	Túi khí người lái & hành khách phía trước		",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
        {label:"	Túi khí rèm		",value:"	Có / With	"},
        {label:"	Túi khí đầu gối người lái		",value:"	Có / With	"},
        {label:"	Dây đai an toàn Loại		",value:"	3 điểm ELR	"},
        {label:"	Bộ căng đai khẩn cấp cho dây đai phía trước		",value:"	Có / With	"}
      ]
      }
  ]

}
