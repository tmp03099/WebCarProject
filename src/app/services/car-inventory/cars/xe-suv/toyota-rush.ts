import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaRush implements CarInfoInterface {
  name = 'Toyota Rush'
  type = CarTypeEnum.XeSuv
  banner = 'assets/img/toyota/rush/viber_image_2021-06-01_09-55-05.png'
  imgSrc = 'assets/img/cars/Rush.png'
  models = [
    {
      brand: 'Toyota Rush 1.5 AT',
      price: 634000000,
      lingo: 'SẴN SÀNG CHO MỌI HÀNH TRÌNH',
      seats: 7,
      type: 'SUV',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động 4 cấp','Tặng thêm 1 năm bảo hiểm thân vỏ Toyota'],
      library:[
        '/assets/img/toyota/rush/library/4aiqtl.jpg',
        '/assets/img/toyota/rush/library/bf1fbf.jpg',      
        '/assets/img/toyota/rush/library/kbl3al.jpg',
        '/assets/img/toyota/rush/library/ldxarm.jpg',
        '/assets/img/toyota/rush/library/ns1s0q.jpg',
        '/assets/img/toyota/rush/library/qddgrw.jpg',      
        '/assets/img/toyota/rush/library/qz1gc4.jpg',
        '/assets/img/toyota/rush/library/rcgmj1.jpg'

      ],
      promotion: [
        `Gói bảo hiểm vật chất 01 năm Toyota (gói bảo hiểm vàng)
        trị giá lên đến 8.7 triệu đồng áp dụng từ ngày 07/05 đến 31/12`,
        `Gói tài chính Balloon áp dụng từ ngày 03/05 đến ngày 31/12 với:
        ✓ Số tiền đầu tư lúc đầu chỉ từ 126.8 triệu đồng
        ✓ Tiền trả hàng tháng chỉ từ 6.8 triệu đồng` 
        ],
      colors: [
        {
          label: 'Trắng - W09',
          image: '/assets/img/toyota/rush/colors/Trang-2.png',
          colorCode: 'white'
        },
        {
          label: 'Bạc - 1E7 ',
          image: '/assets/img/toyota/rush/colors/Bac-2.png',
          colorCode: '#e8e8e8'
        },
        {
          label: 'Đen - X12',
          image: '/assets/img/toyota/rush/colors/Den-2.png',
          colorCode: 'black'
        },
        {
          label: 'Đỏ - 3Q3',
          image: '/assets/img/toyota/rush/colors/Do-2.png',
          colorCode: '#401719'
        },
        {
          label: 'Đồng - 4T3',
          image: '/assets/img/toyota/rush/colors/Dong-4t3.png',
          colorCode: '#484536'
        },
        {
          label: 'Nâu - R54',
          image: '/assets/img/toyota/rush/colors/Nau-2.png',
          colorCode: '#421f2b'
        }
      ],
      ngoaiThat: {
        label: 'DIỆN MẠO KHỎE KHOẮN',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/rush/ngoai-that/4vtahl.jpg',
        features: [
          {
            image: '/assets/img/toyota/rush/ngoai-that/2ktjdf.jpg',
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/aaz3cn.jpg',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/dheiuz.jpg',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/idstrq.jpg',
            label: 'Gương chiếu hậu'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/mmsx1u.jpg',
            label: 'Đuôi xe'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/n20dqx.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/rush/ngoai-that/y1qqzm.jpg',
            label: 'Đầu xe'
          }
        ]
      },
      noiThat: {
        label: 'THÔNG MINH - TINH TẾ',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/rush/noi-that/rcgmj1.jpg',
        features: [
          {
            image: '/assets/img/toyota/rush/noi-that/fcdzg0.jpg',
            label: 'Khoang hành lí'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/olh0s1.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/t0w5yp.jpg',
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/wg5lhb.jpg',
            label: 'Màn hình DVD'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/zkla0x.jpg',
            label: 'Cụm đồng hồ'
          },
          {
            image: '/assets/img/toyota/rush/noi-that/zrdtvg.jpg',
            label: 'Khu vực điều khiển âm thanh, điều hòa'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/rush/tinh-nang/0fbjjl.jpg",
          title: "Hệ thống nhắc nhở cài dây an toàn",
          message: "Hệ thống với tính năng an toàn nhắc nhở người lái và hành khách luôn cài dây an toàn, bảo vệ tính mạng khi tham gia giao thông."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/4iary2.jpg",
          title: "Phân bố lực phanh điện tử (EBD)",
          message: "Hệ thống phân phối lực phanh điện tử EBD phân bổ lực phanh hợp lý lên các bánh xe, giúp nâng cao hiệu quả phanh, đặc biệt khi xe đang chất tải và vào cua."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/22qeyr.jpg",
          title: "Túi khí",
          message: "Hệ thống an toàn đầy đủ, tiện nghi với 6 túi khí và đèn báo dây đai an toàn ở tất cả các ghế giúp giảm thiểu chấn thương cho hành khách trong trường hợp không may xảy ra va chạm."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/b5iag1.jpg",
          title: "Hỗ trợ lực phanh khẩn cấp",
          message: "Hệ thống hỗ trợ lực phanh khẩn cấp BA tự động gia tăng thêm lực phanh trong trường hợp khẩn cấp, giúp người lái tự tin xử lý các tình huống bất ngờ."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/bjkhuu.jpg",
          title: "Hệ thống chống bó cứng phanh (ABS)",
          message: "Khi được kích hoạt bằng đạp phanh dứt khoát, hệ thống chống bó cứng phanh ABS sẽ tự động nhấp nhả phanh liên tục, giúp các bánh xe không bị bó cứng, cho phép người lái duy trì khả năng điều khiển xe tránh chướng ngại vật và đảm bảo ổn định thân xe."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/chv3li.jpg",
          title: "Động cơ",
          message: "Sức mạnh của Toyota Rush 2018 đến từ khối động cơ 4 xi-lanh, dung tích 1,5 lít mới, mang mã 2NR-FE, sản sinh ra công suất mã lực 102  tại 6.300 vòng/phút và mô-men xoắn cực đại 134 tại 4.200 vòng/phút."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/dcrxdq.jpg",
          title: "Chìa khóa thông minh và khởi động bằng nút bấm",
          message: "Hệ thống khởi động thông minh bằng nút bấm tạo sự thuận tiện tối đa cho khách hàng. Chỉ với thao tác bấm nút, xe đã khởi động để chuẩn bị cho hành trình mới."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/deorge.jpg",
          title: "Hộp số",
          message: "Hộp số tự động 4 cấp được cải tiến giúp xe vận hành êm ái, di chuyển mượt mà trên mọi chặng đường."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/dx2iht.jpg",
          title: "Bán kính vòng quay",
          message: "Bán kính quay vòng tối thiểu nhỏ - 5.2 m, giúp người dùng điều khiển dễ dàng trong không gian hẹp."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/ebkb00.jpg",
          title: "Cảm biến sau và camera lùi",
          message: "Cảm biến  sau và camera lùi hỗ trợ xác định vật cản ở đuôi xe, phát tín hiệu cảnh báo giúp người điều khiển đánh lái phù hợp."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/fjjqnc.jpg",
          title: "Khung xe GOA",
          message: "Thiết kế khung GOA gia tăng tối đa tính an toàn cho người ngồi trong xe."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/gr00zz.jpg",
          title: "Hệ thống cân bằng điện tử (VSC)",
          message: "Hệ thống VSC kiểm soát công suất động cơ và phân bổ lực phanh hợp lý tới từng bánh xe, nhờ đó giảm thiểu nguy cơ mất lái và trượt bánh xe đặc biệt trên các cung đường trơn trượt hay khi vào cua gấp."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/ibmof1.jpg",
          title: "Hệ thống hỗ trợ khởi hành ngang dốc (HAC)",
          message: "Người lái chuyển từ chân phanh sang chân ga để khởi hành ngang dốc, hệ thống HAC sẽ tự động tác động phanh tới cả 4 bánh xe trong vòng khoảng 2 giây, nhờ đó giúp chiếc xe không bị trôi dốc và dễ dàng khởi hành hơn."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/mf3yai.jpg",
          title: "Dẫn động cầu sau",
          message: "Hệ thống dẫn cầu sau với sức đẩy tốt giúp xe lên dốc và chở tải dễ dàng."
        },
        {
          image: "/assets/img/toyota/rush/tinh-nang/wwqzjn.jpg",
          title: "Hệ thống treo trướcHệ thống treo trước",
          message: "Với hệ thống treo trước độc lập Macpherson giúp xe vận hành êm dịu và đảm bảo độ bám đường cho bánh xe cùng hệ thống treo sau phụ thuộc đa liên kết chắc chắn và chịu lực tốt."
        }


      ],
      thongSo: [
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	4435 x 1695 x 1705	"},
        {label:"	Kích thước tổng thể bên trong (D x R x C) (mm x mm x mm)		",value:"	2490 x 1415 x 1195	"},
        {label:"	Chiều dài cơ sở (mm)		",value:"	2685	"},
        {label:"	Chiều rộng cơ sở (Trước / sau) (mm)		",value:"	1445 / 1460	"},
        {label:"	Khoảng sáng gầm xe (mm)		",value:"	220	"},
        {label:"	Góc thoát (Trước / Sau) (độ / degree)		",value:"	31.0 / 26.5	"},
        {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	5,2	"},
        {label:"	Trọng lượng không tải (kg)		",value:"	1290	"},
        {label:"	Trọng lượng toàn tải (kg)		",value:"	1870	"},
        {label:"	Dung tích bình nhiên liệu (L)		",value:"	45	"},
        {label:"	Động cơ Loại động cơ		",value:"	2NR-VE (1.5L)	"},
        {label:"	Số xy lanh		",value:"	4	"},
        {label:"	Bố trí xy lanh		",value:"	Thẳng hàng / In line	"},
        {label:"	Dung tích xy lanh (cc)		",value:"	1496	"},
        {label:"	Tỉ số nén		",value:"	11,5	"},
        {label:"	Hệ thống nhiên liệu		",value:"	Phun xăng điện tử / Electronic fuel injection	"},
        {label:"	Loại nhiên liệu		",value:"	Xăng / Petrol	"},
        {label:"	Công suất tối đa (kW (Mã lực) @ vòng / phút)		",value:"	(76) / 102 @ 6300	"},
        {label:"	Mô men xoắn tối đa (Nm @ vòng / phút)		",value:"	134 @ 4200	"},
        {label:"	Tốc độ tối đa		",value:"	160	"},
        {label:"	Tiêu chuẩn khí thải		",value:"	Euro 4	"},
        {label:"	Hệ thống ngắt / mở động cơ tự động		",value:"	Không có / Without	"},
        {label:"	Chế độ lái  		",value:"	Không có / Without	"},
        {label:"	Hệ thống truyền động  		",value:"	Dẫn động cầu sau / RWD	"},
        {label:"	Hộp số  		",value:"	Số tự động 4 cấp / 4AT	"},
        {label:"	Hệ thống treo Trước		",value:"	Macpherson	"},
        {label:"	Sau		",value:"	Phụ thuộc đa liên kết	"},
        {label:"	Hệ thống lái Trợ lực tay lái		",value:"	Điện / Power	"},
        {label:"	Hệ thống tay lái tỉ số truyền biến thiên (VGRS)		",value:"	Không có / Without	"},
        {label:"	Vành & lốp xe Loại vành		",value:"	Mâm đúc / Alloy	"},
        {label:"	Kích thước lốp		",value:"	215 / 60R17	"},
        {label:"	Lốp dự phòng		",value:"	Mâm đúc / Alloy	"},
        {label:"	Phanh Trước		",value:"	Đĩa tản nhiệt 16 / Ventilated disc 16	"},
        {label:"	Sau		",value:"	Tang trống / Drum	"},
        {label:"	Tiêu thụ nhiên liệu Kết hợp		",value:"	6,7	"},
        {label:"	Trong đô thị		",value:"	8,2	"},
        {label:"	Ngoài đô thị		",value:"	5,8	"},
        {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	LED	"},
        {label:"	Đèn chiếu xa		",value:"	LED	"},
        {label:"	Đèn chiếu sáng ban ngày		",value:"	Không có / Without	"},
        {label:"	Hệ thống rửa đèn		",value:"	Không có / Without	"},
        {label:"	Hệ thống điều khiển đèn tự động		",value:"	Có / With	"},
        {label:"	Hệ thống nhắc nhở đèn sáng		",value:"	Có / With	"},
        {label:"	Hệ thống mở rộng góc chiếu tự động		",value:"	Không có / Without	"},
        {label:"	Hệ thống cân bằng góc chiếu		",value:"	Không có / Without	"},
        {label:"	Chế độ đèn chờ dẫn đường		",value:"	Không có / Without	"},
        {label:"	Cụm đèn sau  		",value:"	LED	"},
        {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
        {label:"	Đèn sương mù Trước		",value:"	Có / With	"},
        {label:"	Sau		",value:"	Không có / Without	"},
        {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có / With	"},
        {label:"	Chức năng gập điện		",value:"	Có / With	"},
        {label:"	Tích hợp đèn báo rẽ		",value:"	Có / With	"},
        {label:"	Tích hợp đèn chào mừng		",value:"	Không có / Without	"},
        {label:"	Màu		",value:"	Cùng màu thân xe / Body Color	"},
        {label:"	Chức năng tự điều chỉnh khi lùi		",value:"	Không có / Without	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có / Without	"},
        {label:"	Chức năng sấy gương		",value:"	Không có / Without	"},
        {label:"	Chức năng chống bám nước		",value:"	Không có / Without	"},
        {label:"	Chức năng chống chói tự động		",value:"	Không có / Without	"},
        {label:"	Gạt mưa Trước		",value:"	Gián đoạn / intermittent	"},
        {label:"	Sau		",value:"	Gián đoạn / intermittent	"},
        {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
        {label:"	Ăng ten  		",value:"	Vây cá / Sharkfin	"},
        {label:"	Tay nắm cửa ngoài  		",value:"	Cùng màu thân xe, có nút bấm / Colored w / switch	"},
        {label:"	Bộ quây xe thể thao  		",value:"	Không có / Without	"},
        {label:"	Cản xe Trước		",value:"	Cùng màu thân xe / Colored	"},
        {label:"	Sau		",value:"	Đen / Black	"},
        {label:"	Lưới tản nhiệt Trước		",value:"	Mạ chrome / Chrome	"},
        {label:"	Chắn bùn  		",value:"	Không có / Without	"},
        {label:"	Ống xả kép  		",value:"	Không có / Without	"},
        {label:"	Cánh hướng gió nóc xe  		",value:"	Có / With	"},
        {label:"	Thanh đỡ nóc xe  		",value:"	Có / With	"},
        {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
        {label:"	Chất liệu		",value:"	Bọc da / Leather	"},
        {label:"	Nút bấm điều khiển tích hợp		",value:"	Âm thanh + điện thoại rảnh tay / Audio + tel	"},
        {label:"	Điều chỉnh		",value:"	Chỉnh tay 2 hướng / Manual tilt	"},
        {label:"	Lẫy chuyển số		",value:"	Không có / Without	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có / Without	"},
        {label:"	Gương chiếu hậu trong  		",value:"	2 chế độ ngày và đêm / Day & night	"},
        {label:"	Tay nắm cửa trong  		",value:"	Mạ chrome / Chrome	"},
        {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Analog	"},
        {label:"	Đèn báo chế độ Eco		",value:"	Có / With	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
        {label:"	Chức năng báo vị trí cần số		",value:"	Có / With	"},
        {label:"	Màn hình hiển thị đa thông tin		",value:"	LCD	"},
        {label:"	Cửa sổ trời  		",value:"	Không có / Without	"},
        {label:"	Chất liệu bọc ghế  		",value:"	Nỉ / Fabric	"},
        {label:"	Ghế trước Loại ghế		",value:"	Thường / Normal	"},
        {label:"	Điều chỉnh ghế lái		",value:"	Chỉnh tay 6 hướng / 6 way manual	"},
        {label:"	Điều chỉnh ghế hành khách		",value:"	Chỉnh tay 4 hướng / 4 way manual	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có / Without	"},
        {label:"	Chức năng thông gió		",value:"	Không có / Without	"},
        {label:"	Chức năng sưởi		",value:"	Không có / Without	"},
        {label:"	Ghế sau Hàng ghế thứ hai		",value:"	Gập thẳng 60:40 1 chạm / Tumble 60:40 1 touch	"},
        {label:"	Hàng ghế thứ ba		",value:"	50:50 gập thẳng, 50:50 tumble	"},
        {label:"	Hàng ghế thứ bốn		",value:"	Không có / Without	"},
        {label:"	Hàng ghế thứ năm		",value:"	Không có / Without	"},
        {label:"	Rèm che nắng kính sau  		",value:"	Không có / Without	"},
        {label:"	Rèm che nắng cửa sau  		",value:"	Không có / Without	"},
        {label:"	Hệ thống điều hòa Trước		",value:"	Tự động / auto	"},
        {label:"	Cửa gió sau  		",value:"	Có / With	"},
        {label:"	Hộp làm mát  		",value:"	Không có / Without	"},
        {label:"	Hệ thống âm thanh Đầu đĩa		",value:"	DVD 7	"},
        {label:"	Số loa		",value:"	8	"},
        {label:"	Cổng kết nối AUX		",value:"	Có / With	"},
        {label:"	Cổng kết nối USB		",value:"	Có / With	"},
        {label:"	Kết nối Bluetooth		",value:"	Có / With	"},
        {label:"	Hệ thống điều khiển bằng giọng nói		",value:"	Không có / Without	"},
        {label:"	Chức năng điều khiển từ hàng ghế sau		",value:"	Không có / Without	"},
        {label:"	Kết nối wifi		",value:"	Có / With	"},
        {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
        {label:"	Kết nối điện thoại thông minh		",value:"	Có / With	"},
        {label:"	Kết nối HDMI		",value:"	Có / With	"},
        {label:"	Chìa khóa thông minh & khởi động bằng nút bấm  		",value:"	Có / With	"},
        {label:"	Khóa cửa điện  		",value:"	Có / With	"},
        {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
        {label:"	Cửa sổ điều chỉnh điện  		",value:"	Có, 1 chạm chống kẹt ghế lái / With, D- 1 touch jam protection	"},
        {label:"	Cốp điều khiển điện  		",value:"	Không có / Without	"},
        {label:"	Hệ thống sạc không dây  		",value:"	Không có / Without	"},
        {label:"	Hệ thống điều khiển hành trình  		",value:"	Không có / Without	"},
        {label:"	Hệ thống báo động  		",value:"	Có / With	"},
        {label:"	Hệ thống mã hóa khóa động cơ  		",value:"	Có / With	"},
        {label:"	Hệ thống chống bó cứng phanh  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp  		",value:"	Có / With	"},
        {label:"	Hệ thống phân phối lực phanh điện tử  		",value:"	Có / With	"},
        {label:"	Hệ thống ổn định thân xe  		",value:"	Có / With	"},
        {label:"	Hệ thống kiểm soát lực kéo  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ khởi hành đỗ đèo  		",value:"	Không có / Without	"},
        {label:"	Hệ thống lựa chọn vận tốc vượt địa hình  		",value:"	Không có / Without	"},
        {label:"	Hệ thống thích nghi địa hình  		",value:"	Không có / Without	"},
        {label:"	Đèn báo phanh khẩn cấp  		",value:"	Có / With	"},
        {label:"	Camera lùi  		",value:"	Có / With	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	2	"},
        {label:"	Góc trước		",value:"	0	"},
        {label:"	Góc sau		",value:"	0	"},
        {label:"	Túi khí Túi khí người lái & hành khách phía trước		",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
        {label:"	Túi khí rèm		",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía sau		",value:"	Không có / Without	"},
        {label:"	Túi khí đầu gối người lái		",value:"	Không có / Without	"},
        {label:"	Túi khí đầu gối hành khách		",value:"	Không có / Without	"},
        {label:"	Dây đai an toàn Trước		",value:"	3 điểm ELR, 7 vị trí / 3 points ELRx7	"}
      ]
    }
  ]
}
