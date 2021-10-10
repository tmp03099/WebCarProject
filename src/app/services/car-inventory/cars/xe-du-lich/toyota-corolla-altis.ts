import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaCorollaAltis implements CarInfoInterface {
  name = 'Toyota Corolla Altis'
  type = CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/corolla altis.png'
  banner = 'assets/img/toyota/altis/banner.jpg'
  models = [
    {
      brand: 'Toyota Corolla Altis 1.8E CVT',
      price: 733000000, 
      seats: 5,
      type: 'Sedan',
      fuelType: 'Xăng',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tự động vô cấp','Động cơ xăng dung tích 1.798 cm3'],
      library:[
        '/assets/img/toyota/altis/library/r2ozze.jpg',
        '/assets/img/toyota/altis/library/nb35q4.jpg',      
        '/assets/img/toyota/altis/library/qrvdqf.jpg',
        '/assets/img/toyota/altis/library/u1dq0c.jpg'
      ],
      promotion: [
        `Ưu đãi lệ phí trước bạ 40 triệu đồng, áp dụng từ 01/10-31/10/2021`
      ],
      colors: [
        {
          label: 'Trắng ngọc trai - 070',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/WHILE-070-2.png',
          colorCode: '#f7f9fa'
        },
        {
          label: 'Đỏ - 3R3',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/Đỏ-3R3-2.png',
          colorCode: '#841b23'
        },
        {
          label: 'Đen - 218',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/BLACK-218-2.png',
          colorCode: 'black'
        },
        {
          label: 'Nâu - 4W9',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/BROWN-4W9-2.png',
          colorCode: '#1f1a1a'
        },
        {
          label: 'Trắng - 040',
          image:'/assets/img/toyota/altis/colors/1.8E CVT/WHILE-040-2.png',
          colorCode: 'white'
        }
      ],
      ngoaiThat: {
        label: 'XỨNG TẦM THƯỢNG LƯU',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/altis/ngoai-that/hjp0b4.jpg',
        features: [
          {
            image: '/assets/img/toyota/altis/ngoai-that/1kt1s0.jpg',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/5e3obn.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/5fuabj.jpg',
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/fxbsv0.jpg',
            label: 'Đuôi xe'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/ivce3v.jpg',
            label: 'Gương chiếu hậu bên ngoài'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/mb3sm1.jpg',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/altis/ngoai-that/voynkn.jpg',
            label: 'Mâm xe'
          }
        ]
      },
      noiThat: {
        label: 'KHÔNG GIAN NỘI THẤT SANG TRỌNG, TINH TẾ',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/altis/noi-that/kwnsjt.jpg',
        features: [
          {
            image: '/assets/img/toyota/altis/noi-that/0a4lwx.jpg',
            label: 'Cửa sổ điều hòa'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/1op5a3.jpg',
            label: 'Ghế ngồi'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/4ijsya.jpg',
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/bbi5rr.jpg',
            label: 'Hệ thống âm thanh'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/ebxn0q.jpg',
            label: 'Hàng ghế 2'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/emrgc2.jpg',
            label: 'Cửa sổ chỉnh điện'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/pirpf5.jpg',
            label: 'Nội thất rộng rãi, tiện nghi'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/tbi3ma.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/nkxev5.jpg',
            label: 'Tay tựa hàng ghế 2'
          },
          {
            image: '/assets/img/toyota/altis/noi-that/ufammi.jpg',
            label: 'Hộc đựng tiện lợi'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/altis/tinh-nang/0lzs2f.jpg",
          title: "Tay lái trợ lực điện",
          message: "Tay lái trợ lực điện với khả năng điều chỉnh 4 hướng cho phép chủ sở hữu phản ứng linh hoạt, chính xác, điều khiển ổn định ở mọi tốc độ,giúp chủ sở hữu làm chủ hành trình."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/0wwbvw.jpg",
          title: "Hệ thống cân bằng điện tử",
          message: "Hệ thống cân bằng điện tử VSC được điều khiển bằng hệ thống tự động, giúp kiểm soát tình trạng trượt và tăng cường độ ổn định khi xe vào cua."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/1j3cav.jpg",
          title: "Hệ thống chống bó cứng phanh",
          message: "Khi được kích hoạt bằng cách đạp phanh dứt khoát, hệ thống chống bó cứng phanh ABS sẽ tự động nhấp nhả phanh liên tục, giúp các bánh xe không bị bó cứng, cho phép người lái duy trì khả năng điều khiển xe tránh chướng ngại vật và đảm bảo độ ổn định thân xe."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/5omr3q.jpg",
          title: "Khung xe goa",
          message: "Được nghiên cứu và thử nghiệm kỹ lưỡng trước khi đưa vào thực tế, khung xe GOA có các vùng co rụm hấp thu xung lực, giúp giảm thiểu tối đa tác động trực tiếp đến không chỉ hành khách trên xe mà cả người đi đường trong tình huống xảy ra va chạm."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/5tulmt.jpg",
          title: "Hệ thống kiểm soát lực kéo",
          message: "Khi xe chạy thẳng và tăng tốc trên đường trơn trượt, hệ thống kiểm soát lực kéo TRC chủ động kiểm soát độ cân bằng thông qua việc tăng giảm lực truyền động đến các bánh xe và tốc độ từng bánh xe."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/awks2q.jpg",
          title: "Ghế ngồi có cấu trúc giảm chấn thương đốt sống cổ",
          message: "Ghế ngồi vị trí người lái và hành khách phía trước được thiết kế với cấu trúc giảm chấn thương đốt sống cổ. Trong trường hợp xảy ra va chạm mạnh từ phía sau, đầu và thân hành khách có xu hướng đập mạnh vào ghế."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/ewhagj.jpg",
          title: "Móc iso fix",
          message: "Đối với các gia đình có trẻ nhỏ, móc cài ghế trẻ em ISO FIX là trang bị rất hữu ích giúp định vị ghế trẻ em chắc chắn và an toàn, đem lại sự an tâm và thoải mái cho cả gia đình."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/ib4vdr.jpg",
          title: "Hộp số tự động vô cấp",
          message: "Hộp số tự động vô cấp CVT vận hành trên một hệ thống bánh đai - dây thép cho khả năng biến thiên vô hạn mà không có sự ngắt quãng giữa các cấp số, giúp xe vận hành êm ái đồng thời đem đến cho chủ sở hữu khả năng đánh lái tối ưu và xử lý nhạy bén, tận hưởng trọn vẹn từng giây phút hứng khởi."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/j4rrcy.jpg",
          title: "Chế độ lái Sport",
          message: "Đơn giản, hiệu quả mạnh mẽ với chế độ lái SPORT chỉ bằng một nút bấm, bạn có thể trải nghiệm ngay khả năng tăng tốc nhanh chóng, cho cảm giác phấn khích chưa từng có."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/jys1ct.jpg",
          title: "Hệ thống chống trộm",
          message: "Hệ thống chống trộm với chức năng cảnh báo chống trộm và mã hóa động cơ giúp chủ sở hữu an tâm rời khỏi xe vì đã được bảo vệ an toàn"
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/ld3y24.jpg",
          title: "Hệ thống phân phối lực phanh điện tử",
          message: "Thông qua dữ liệu phân tích từ máy tính trung tâm, hệ thống phân phối lực phanh điện tử EBD sẽ phân bổ lực phanh hợp lý đến các bánh xe, giúp nâng cao hiệu quả phanh, đặc biệt khi xe đang chất tải và vào cua."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/viqfcg.jpg",
          title: "Hệ thống hỗ trợ lực phanh khẩn cấp",
          message: "Với bộ cảm biến áp suất dầu phanh, hệ thống hỗ trợ lực phanh khẩn cấp BA tự động gia tăng thêm lực phanh trong trường hợp khẩn cấp, giúp người lái tự tin xử lý."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/vqgep1.jpg",
          title: "Hệ thống phanh",
          message: "Hệ thống phanh đĩa thông gió phía trước và phanh đĩa đặc phía sau cung cấp lực phanh ổn định và chính xác, mang đến cho chủ sở hữu cảm giác yên tâm và tự tin khi vận hành xe. Đặc biệt, thiết kế khoa học của phanh đĩa thông gió giúp giảm nhiệt độ trên bề mặt đĩa phanh, do đó, tăng hiệu quả phanh."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/vxqmopv.jpg",
          title: "Hệ thống treo",
          message: "Hệ thống treo trước với thiết kế McPherson và hệ thống treo sau loại dầm xoắn kết hợp thanh cân bằng hấp thụ xung lực tốt, mang lại cảm giác êm ái cho khoang hành khách và độ ổn định cho xe khi vận hành."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/wfpwvd.jpg",
          title: "Cấu trúc giảm tiếng ồn",
          message: "Với việc sử dụng vật liệu cách âm mới tại nhiều vị trí trên khung sườn kết hợp với kết cấu thân xe khoa học, khả năng chống ồn và rung lắc của xe được cải thiện vượt bậc, đem lại cảm giác yên tĩnh thư thái cho hành khách suốt chặng hành trình."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/yhv0bc.jpg",
          title: "Cảm biến đỗ xe",
          message: "Hoạt động thông qua hệ thống sóng âm, cảm biến lùi xác định vật cản ở đuôi xe, phát tín hiệu cảnh báo hỗ trợ người điều khiển đánh lái phù hợp để lùi hoặc đỗ xe an toàn, đặc biệt ở những không gian hẹp."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/ylydya.jpg",
          title: "Động cơ 1.8L",
          message: "Động cơ 2ZR-FE với hệ thống điều phối van biến thiên thông minh kép Dual VVT-i và hệ thống điều khiển biến thiên đường ống nạp ACIS giúp xe vận hành mạnh mẽ, tăng tốc êm ái nhưng vẫn tiết kiệm nhiên liệu ấn tượng và thân thiện với môi trường."
        },
        {
          image: "/assets/img/toyota/altis/tinh-nang/zc0lof.jpg",
          title: "Túi khí",
          message: "7 Túi khí được trang bị trên tất cả các phiên bản giúp giảm thiểu tối đa trấn thương cho người lái và hành khánh trong trường hợp xảy ra va chạm. Cuộc sống được bảo vệ tối đa ở từng chi tiết nhỏ."
        }
      ],
      thongSo: [
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	4640 x 1775 x 1460	"},
        {label:"	Kích thước tổng thể bên trong (D x R x C) (mm x mm x mm)		",value:"	1930 x 1485 x 1205	"},
        {label:"	Chiều dài cơ sở (mm)		",value:"	2700	"},
        {label:"	Chiều rộng cơ sở (Trước / sau) (mm)		",value:"	1520 / 1520	"},
        {label:"	Khoảng sáng gầm xe (mm)		",value:"	130	"},
        {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	5,4	"},
        {label:"	Trọng lượng không tải (kg)		",value:"	1265	"},
        {label:"	Trọng lượng toàn tải (kg)		",value:"	1670	"},
        {label:"	Dung tích bình nhiên liệu (L)		",value:"	55	"},
        {label:"	Dung tích khoang hành lý (L)		",value:"	470	"},
        {label:"	Động cơ xăng Loại động cơ		",value:"	2ZR-FE, 16 van DOHC, VVT-i kép, ACIS	"},
        {label:"	Số xy lanh		",value:"	4	"},
        {label:"	Bố trí xy lanh		",value:"	Thẳng hàng / In-line	"},
        {label:"	Dung tích xy lanh (cc)		",value:"	1798	"},
        {label:"	Hệ thống nhiên liệu		",value:"	Phun xăng điện tử / EFI	"},
        {label:"	Loại nhiên liệu		",value:"	Xăng / Petrol	"},
        {label:"	Công suất tối đa ((KW) HP / vòng / phút)		",value:"	(103)138 / 6400	"},
        {label:"	Mô men xoắn tối đa (Nm / vòng / phút)		",value:"	172 / 4000	"},
        {label:"	Tốc độ tối đa		",value:"	185	"},
        {label:"	Chế độ lái (công suất cao / tiết kiệm nhiên liệu)  		",value:"	Thể thao / Sport	"},
        {label:"	Hệ thống truyền động  		",value:"	Dẫn động cầu trước / FWD	"},
        {label:"	Hộp số  		",value:"	Số tự động vô cấp / CVT	"},
        {label:"	Hệ thống treo Trước		",value:"	Mc Pherson với thanh cân bằng / McPherson Struts with Stabilizer bar	"},
        {label:"	Sau		",value:"	Bán phụ thuộc, dạng thanh xoắn với thanh cân bằng / Torsion beam with stabilizer bar	"},
        {label:"	Hệ thống lái Trợ lực tay lái		",value:"	Trợ lực điện / EPS	"},
        {label:"	Vành & lốp xe Loại vành		",value:"	Mâm đúc / Alloy	"},
        {label:"	Kích thước lốp		",value:"	205 / 55R16	"},
        {label:"	Lốp dự phòng		",value:"	Mâm đúc / Alloy	"},
        {label:"	Phanh Trước		",value:"	Đĩa tản nhiệt / Ventilated disc	"},
        {label:"	Sau		",value:"	Đĩa / Disc	"},
        {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
        {label:"	Tiêu thụ nhiên liệu Trong đô thị (L / 100km)		",value:"	8.6	"},
        {label:"	Ngoài đô thị (L / 100km)		",value:"	5.2	"},
        {label:"	Kết hợp (L / 100km)		",value:"	6.5	"},
        {label:"			",value:"		"},
        {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	Halogen phản xạ đa hướng / Halogen multi reflect	"},
        {label:"	Đèn chiếu xa		",value:"	Halogen phản xạ đa hướng / Halogen multi reflect	"},
        {label:"	Đèn chiếu sáng ban ngày		",value:"	Có (LED) / With (LED)	"},
        {label:"	Hệ thống rửa đèn		",value:"	Không có / Without	"},
        {label:"	Chế độ điều khiển đèn tự động		",value:"	Không có / Without	"},
        {label:"	Hệ thống nhắc nhở đèn sáng		",value:"	Tự động tắt / Auto cut	"},
        {label:"	Hệ thống cân bằng đèn pha		",value:"	Không có / Without	"},
        {label:"	Hệ thống cân bằng góc chiếu		",value:"	Không có / Without	"},
        {label:"	Chế độ đèn chờ dẫn đường		",value:"	Không có / Without	"},
        {label:"	Cụm đèn sau  		",value:"	LED	"},
        {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
        {label:"	Đèn sương mù Trước		",value:"	Có / With	"},
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
        {label:"	Gạt mưa Trước		",value:"	Gián đoạn, điều chỉnh thời gian / Intermittent & Time adjustment	"},
        {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
        {label:"	Ăng ten  		",value:"	In trên kính hậu	"},
        {label:"	Tay nắm cửa ngoài  		",value:"	Cùng màu thân xe với viền bạc (tích hợp chức năng mở cửa thông minh) / Body color with Plating with Smart	"},
        {label:"	Chắn bùn  		",value:"	Có / With	"},
        {label:"	Ống xả kép  		",value:"	Không có / Without	"},
        {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
        {label:"	Chất liệu		",value:"	Bọc da / Leather	"},
        {label:"	Nút bấm điều khiển tích hợp		",value:"	Có / With	"},
        {label:"	Điều chỉnh		",value:"	Chỉnh tay 4 hướng / Manual tilt & telescopic	"},
        {label:"	Lẫy chuyển số		",value:"	Không có / Without	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có / Without	"},
        {label:"	Gương chiếu hậu trong  		",value:"	2 chế độ ngày và đêm / Day & night	"},
        {label:"	Tay nắm cửa trong  		",value:"	Mạ bạc / Silver plating	"},
        {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Optitron	"},
        {label:"	Đèn báo Eco		",value:"	Có / With	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
        {label:"	Chức năng báo vị trí cần số		",value:"	Có / With	"},
        {label:"	Màn hình hiển thị đa thông tin		",value:"	Có / With (màu)	"},
        {label:"	Cửa sổ trời  		",value:"	Không có / Without	"},
        {label:"	Chất liệu bọc ghế  		",value:"	Da / Leather	"},
        {label:"	Ghế trước Loại ghế		",value:"	Thường / Normal	"},
        {label:"	Điều chỉnh ghế lái		",value:"	Chỉnh điện 10 hướng / 10 way power	"},
        {label:"	Điều chỉnh ghế hành khách		",value:"	Chỉnh tay 4 hướng / 4 way manual	"},
        {label:"	Ghế sau Hàng ghế thứ hai		",value:"	Gập lưng ghế 60:40 / 60:40 split fold	"},
        {label:"	Tựa tay hàng ghế sau		",value:"	Khay đựng ly + ốp sơn màu bạc	"},
        {label:"	Rèm che nắng kính sau  		",value:"	Không có / Without	"},
        {label:"	Hệ thống điều hòa  		",value:"	Tự động / Auto	"},
        {label:"	Cửa gió sau  		",value:"	Không có / Without	"},
        {label:"	Hệ thống âm thanh Đầu đĩa		",value:"	DVD 1 đĩa, màn hình cảm ứng 7 inch / 7 touch screen DVD	"},
        {label:"	Số loa		",value:"	4	"},
        {label:"	Cổng kết nối AUX		",value:"	Không có / Without	"},
        {label:"	Cổng kết nối USB		",value:"	Có / With	"},
        {label:"	Kết nối Bluetooth		",value:"	Có / With	"},
        {label:"	Điều khiển giọng nói		",value:"	Không có / Without	"},
        {label:"	Chức năng điều khiển từ hàng ghế sau		",value:"	Không có / Without	"},
        {label:"	Kết nối wifi		",value:"	Không có / Without	"},
        {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
        {label:"	Kết nối điện thoại thông minh / Smartphone connectivity		",value:"	Apple Car Play & Android Auto	"},
        {label:"	Kết nối HDMI		",value:"	Không có / Without	"},
        {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Có / With	"},
        {label:"	Khóa cửa điện  		",value:"	Có / With	"},
        {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
        {label:"	Cửa sổ điều chỉnh điện  		",value:"	Tự động lên / xuống vị trí người lái / Auto for driver window	"},
        {label:"	Cốp điều khiển điện  		",value:"	Không có / Without	"},
        {label:"	Hệ thống sạc không dây  		",value:"	Không có / Without	"},
        {label:"	Hệ thống kiểm soát hành trình  		",value:"	Có / With	"},
        {label:"	Hệ thống báo động		",value:"	Có / With	"},
        {label:"	Hệ thống mã hóa khóa động cơ		",value:"	Có / With	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có / With	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có / With	"},
        {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có / With	"},
        {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Không có / Without	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Không có / Without	"},
        {label:"	Camera lùi  		",value:"	Có / With	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có / With	"},
        {label:"	Góc trước		",value:"	Không có / Without	"},
        {label:"	Góc sau		",value:"	Không có / Without	"},
        {label:"	Túi khí Túi khí người lái & hành khách phía trước		",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
        {label:"	Túi khí rèm		",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía sau		",value:"	Không có / Without	"},
        {label:"	Túi khí đầu gối người lái		",value:"	Có / With	"},
        {label:"	Túi khí đầu gối hành khách		",value:"	Không có / Without	"},
        {label:"	Khung xe GOA  		",value:"	Có / With	"},
        {label:"	Dây đai an toàn  		",value:"	Ghế trước: 3 điểm ELR với chức năng căng đai khẩn cấp và giới hạn lực căng x 2 vị trí / Ghế sau: 3 điểm ELR x 3 vị trí / Front seat: 3 points ELR with PT & FL x 2 / Rear seat 3 points ELR x 3	"},
        {label:"	Ghế có cấu trúc giảm chấn thương cổ  		",value:"	Có / With	"}        
      ]
     },
     {
       brand: 'Toyota Corolla Altis 1.8G CVT',
       price: 763000000,
       thongSo:[
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	4640 x 1775 x 1460	"},
        {label:"	Kích thước tổng thể bên trong (D x R x C) (mm x mm x mm)		",value:"	1930 x 1485 x 1205	"},
        {label:"	Chiều dài cơ sở (mm)		",value:"	2700	"},
        {label:"	Chiều rộng cơ sở (Trước / sau) (mm)		",value:"	1520 / 1520	"},
        {label:"	Khoảng sáng gầm xe (mm)		",value:"	130	"},
        {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	5.4	"},
        {label:"	Trọng lượng không tải (kg)		",value:"	1265	"},
        {label:"	Trọng lượng toàn tải (kg)		",value:"	1670	"},
        {label:"	Dung tích bình nhiên liệu (L)		",value:"	55	"},
        {label:"	Dung tích khoang hành lý (L)		",value:"	470	"},
        {label:"	Động cơ xăng Loại động cơ		",value:"	2ZR-FE, 16 van DOHC, VVT-i kép, ACIS	"},
        {label:"	Số xy lanh		",value:"	4	"},
        {label:"	Bố trí xy lanh		",value:"	Thẳng hàng / In-line	"},
        {label:"	Dung tích xy lanh (cc)		",value:"	1798	"},
        {label:"	Hệ thống nhiên liệu		",value:"	Phun xăng điện tử / EFI	"},
        {label:"	Loại nhiên liệu		",value:"	Xăng / Petrol	"},
        {label:"	Công suất tối đa ((KW) HP / vòng / phút)		",value:"	(103)138 / 6400	"},
        {label:"	Mô men xoắn tối đa (Nm / vòng / phút)		",value:"	172 / 4000	"},
        {label:"	Tốc độ tối đa		",value:"	185	"},
        {label:"	Chế độ lái (công suất cao / tiết kiệm nhiên liệu)  		",value:"	Thể thao / Sport	"},
        {label:"	Hệ thống truyền động  		",value:"	Dẫn động cầu trước / FWD	"},
        {label:"	Hộp số  		",value:"	Số tự động vô cấp / CVT	"},
        {label:"	Hệ thống treo Trước		",value:"	Mc Pherson với thanh cân bằng / McPherson Struts with Stabilizer bar	"},
        {label:"	Sau		",value:"	Bán phụ thuộc, dạng thanh xoắn với thanh cân bằng / Torsion beam with stabilizer bar	"},
        {label:"	Hệ thống lái Trợ lực tay lái		",value:"	Trợ lực điện / EPS	"},
        {label:"	Vành & lốp xe Loại vành		",value:"	Mâm đúc / Alloy	"},
        {label:"	Kích thước lốp		",value:"	215 / 45R17	"},
        {label:"	Lốp dự phòng		",value:"	Mâm đúc / Alloy	"},
        {label:"	Phanh Trước		",value:"	Đĩa tản nhiệt / Ventilated disc	"},
        {label:"	Sau		",value:"	Đĩa / Disc	"},
        {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
        {label:"	Tiêu thụ nhiên liệu Trong đô thị (L / 100km)		",value:"	8.6	"},
        {label:"	Ngoài đô thị (L / 100km)		",value:"	5.2	"},
        {label:"	Kết hợp (L / 100km)		",value:"	6.5	"},
        {label:"			",value:"		"},
        {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	LED Projector	"},
        {label:"	Đèn chiếu xa		",value:"	LED Projector	"},
        {label:"	Đèn chiếu sáng ban ngày		",value:"	Có (LED) / With (LED)	"},
        {label:"	Hệ thống rửa đèn		",value:"	Không có / Without	"},
        {label:"	Chế độ điều khiển đèn tự động		",value:"	Có / With	"},
        {label:"	Hệ thống nhắc nhở đèn sáng		",value:"	Tự động tắt / Auto cut	"},
        {label:"	Hệ thống cân bằng đèn pha		",value:"	Không có / Without	"},
        {label:"	Hệ thống cân bằng góc chiếu		",value:"	Tự động / Auto	"},
        {label:"	Chế độ đèn chờ dẫn đường		",value:"	Không có / Without	"},
        {label:"	Cụm đèn sau  		",value:"	LED	"},
        {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
        {label:"	Đèn sương mù Trước		",value:"	Có / With	"},
        {label:"	Sau		",value:"	Không có / Without	"},
        {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có / With	"},
        {label:"	Chức năng gập điện		",value:"	Auto / Tự động	"},
        {label:"	Tích hợp đèn chào mừng		",value:"	Không có / Without	"},
        {label:"	Tích hợp đèn báo rẽ		",value:"	Có / With	"},
        {label:"	Màu		",value:"	Cùng màu thân xe / Body color	"},
        {label:"	Chức năng tự điều chỉnh khi lùi		",value:"	Có / With	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có / Without	"},
        {label:"	Chức năng sấy gương		",value:"	Không có / Without	"},
        {label:"	Chức năng chống bám nước		",value:"	Không có / Without	"},
        {label:"	Chức năng chống chói tự động		",value:"	Không có / Without	"},
        {label:"	Gạt mưa Trước		",value:"	Tự động / Auto (Rain sensor)	"},
        {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
        {label:"	Ăng ten  		",value:"	In trên kính hậu	"},
        {label:"	Tay nắm cửa ngoài  		",value:"	Cùng màu thân xe với viền bạc (tích hợp chức năng mở cửa thông minh) / Body color with Plating with Smart	"},
        {label:"	Chắn bùn  		",value:"	Có / With	"},
        {label:"	Ống xả kép  		",value:"	Không có / Without	"},
        {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
        {label:"	Chất liệu		",value:"	Bọc da / Leather	"},
        {label:"	Nút bấm điều khiển tích hợp		",value:"	Có / With	"},
        {label:"	Điều chỉnh		",value:"	Chỉnh tay 4 hướng / Manual tilt & telescopic	"},
        {label:"	Lẫy chuyển số		",value:"	Không có / Without	"},
        {label:"	Bộ nhớ vị trí		",value:"	Không có / Without	"},
        {label:"	Gương chiếu hậu trong  		",value:"	Chống chói tự động / EC mirror	"},
        {label:"	Tay nắm cửa trong  		",value:"	Mạ bạc / Silver plating	"},
        {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Optitron	"},
        {label:"	Đèn báo Eco		",value:"	Có / With	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
        {label:"	Chức năng báo vị trí cần số		",value:"	Có / With	"},
        {label:"	Màn hình hiển thị đa thông tin		",value:"	Có / With (màu)	"},
        {label:"	Cửa sổ trời  		",value:"	Không có / without	"},
        {label:"	Chất liệu bọc ghế  		",value:"	Da / Leather	"},
        {label:"	Ghế trước Loại ghế		",value:"	Thường / Normal	"},
        {label:"	Điều chỉnh ghế lái		",value:"	Chỉnh điện 10 hướng / 10 way power	"},
        {label:"	Điều chỉnh ghế hành khách		",value:"	Chỉnh tay 4 hướng / 4 way manual	"},
        {label:"	Ghế sau Hàng ghế thứ hai		",value:"	Gập lưng ghế 60:40 / 60:40 split fold	"},
        {label:"	Tựa tay hàng ghế sau		",value:"	Khay đựng ly + ốp sơn màu bạc	"},
        {label:"	Rèm che nắng cửa sau  		",value:"	Không có / Without	"},
        {label:"	Hệ thống điều hòa  		",value:"	Tự động / Auto	"},
        {label:"	Cửa gió sau  		",value:"	Không có / Without	"},
        {label:"	Hệ thống âm thanh Đầu đĩa		",value:"	DVD 1 đĩa, màn hình cảm ứng 7 inch / 7 touch screen DVD	"},
        {label:"	Số loa		",value:"	6	"},
        {label:"	Cổng kết nối AUX		",value:"	Không có / Without	"},
        {label:"	Cổng kết nối USB		",value:"	Có / With	"},
        {label:"	Kết nối Bluetooth		",value:"	Có / With	"},
        {label:"	Điều khiển giọng nói		",value:"	Không có / Without	"},
        {label:"	Chức năng điều khiển từ hàng ghế sau		",value:"	Không có / Without	"},
        {label:"	Kết nối wifi		",value:"	Không có / Without	"},
        {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
        {label:"	Kết nối điện thoại thông minh / Smartphone connectivity		",value:"	Apple Car Play & Android Auto	"},
        {label:"	Kết nối HDMI		",value:"	Không có / Without	"},
        {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Có / With	"},
        {label:"	Khóa cửa điện  		",value:"	Có / With	"},
        {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
        {label:"	Cửa sổ điều chỉnh điện  		",value:"	Tự động lên / xuống vị trí người lái / Auto for driver window	"},
        {label:"	Cốp điều khiển điện  		",value:"	Không có / Without	"},
        {label:"	Hệ thống sạc không dây  		",value:"	Không có / Without	"},
        {label:"	Hệ thống kiểm soát hành trình  		",value:"	Có / With	"},
        {label:"	Hệ thống báo động		",value:"	Có / With	"},
        {label:"	Hệ thống mã hóa khóa động cơ		",value:"	Có / With	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có / With	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có / With	"},
        {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có / With	"},
        {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có / With	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có / With	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Không có / Without	"},
        {label:"	Camera lùi  		",value:"	Có / With	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có / With	"},
        {label:"	Góc trước		",value:"	Không có / Without	"},
        {label:"	Góc sau		",value:"	Không có / Without	"},
        {label:"	Túi khí Túi khí người lái & hành khách phía trước ",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
        {label:"	Túi khí rèm		",value:"	Có / With	"},
        {label:"	Túi khí bên hông phía sau		",value:"	Không có / Without	"},
        {label:"	Túi khí đầu gối người lái		",value:"	Có / With	"},
        {label:"	Túi khí đầu gối hành khách		",value:"	Không có / Without	"},
        {label:"	Khung xe GOA  		",value:"	Có / With	"},
        {label:"	Dây đai an toàn  		",value:"	Ghế trước: 3 điểm ELR với chức năng căng đai khẩn cấp và giới hạn lực căng x 2 vị trí / Ghế sau: 3 điểm ELR x 3 vị trí / Front seat: 3 points ELR with PT & FL x 2 / Rear seat 3 points ELR x 3	"},
        {label:"	Ghế có cấu trúc giảm chấn thương cổ  		",value:"	Có	"}        
       ]
     }
  ]
}
