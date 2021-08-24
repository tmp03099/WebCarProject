import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface, CarModelInfoInterface } from "../../interfaces";

export class ToyotaYaris implements CarInfoInterface {
  name = 'Toyota Yaris'
  type = CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/yaris.png'
  banner = 'assets/img/toyota/yaris/banner.jpg'
  models: CarModelInfoInterface[] = [
    {
      brand: 'Toyota Yaris 1.5G CVT',
      price: 668000000,
      lingo: 'Sành điệu xuống phố',
      seats: 5,
      type: 'Hatchback',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động vô cấp'],
      library:[
        '/assets/img/toyota/yaris/library/drlqtx.jpg',
        '/assets/img/toyota/yaris/library/q0aumm.jpg',
        '/assets/img/toyota/yaris/library/syf0a1.jpg',
        '/assets/img/toyota/yaris/library/ujkjrk.jpg'
      ],
      colors: [
        {
          label: 'Xanh - 8W9',
          image: '/assets/img/toyota/yaris/colors/8W9_CYAN-METALLIC-1.png',
          colorCode: 'blue'
        },
        {
          label: 'Xám - 1G3',
          image: '/assets/img/toyota/yaris/colors/1G3_GRAY-1.png',
          colorCode: 'gray'
        },
        {
          label: 'Trắng- 040',
          image: '/assets/img/toyota/yaris/colors/040_SUPER-WHITE-1.png',
          colorCode: 'white'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/yaris/colors/218_ATTITUDE-BLACK-1.png',
          colorCode: 'black'
        },
        {
          label: 'Cam - 4R8',
          image: '/assets/img/toyota/yaris/colors/4R8_ORANGE-1.png',
          colorCode: 'orange'
        },
        {
          label: 'Vàng - 6W2',
          image: '/assets/img/toyota/yaris/colors/6W2_YELLOW-1.png',
          colorCode: 'yellow'
        },
        {
          label: 'Bạc - 1D4',
          image: '/assets/img/toyota/yaris/colors/1D4_SILVER-1.png',
          colorCode: 'silver'
        },
        {
          label: 'Đỏ - 3R3',
          image: '/assets/img/toyota/yaris/colors/3R3_RED-1.png',
          colorCode: 'red'
        }
      ],
      ngoaiThat: {
        label: 'THU HÚT MỌI ÁNH NHÌN',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/yaris/ngoai-that/0aj3gg.jpg',
        features: [
          {
            image: '/assets/img/toyota/yaris/ngoai-that/0hyavd.jpg',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/hy1yub.jpg',
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/iqctm2.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/marq3c.jpg',
            label: 'Góc đuôi xe'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/pfcfxz.jpg',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/qpgdkj.jpg',
            label: 'Gương chiếu hậu ngoài'
          },
          {
            image: '/assets/img/toyota/yaris/ngoai-that/z5qpfw.jpg',
            label: 'Đầu xe'
          }
        ]
      },
      noiThat: {
        label: 'TINH TẾ - KHÔNG GIAN THOÁNG ĐÃNG',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/yaris/noi-that/yfegd1.jpg',
        features: [
          {
            image: '/assets/img/toyota/yaris/noi-that/21xrr1.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/hie4aa.jpg',
            label: 'Thiết kế nội thất'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/lgrxtj.jpg',
            label: 'Bảng điều khiển trung tâm'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/m3ts1g.jpg',
            label: 'Hệ thống khởi động thông minh'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/mpgfk4.jpg',
            label: 'Đầu DVD'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/s5riu3.jpg',
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/sccib0.jpg',
            label: 'Bảng đồng hồ'
          },
          {
            image: '/assets/img/toyota/yaris/noi-that/xdsiyz.jpg',
            label: 'Hàng ghế sau'
          }

        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/yaris/tinh-nang/1pgve5.jpg",
          title: "Hệ thống cân bằng điện tử",
          message: "VSC kiểm soát công suất động cơ và phân bổ lực phanh hợp lý tới từng bánh xe, nhờ đó giảm thiểu nguy cơ mất lái và trượt bánh xe, đặc biệt trên các cung đường trơn trượt hay khi vào cua gấp."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/1qmjik.jpg",
          title: "Hỗ trợ lực phanh khẩn cấp",
          message: "Phanh trước dạng đĩa thông gió và phanh sau dạng đĩa đảm bảo lực phanh tối ưu gia tăng tính an toàn để người lái yên tâm và tự tin hơn khi điều khiển xe."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/1uuxfj.jpg",
          title: "Hệ thống phân phối lực phanh điện tử",
          message: "EBD phân bổ lực phanh hợp lý đến các bánh xe, giúp nâng cao hiệu quả phanh, đặc biệt khi xe đang chất tải và vào cua."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/4dym1b.jpg",
          title: "Hệ thống phanh",
          message: "Phanh trước dạng đĩa thông gió và phanh sau dạng đĩa đảm bảo lực phanh tối ưu gia tăng tính an toàn để người lái yên tâm và tự tin hơn khi điều khiển xe."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/5kfaqq.jpg",
          title: "Hộp số",
          message: "Hộp số tự động vô cấp CVT giúp chiếc xe vận hành êm ái, tăng tốc mượt mà."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/45ttrh.jpg",
          title: "AN TOÀN TIÊU CHUẨN 5 SAO (ASEAN N-CAP)",
          message: "Yaris phiên bản mới được trang bị hệ thống 7 túi khí gồm 2 túi khí phía trước, 2 túi khí bên hông phía trước, 2 túi khí rèm và 1 túi khí đầu gối người lái sẽ đảm bảo an toàn cho hành khách và người lái trên mọi hành trình."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/adhiv0.jpg",
          title: "Hệ thống chống cứng bó phanh",
          message: "Hệ thống chống bó cứng phanh (ABS) điều khiển phanh bằng máy tính giúp bánh xe không bị trượt khi phanh gấp."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/c5avpj.jpg",
          title: "Hệ thống kiểm soát lực kéo",
          message: "Khi xe chạy thẳng và tăng tốc trên đường trơn trượt, hệ thống kiểm soát lực kéo TRC chủ động kiểm soát độ cân bằng thông qua việc tăng giảm lực truyền động đến các bánh xe và tốc độ từng bánh xe."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/frec0j.jpg",
          title: "Hỗ trợ khởi hành ngang dốc (HAC)",
          message: "HAC sẽ tự động phanh các bánh xe trong 2 giây giúp xe không bị trôi, khi người lái chuyển từ chân ga sang chân phanh để khởi hành ngang dốc."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/jrkyub.jpg",
          title: "Dây đai an toàn",
          message: "Dây đai an toàn 3 điểm với bộ căng đai và khóa khẩn cấp được trang bị trên tất cả các vị trí, hành khách có thể hoàn toàn yên tâm tận hưởng hành trình của mình."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/juzvkn.jpg",
          title: "Ghế có cấu trúc giảm chấn thương cổ",
          message: "Tựa đầu được trang bị đệm mút dầy hơn, giúp áp sát đầu và cổ của hành khách để hạn chế tối đa chấn thương đốt sống cổ khi có va chạm xảy ra. Ngoài ra, cấu trúc thân xe giúp hấp thụ tối đa và phân bổ lực va chạm làm giảm xung lực truyền tới cabin xe."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/r0x2jv.jpg",
          title: "Động cơ",
          message: "Yaris phiên bản mới vận hành mạnh mẽ và tiết kiệm nhiên liệu nhờ vào động cơ 2NR-FE với công nghệ phun xăng điện tử và điều phối van biến thiên thông minh kép Dual VVTi."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/wuifqj.jpg",
          title: "Khung xe GOA",
          message: "Khung xe GOA được chế tạo đặc biệt với các vùng co rụm ở phía trước và phía sau có tác dụng hấp thụ xung lực khi va chạm. Bên cạnh đó, khoang hành khách là khu vực được bảo vệ tốt nhất với thiết kế vững chắc nhằm hạn chế tối đa sự biến dạng với các thanh gia cường."
        },
        {
          image: "/assets/img/toyota/yaris/tinh-nang/zfc1sr.jpg",
          title: "Cảm biến sau",
          message: "Khách hàng hoàn toàn yên tâm khi vận hành dù trong không gian nhiều chướng ngại vật."
        }
      ],
      thongSo: [
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	4140 x 1730 x 1500	"},
        {label:"	Chiều dài cơ sở (mm)		",value:"	2550	"},
        {label:"	Chiều rộng cơ sở (Trước / sau) (mm)		",value:"	1460 / 1445	"},
        {label:"	Khoảng sáng gầm xe (mm)		",value:"	135	"},
        {label:"	Trọng lượng không tải (kg)		",value:"	1120	"},
        {label:"	Trọng lượng toàn tải (kg)		",value:"	1550	"},
        {label:"	Dung tích bình nhiên liệu (L)		",value:"	42	"},
        {label:"	Động cơ xăng Loại động cơ		",value:"	2NR-FE (1.5L)	"},
        {label:"	Số xy lanh		",value:"	4	"},
        {label:"	Bố trí xy lanh		",value:"	Thẳng hàng / In line	"},
        {label:"	Dung tích xy lanh (cc)		",value:"	1496	"},
        {label:"	Tỉ số nén		",value:"	-	"},
        {label:"	Hệ thống nhiên liệu		",value:"	Phun xăng điện tử / Electronic fuel injection	"},
        {label:"	Loại nhiên liệu		",value:"	Xăng / Petrol	"},
        {label:"	Công suất tối đa ((KW) HP / vòng / phút)		",value:"	(79)107 / 6000	"},
        {label:"	Mô men xoắn tối đa (Nm / vòng / phút)		",value:"	140 / 4200	"},
        {label:"	Hệ thống ngắt / mở động cơ tự động		",value:"	Không có / Without	"},
        {label:"	Chế độ lái (công suất cao / tiết kiệm nhiên liệu)  		",value:"	Không có / Without	"},
        {label:"	Hệ thống truyền động  		",value:"	Dẫn động cầu trước / FWD	"},
        {label:"	Hộp số  		",value:"	Số tự động vô cấp / CVT	"},
        {label:"	Hệ thống treo Trước		",value:"	Mc Pherson / Mc Pherson Struts	"},
        {label:"	Sau		",value:"	Thanh xoắn / Torsion beam	"},
        {label:"	Hệ thống lái Trợ lực tay lái		",value:"	Điện / Electric	"},
        {label:"	Hệ thống tay lái tỉ số truyền biến thiên (VGRS)		",value:"	Không có / Without	"},
        {label:"	Vành & lốp xe Loại vành		",value:"	Mâm đúc / Alloy	"},
        {label:"	Kích thước lốp		",value:"	195 / 50 R16	"},
        {label:"	Lốp dự phòng		",value:"	195 / 50 R16, Mâm đúc / Alloy	"},
        {label:"	Phanh Trước		",value:"	Đĩa tản nhiệt 15 / Ventilated disc 15	"},
        {label:"	Sau		",value:"	Đĩa đặc 15 / Solid disc 15	"},
        {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
        {label:"	Tiêu thụ nhiên liệu Trong đô thị (L / 100km)		",value:"	8.23	"},
        {label:"	Ngoài đô thị (L / 100km)		",value:"	5.32	"},
        {label:"	Kết hợp (L / 100km)		",value:"	6.38	"},
        {label:"	Cụm đèn trước Đèn chiếu sáng ban ngày		",value:"	Có / With (LED)	"},
        {label:"	Hệ thống rửa đèn		",value:"	Không có / Without	"},
        {label:"	Chế độ điều khiển đèn tự động		",value:"	Có / With	"},
        {label:"	Hệ thống nhắc nhở đèn sáng		",value:"	Có / With	"},
        {label:"	Hệ thống cân bằng đèn pha		",value:"	Không có / Without	"},
        {label:"	Hệ thống cân bằng góc chiếu		",value:"	Không có / Without	"},
        {label:"	Chế độ đèn chờ dẫn đường		",value:"	Có / With	"},
        {label:"	Cụm đèn sau  		",value:"	LED	"},
        {label:"	Đèn báo phanh trên cao  		",value:"	Có (LED) / / With (LED)	"},
        {label:"	Đèn sương mù Trước		",value:"	Có / With (LED)	"},
        {label:"	Sau		",value:"	Không có / Without	"},
        {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có / With	"},
        {label:"	Chức năng gập điện		",value:"	Có / With	"},
        {label:"	Tích hợp đèn chào mừng		",value:"	Không có / Without	"},
        {label:"	Tích hợp đèn báo rẽ		",value:"	Có / With	"},
        {label:"	Màu		",value:"	Cùng màu thân xe / Body color	"},
        {label:"	Chức năng tự điều chỉnh khi lùi		",value:"	Không có / Without	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có / Without	"},
        {label:"	Chức năng sấy gương		",value:"	Không có / Without	"},
        {label:"	Chức năng chống bám nước		",value:"	Không có / Without	"},
        {label:"	Chức năng chống chói tự động		",value:"	Không có / Without	"},
        {label:"	Gạt mưa Trước		",value:"	Gián đoạn (điều chỉnh thời gian) / Intermittent (Time adjustment + Mist)	"},
        {label:"	Sau		",value:"	Có (liên tục) / With (Without intermittent)	"},
        {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
        {label:"	Ăng ten  		",value:"	Vây cá / Shark fin	"},
        {label:"	Tay nắm cửa ngoài  		",value:"	Mạ crôm / Chrome plating	"},
        {label:"	Bộ quây xe thể thao  		",value:"	Không có / Without	"},
        {label:"	Thanh cản (giảm va chạm) Trước		",value:"	Cùng màu thân xe / Colored	"},
        {label:"	Sau		",value:"	Cùng màu thân xe / Colored	"},
        {label:"	Lưới tản nhiệt  		",value:"	Mạ / Plating	"},
        {label:"	Chắn bùn  		",value:"	Không có / Without	"},
        {label:"	Ống xả kép  		",value:"	Không có / Without	"},
        {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
        {label:"	Chất liệu		",value:"	Bọc da / leather	"},
        {label:"	Nút bấm điều khiển tích hợp		",value:"	Điều chỉnh âm thanh / Audio switch	"},
        {label:"	Điều chỉnh		",value:"	Chỉnh tay 2 hướng / Manual tilt	"},
        {label:"	Lẫy chuyển số		",value:"	Không có / Without	"},
        {label:"	Gương chiếu hậu trong  		",value:"	2 chế độ ngày và đêm / Day & Night	"},
        {label:"	Tay nắm cửa trong  		",value:"	Mạ bạc / Silver plating	"},
        {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Optitron	"},
        {label:"	Đèn báo Eco		",value:"	Có / With	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
        {label:"	Chức năng báo vị trí cần số		",value:"	Có / With	"},
        {label:"	Màn hình hiển thị đa thông tin		",value:"	Có / With	"},
        {label:"	Cửa sổ trời  		",value:"	Không có / Without	"},
        {label:"	Chất liệu bọc ghế  		",value:"	Da / Leather	"},
        {label:"	Ghế trước Loại ghế		",value:"	Thường / Normal	"},
        {label:"	Điều chỉnh ghế lái		",value:"	Chỉnh tay 6 hướng / 6 way manual	"},
        {label:"	Điều chỉnh ghế hành khách		",value:"	Chỉnh tay 4 hướng / 4 way manual	"},
        {label:"	Chức năng thông gió		",value:"	Không có / Without	"},
        {label:"	Chức năng sưởi		",value:"	Không có / Without	"},
        {label:"	Ghế sau Hàng ghế thứ hai		",value:"	Gập lưng ghế 60:40 / 60:40 split fold	"},
        {label:"	Tựa tay hàng ghế sau		",value:"	Không có / Without	"},
        {label:"	Rèm che nắng kính sau  		",value:"	Không có / Without	"},
        {label:"	Rèm che nắng cửa sau  		",value:"	Không có / Without	"},
        {label:"	Hệ thống điều hòa  		",value:"	Tự động / Auto	"},
        {label:"	Cửa gió sau  		",value:"	Không có / Without	"},
        {label:"	Hộp làm mát  		",value:"	Không có / Without	"},
        {label:"	Hệ thống âm thanh Đầu đĩa		",value:"	Màn hình cảm ứng / Touch screen	"},
        {label:"	Số loa		",value:"	6	"},
        {label:"	Cổng kết nối AUX		",value:"	Không có / Without	"},
        {label:"	Cổng kết nối USB		",value:"	Có / With	"},
        {label:"	Kết nối Bluetooth		",value:"	Có / With	"},
        {label:"	Điều khiển giọng nói		",value:"	Có / With	"},
        {label:"	Chức năng điều khiển từ hàng ghế sau		",value:"	Không có / Without	"},
        {label:"	Kết nối wifi		",value:"	Không có / Without	"},
        {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
        {label:"	Kết nối điện thoại thông minh / Smartphone connectivity		",value:"	Có / With	"},
        {label:"	Kết nối HDMI		",value:"	Không có / Without	"},
        {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Có / With	"},
        {label:"	Khóa cửa điện  		",value:"	Có / With	"},
        {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
        {label:"	Cửa sổ điều chỉnh điện  		",value:"	Có (1 chạm, chống kẹt bên người lái) / With (Auto, jam protection for driver window)	"},
        {label:"	Hệ thống kiểm soát hành trình  		",value:"	Có / With	"},
        {label:"	Hệ thống báo động		",value:"	Có / With	"},
        {label:"	Hệ thống mã hóa khóa động cơ		",value:"	Có / With	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có / With	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có / With	"},
        {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có / With	"},
        {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ đổ đèo (DAC)  		",value:"	Không có / Without	"},
        {label:"	Hệ thống lựa chọn vận tốc vượt địa hình  		",value:"	Không có / Without	"},
        {label:"	Hệ thống thích nghi địa hình (MTS)  		",value:"	Không có / Without	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Không có / Without	"},
        {label:"	Camera lùi  		",value:"	Có / With	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có / With	"},
        {label:"	Góc trước		",value:"	Có / With	"},
        {label:"	Góc sau		",value:"	Có / With	"},
        {label:"	Túi khí Số lượng túi khí		",value:"	7	"},
        {label:"	Túi khí người lái & hành khách phía trước		",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
        {label:"	Túi khí rèm		",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía sau		",value:"	Không có / Without	"},
        {label:"	Túi khí đầu gối người lái		",value:"	Có / With	"},
        {label:"	Túi khí đầu gối hành khách		",value:"	Không có / Without	"},
        {label:"	Khung xe GOA  		",value:"	Có / With	"},
        {label:"	Dây đai an toàn  		",value:"	3 điểm ELR, 5 vị trí / 3 points ELRx5	"},
        {label:"	Ghế có cấu trúc giảm chấn thương cổ  		",value:"	Có / With	"},
        {label:"	Cột lái tự đổ  		",value:"	Có / With	"},
        {label:"	Bàn đạp phanh tự đổ  		",value:"	Có / With	"},
      ]
     }
  ]
}
