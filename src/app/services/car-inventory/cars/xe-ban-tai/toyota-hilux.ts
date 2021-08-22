import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaHilux implements CarInfoInterface {
  name = 'Toyota Hilux'
  type = CarTypeEnum.XeBanTai
  imgSrc = 'assets/img/cars/hilux.png'
  models = [
    {
      brand: 'Toyota HILUX 2.4L 4X2 MT',
      price: 628000000,
      lingo: 'CHINH PHỤC ĐỈNH CAO',
      seats: 5,
      type: 'Bán tải',
      fuelType: 'Dầu',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tay 6 cấp'],
      library:[
        '/assets/img/toyota/hilux/library/4xmv0u.jpg',
        '/assets/img/toyota/hilux/library/mx5zws.jpg',
        '/assets/img/toyota/hilux/library/o2xa2d.jpg',
        '/assets/img/toyota/hilux/library/qrifsn.jpg'
      ],
      colors: [
        {
          label: 'Cam - 4R8',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-4R8-2.png',
          colorCode: 'orange'
        },
        {
          label: 'Bạc - 1D6',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-1D6-2.png',
          colorCode: 'silver'
        },
        {
          label: 'Xám - 1G3',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-1G3-2.png',
          colorCode: '#646464'
        },
        {
          label: 'Đỏ - 3T6',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-3T6-2.png',
          colorCode: 'red'
        },
        {
          label: 'Trắng - 070',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-070-2.png',
          colorCode: 'white'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/hilux/colors/2.4L 4X2MT/Car-218-2.png',
          colorCode: 'black'
        }
      ],
      ngoaiThat: {
        label: 'THIẾT KẾ MẠNH MẼ ĐẦY UY LỰC',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/hilux/ngoai-that/umw5o3.jpg',
        features: [
          {
            image: '/assets/img/toyota/hilux/ngoai-that/4g2b0f.jpg',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/5vnhxb.jpg',
            label: 'Cản sau'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/a1nt0a.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/ap4vdv.jpg',
            label: 'Bậc lên xuống'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/atq0oh.jpg',
            label: 'Tay nắm cửa'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/d00s3g.jpg',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/fii4nt.jpg',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/gamhiq.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/isy5k4.jpg',
            label: 'Phần hông xe'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/lq2z5h.jpg',
            label: 'Gương chiếu hậu ngoài'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/mqkr20.jpg',
            label: 'Phong cách uy lực và đa năng'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/q31xc5.jpg',
            label: 'Khoang chở hàng'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/q1akx3.jpg',
            label: 'Ăng ten dạng cột'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/sh4tv2.jpg',
            label: 'Tay nắm khoang chở'
          },
          {
            image: '/assets/img/toyota/hilux/ngoai-that/ugkeeq.jpg',
            label: 'Đèn sương mù'
          }
        ]
      },
      noiThat: {
        label: 'KHOANG LÁI RỘNG RÃI ĐẦY TIỆN NGHI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/hilux/noi-that/ljtxvk.jpg',
        features: [
          {
            image: '/assets/img/toyota/hilux/noi-that/1eis4i.jpg',
            label: 'Móc ghế an toàn'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/1wkms4.jpg',
            label: 'Ngăn đựng hàng ghế sau'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/3vamr5.jpg',
            label: 'Tay nắm hỗ trợ'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/5vikpf.jpg',
            label: 'Hệ thống âm thanh'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/37wodv.jpg',
            label: 'Hôp đựng mắt kính'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/52thwp.jpg',
            label: 'Hàng ghế sau gập 40/60'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/bhov87.jpg',
            label: 'Giá giữ ly phía trước'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/bt5rae.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/csyxzd.jpg',
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/k2kdh1.jpg',
            label: 'Tựa tay cho hành khách phía sau'
          },
          {
            image: '/assets/img/toyota/hilux/noi-that/ycz4rr.jpg',
            label: 'Ghế'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/hilux/tinh-nang/0zivco.jpg",
          title: "Hệ thống kiểm soát lực kéo chủ động TRC",
          message: "Hệ thống kiểm soát lực kéo TRC kiểm soát lực kéo ở tất cả các bánh xe trong mọi tình huống."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/2yosqb.jpg",
          title: "Hệ thống treo",
          message: "Với treo trước là độc lập tay đòn kép và treo sau là nhíp lá, hệ thống treo được cải tiến giúp xe vận hành ổn định và êm ái hơn, mang lại cảm giác lái tự tin trên mọi cung đường."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/f1saxz.jpg",
          title: "Động cơ",
          message: "2GD-FTV 2.4L, I4, DOHC Động cơ được trang bị những công nghệ tối tân: Hệ thống phun nhiên liệu trực tiếp sử dụng đường dẫn chung; Turbo tăng áp kết hợp Intercooler, loại VNT cho công suất cao, momen xoắn lớn và khả năng tiết kiệm nhiên liệu vượt trội."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/iezzc1.jpg",
          title: "Hệ thống cân bằng điện tử VSC",
          message: "Giúp chống trượt bánh trước hoặc sau khi vào cua bằng cách giảm công suất động cơ và tác dụng lực phanh tự động vào bánh xe."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/ixbf1g.jpg",
          title: "Túi khí",
          message: "Hilux hiện tại đều được trang bị 07 túi khí, giúp giảm thiểu tối đa chấn thương cho người lái và hành khách nếu không may xảy ra va chạm."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/kwegyp.jpg",
          title: "Móc an toàn (ISOFIX)",
          message: "Cho phép tháo lắp, điều chỉnh và cố định ghế trẻ em giúp ba mẹ có thể hoàn toàn yên tâm khi chở bé đi tới bất cứ đâu."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/lfipmw.jpg",
          title: "Dây đai an toàn 3 điểm",
          message: "Tất cả các ghế (bao gồm cả ghế giữa hàng ghế phía sau) đều được trang bị dây an toàn ELR 3 điểm vì sự an toàn của mọi hành khách đề được quan tâm tỉ mỉ bởi HILUX."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/rdcoxr.jpg",
          title: "Khung gầm xe",
          message: "Khung gầm xe HILUX  được cải tiến với tiết diện 2 bên sườn tăng thêm; bổ sung thêm các mối hàn; tấm che gầm xe được thiết kế lại và nâng cao độ bền, qua đó giúp xe vận hành ổn định và chắc chắn hơn. Khách hàng không những cảm thấy tự tin khi vận hành mà hoàn toàn yên tâm về khả năng chở tải nặng của xe."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/v05ado.jpg",
          title: "Hệ thống cân bằng điện tử VSC",
          message: "Giúp chống trượt bánh trước hoặc sau khi vào cua bằng cách giảm công suất động cơ và tác dụng lực phanh tự động vào bánh xe."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/w9onyb.jpg",
          title: "Hộp số tự động 6 cấp",
          message: "Phiên bản 2.4E 4x2AT MLM được trang bị hộp số tự động 6 cấp mới với chế độ sang số thể thao cho chủ nhân sự thuận tiện và phấn khích khi lái xe. Chế độ ECO và chế độ POWER cho khách thêm lựa chọn, nâng cao hiệu quả làm việc của động cơ và giảm tiêu hao nhiên liệu."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/y11rx4.jpg",
          title: "Hệ thống hỗ trợ khởi hành ngang dốc HAC",
          message: "Hệ thống hỗ trợ khởi hành ngang dốc HAC sẽ phanh giữ xe trong vòng 3 giây để người lái có thể chuyển từ bàn đạp phanh sang bàn đạp ga mà xe không bị trôi về phía sau."
        },
        {
          image: "/assets/img/toyota/hilux/tinh-nang/zpp1tm.jpg",
          title: "Cảm biến khoảng cách",
          message: "HILUX mới được trang bị tới 6 cảm biến phát hiện vật thể xung quanh ở cự li gần, giúp cảnh báo trước những va chạm đột ngột khi xe lăn bánh."
        }
      ],
      thongSo: [
        {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	5325 x 1855 x 1815	"},
        {label:"	Chiều dài cơ sở (mm)		",value:"	3085	"},
        {label:"	Chiều rộng cơ sở (Trước/sau) (mm)		",value:"	1540/1550	"},
        {label:"	Khoảng sáng gầm xe (mm)		",value:"	286	"},
        {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	6.4	"},
        {label:"	Trọng lượng không tải (kg)		",value:"	1900-1920	"},
        {label:"	Trọng lượng toàn tải (kg)		",value:"	2810	"},
        {label:"	Dung tích bình nhiên liệu (L)		",value:"	80	"},
        {label:"	Kích thước khoang chở hàng (D x R x C) (mm)		",value:"	1512 x 1524 x 482	"},
        {label:"	Động cơ xăng Loại động cơ		",value:"	Động cơ dầu, 2GD-FTV, 4 xi lanh thẳng hàng/Diesel, 2GD-FTV, 4 cylinders in-line	"},
        {label:"	Dung tích xy lanh (cc)		",value:"	2393	"},
        {label:"	Công suất tối đa ((KW) HP/ vòng/phút)		",value:"	(110)147/3400	"},
        {label:"	Mô men xoắn tối đa (Nm/vòng/phút)		",value:"	400/1600	"},
        {label:"	Chế độ lái (công suất cao/tiết kiệm nhiên liệu)  		",value:"	Không có/Without	"},
        {label:"	Hệ thống truyền động  		",value:"	Dẫn động cầu sau/RWD	"},
        {label:"	Hộp số  		",value:"	Số sàn 6 cấp/6MT	"},
        {label:"	Hệ thống treo Trước		",value:"	Tay đòn kép/Double wishbone	"},
        {label:"	Sau		",value:"	Nhíp lá/Leaf spring	"},
        {label:"	Vành & lốp xe Loại vành		",value:"	Mâm đúc/Alloy	"},
        {label:"	Kích thước lốp		",value:"	265/65R17	"},
        {label:"	Phanh Trước		",value:"	Đĩa thông gió/Ventilated disc	"},
        {label:"	Sau		",value:"	Tang trống/Drum	"},
        {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
        {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	Halogen phản xạ đa hướng/Halogen multi reflector	"},
        {label:"	Đèn chiếu xa		",value:"	Halogen phản xạ đa hướng/Halogen multi reflector	"},
        {label:"	Đèn chiếu sáng ban ngày		",value:"	Không có/Without	"},
        {label:"	Chế độ điều khiển đèn tự động		",value:"	Không có/Without	"},
        {label:"	Hệ thống cân bằng góc chiếu		",value:"	Không có/Without	"},
        {label:"	Chế độ đèn chờ dẫn đường		",value:"	Không có/Without	"},
        {label:"	Cụm đèn sau  		",value:"	Bóng thường/Bulb	"},
        {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
        {label:"	Đèn sương mù Trước		",value:"	Có/With	"},
        {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có/With	"},
        {label:"	Chức năng gập điện		",value:"	Không có/Without	"},
        {label:"	Tích hợp đèn báo rẽ		",value:"	Có/With	"},
        {label:"	Chức năng sấy kính sau  		",value:"	Có/With	"},
        {label:"	Tay lái Loại tay lái		",value:"	3 chấu/3-spoke	"},
        {label:"	Trợ lực		",value:"	Thủy lực biến thiên theo tốc độ/Hydraulic with VFC	"},
        {label:"	Chất liệu		",value:"	Urethane	"},
        {label:"	Nút bấm điều khiển tích hợp		",value:"	Không có/Without	"},
        {label:"	Điều chỉnh		",value:"	Chỉnh tay 2 hướng/Manual tilt	"},
        {label:"	Gương chiếu hậu trong  		",value:"	2 chế độ ngày và đêm/Day & night	"},
        {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Analog	"},
        {label:"	Đèn báo Eco		",value:"	Có/With	"},
        {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Không có/Without	"},
        {label:"	Chức năng báo vị trí cần số		",value:"	Không có/Without	"},
        {label:"	Màn hình hiển thị đa thông tin		",value:"	Không có/Without	"},
        {label:"	Chất liệu bọc ghế  		",value:"	Nỉ/Fabric	"},
        {label:"	Ghế trước Điều chỉnh ghế lái		",value:"	Chỉnh tay 6 hướng/6 way manual	"},
        {label:"	Điều chỉnh ghế hành khách		",value:"	Chỉnh tay 4 hướng/4 way manual	"},
        {label:"	Hệ thống điều hòa  		",value:"	Thường/Manual	"},
        {label:"	Cửa gió sau  		",value:"	Không có/Without	"},
        {label:"	Hộp làm mát  		",value:"	Có/With	"},
        {label:"	Hệ thống âm thanh Màn hình		",value:"	Không có/Without	"},
        {label:"	Đầu đĩa		",value:"	CD	"},
        {label:"	Số loa		",value:"	4	"},
        {label:"	Kết nối		",value:"	AUX/USB//Bluetooth	"},
        {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Không có/Without	"},
        {label:"	Kết nối điện thoại thông minh/ Smartphone connectivity		",value:"	Không có/Without	"},
        {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Không có/Without	"},
        {label:"	Khóa cửa điện  		",value:"	Có/With	"},
        {label:"	Chức năng khóa cửa từ xa  		",value:"	Có/With	"},
        {label:"	Cửa sổ điều chỉnh điện  		",value:"	4 cửa (1 chạm xuống cửa người lái)/4 windows (1 touch auto down for driver window)	"},
        {label:"	Hệ thống định vị dẫn đường  		",value:"	Không có/Without	"},
        {label:"	Hệ thống điều khiển hành trình  		",value:"	Không có/Without	"},
        {label:"	Hệ thống báo động		",value:"	Không có/Without	"},
        {label:"	Hệ thống mã hóa khóa động cơ		",value:"	Có/With	"},
        {label:"	Hệ thống an toàn Toyota (Toyota Safety Sense) Cảnh báo tiền va chạm (PCS)		",value:"	Không có/Without	"},
        {label:"	Cảnh báo chệch làn đường (LDA)		",value:"	Không có/Without	"},
        {label:"	Điều khiển hành trình chủ động (DRCC)		",value:"	Không có/Without	"},
        {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có/With	"},
        {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có/With	"},
        {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có/With	"},
        {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có/With	"},
        {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có/With	"},
        {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có/With	"},
        {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Có/With	"},
        {label:"	Camera lùi  		",value:"	Không có/Without	"},
        {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Không có/Without	"},
        {label:"	Góc trước		",value:"	Không có/Without	"},
        {label:"	Góc sau		",value:"	Không có/Without	"},
        {label:"	Túi khí Túi khí người lái & hành khách phía trước		",value:"	Có/With	"},
        {label:"	Túi khí bên hông phía trước		",value:"	Có/With	"},
        {label:"	Túi khí rèm		",value:"	Có/With	"},
        {label:"	Túi khí đầu gối người lái		",value:"	Có/With	"},
        {label:"	Khung xe GOA  		",value:"	Có/With	"},        
      ]
      },
      {
        brand: 'Toyota HILUX 2.4L 4X2 AT',
        price: 674000000,
        thongSo: [
          {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	5325 x 1855 x 1815	"},
          {label:"	Chiều dài cơ sở (mm)		",value:"	3085	"},
          {label:"	Chiều rộng cơ sở (Trước / sau) (mm)		",value:"	1540 / 1550	"},
          {label:"	Khoảng sáng gầm xe (mm)		",value:"	286	"},
          {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	6.4	"},
          {label:"	Trọng lượng không tải (kg)		",value:"	1885-1940	"},
          {label:"	Trọng lượng toàn tải (kg)		",value:"	2810	"},
          {label:"	Dung tích bình nhiên liệu (L)		",value:"	80	"},
          {label:"	Kích thước khoang chở hàng (D x R x C) (mm)		",value:"	1512 x 1524 x 482	"},
          {label:"	Động cơ xăng Loại động cơ		",value:"	Động cơ dầu, 2GD-FTV, 4 xi lanh thẳng hàng / Diesel, 2GD-FTV, 4 cylinders in-line	"},
          {label:"	Dung tích xy lanh (cc)		",value:"	2393	"},
          {label:"	Công suất tối đa ((KW) HP / vòng / phút)		",value:"	(110)147 / 3400	"},
          {label:"	Mô men xoắn tối đa (Nm / vòng / phút)		",value:"	400 / 1600	"},
          {label:"	Chế độ lái (công suất cao / tiết kiệm nhiên liệu)  		",value:"	Có / With	"},
          {label:"	Hệ thống truyền động  		",value:"	Dẫn động cầu sau / RWD	"},
          {label:"	Hộp số  		",value:"	Số tự động 6 cấp / 6AT	"},
          {label:"	Hệ thống treo Trước		",value:"	Tay đòn kép / Double wishbone	"},
          {label:"	Sau		",value:"	Nhíp lá / Leaf spring	"},
          {label:"	Vành & lốp xe Loại vành		",value:"	Mâm đúc / Alloy	"},
          {label:"	Kích thước lốp		",value:"	265 / 65R17	"},
          {label:"	Phanh Trước		",value:"	Đĩa thông gió / Ventilated Disc	"},
          {label:"	Sau		",value:"	Tang trống / Drum	"},
          {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
          {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	Halogen phản xạ đa hướng / Halogen multi reflector	"},
          {label:"	Đèn chiếu xa		",value:"	Halogen phản xạ đa hướng / Halogen multi reflector	"},
          {label:"	Đèn chiếu sáng ban ngày		",value:"	Không có / Without	"},
          {label:"	Chế độ điều khiển đèn tự động		",value:"	Có / With	"},
          {label:"	Hệ thống cân bằng góc chiếu		",value:"	Không có / Without	"},
          {label:"	Chế độ đèn chờ dẫn đường		",value:"	Có / With	"},
          {label:"	Cụm đèn sau  		",value:"	Bóng thường / Bulb	"},
          {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
          {label:"	Đèn sương mù Trước		",value:"	Có / With	"},
          {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có / With	"},
          {label:"	Chức năng gập điện		",value:"	Không có / Without	"},
          {label:"	Tích hợp đèn báo rẽ		",value:"	Có / With	"},
          {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
          {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
          {label:"	Trợ lực		",value:"	Thủy lực biến thiên theo tốc độ / Hydraulic with VFC	"},
          {label:"	Chất liệu		",value:"	Urethane	"},
          {label:"	Nút bấm điều khiển tích hợp		",value:"	Hệ thống âm thanh, màn hình hiển thị đa thông tin, đàm thoại rảnh tay / Audio system, multi-information display, hands-free phone	"},
          {label:"	Điều chỉnh		",value:"	Chỉnh tay 2 hướng / Manual tilt	"},
          {label:"	Gương chiếu hậu trong  		",value:"	2 chế độ ngày và đêm / Day & night	"},
          {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Optitron	"},
          {label:"	Đèn báo Eco		",value:"	Có / With	"},
          {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
          {label:"	Chức năng báo vị trí cần số		",value:"	Có / With	"},
          {label:"	Màn hình hiển thị đa thông tin		",value:"	Có (màn hình màu TFT 4.2) / With (color TFT 4.2)	"},
          {label:"	hất liệu bọc ghế  		",value:"	Nỉ / Fabric	"},
          {label:"	Ghế trước Điều chỉnh ghế lái		",value:"	Chỉnh tay 6 hướng / 6 way manual	"},
          {label:"	Điều chỉnh ghế hành khách		",value:"	Chỉnh tay 4 hướng / 4 way manual	"},
          {label:"	Hệ thống điều hòa  		",value:"	Thường / Manual	"},
          {label:"	Cửa gió sau  		",value:"	Không có / Without	"},
          {label:"	Hộp làm mát  		",value:"	Có / With	"},
          {label:"	Hệ thống âm thanh Màn hình		",value:"	Cảm ứng 7'' / 7'' touch screen	"},
          {label:"	Đầu đĩa		",value:"	DVD	"},
          {label:"	Số loa		",value:"	4	"},
          {label:"	Kết nối		",value:"	USB / Bluetooth	"},
          {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
          {label:"	Kết nối điện thoại thông minh / Smartphone connectivity		",value:"	Có / With	"},
          {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Không có / Without	"},
          {label:"	Khóa cửa điện  		",value:"	Có / With	"},
          {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
          {label:"	Cửa sổ điều chỉnh điện  		",value:"	4 cửa (1 chạm, chống kẹt bên người lái) / 4 windows (1 touch auto, jam protection for driver window)	"},
          {label:"	Hệ thống định vị dẫn đường  		",value:"	Không có / Without	"},
          {label:"	Hệ thống kiểm soát hành trình  		",value:"	Có / With	"},
          {label:"	Hệ thống báo động		",value:"	Có / With	"},
          {label:"	Hệ thống mã hóa khóa động cơ		",value:"	Có / With	"},
          {label:"	Hệ thống an toàn Toyota (Toyota Safety Sense) Cảnh báo tiền va chạm (PCS)		",value:"	Không có / Without	"},
          {label:"	Cảnh báo chệch làn đường (LDA)		",value:"	Không có / Without	"},
          {label:"	Điều khiển hành trình chủ động (DRCC)		",value:"	Không có / Without	"},
          {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có / With	"},
          {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có / With	"},
          {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có / With	"},
          {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có / With	"},
          {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có / With	"},
          {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có / With	"},
          {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Có / With	"},
          {label:"	Camera lùi  		",value:"	Không có / Without	"},
          {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có / With	"},
          {label:"	Góc trước		",value:"	Có / With	"},
          {label:"	Góc sau		",value:"	Có / With	"},
          {label:"	Túi khí Túi khí người lái & hành khách phía trước		",value:"	Có / With	"},
          {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
          {label:"	Túi khí rèm		",value:"	Có / With	"},
          {label:"	Túi khí đầu gối người lái		",value:"	Có / With	"},
          {label:"	Khung xe GOA  		",value:"	Có / With	"},
        ]
      },
      {
        brand: 'Toyota HILUX 2.4L 4X4 MT',
        price: 799000000,
        thongSo: [
          {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	5325 x 1855 x 1815	"},
          {label:"	Chiều dài cơ sở (mm)		",value:"	3085	"},
          {label:"	Chiều rộng cơ sở (Trước / sau) (mm)		",value:"	1540 / 1550	"},
          {label:"	Khoảng sáng gầm xe (mm)		",value:"	286	"},
          {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	6.4	"},
          {label:"	Trọng lượng không tải (kg)		",value:"	2025-2085	"},
          {label:"	Trọng lượng toàn tải (kg)		",value:"	2910	"},
          {label:"	Dung tích bình nhiên liệu (L)		",value:"	80	"},
          {label:"	Kích thước khoang chở hàng (D x R x C) (mm)		",value:"	1512 x 1524 x 482	"},
          {label:"	Động cơ xăng Loại động cơ		",value:"	Động cơ dầu, 2GD-FTV, 4 xi lanh thẳng hàng / Diesel, 2GD-FTV, 4 cylinders in-line	"},
          {label:"	Dung tích xy lanh (cc)		",value:"	2393	"},
          {label:"	Công suất tối đa ((KW) HP / vòng / phút)		",value:"	(110)147 / 3400	"},
          {label:"	Mô men xoắn tối đa (Nm / vòng / phút)		",value:"	400 / 1600	"},
          {label:"	Chế độ lái (công suất cao / tiết kiệm nhiên liệu)  		",value:"	Có / With	"},
          {label:"	Hệ thống truyền động  		",value:"	Dẫn động 2 cầu bán thời gian, gài cầu điện tử / Part-time 4WD, electronic transfer switch	"},
          {label:"	Hộp số  		",value:"	Số sàn 6 cấp / 6MT	"},
          {label:"	Hệ thống treo Trước		",value:"	Tay đòn kép / Double wishbone	"},
          {label:"	Sau		",value:"	Nhíp lá / Leaf spring	"},
          {label:"	Vành & lốp xe Loại vành		",value:"	Mâm đúc / Alloy	"},
          {label:"	Kích thước lốp		",value:"	265 / 65R17	"},
          {label:"	Phanh Trước		",value:"	Đĩa thông gió / Ventilated disc	"},
          {label:"	Sau		",value:"	Tang trống / Drum	"},
          {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
          {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	Halogen phản xạ đa hướng / Halogen multi reflector	"},
          {label:"	Đèn chiếu xa		",value:"	Halogen phản xạ đa hướng / Halogen multi reflector	"},
          {label:"	Đèn chiếu sáng ban ngày		",value:"	Không có / Without	"},
          {label:"	Chế độ điều khiển đèn tự động		",value:"	Không có / Without	"},
          {label:"	Hệ thống cân bằng góc chiếu		",value:"	Không có / Without	"},
          {label:"	Chế độ đèn chờ dẫn đường		",value:"	Không có / Without	"},
          {label:"	Cụm đèn sau  		",value:"	Bóng thường / Bulb	"},
          {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
          {label:"	Đèn sương mù Trước		",value:"	Có / With	"},
          {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có / With	"},
          {label:"	Chức năng gập điện		",value:"	Không có / Without	"},
          {label:"	Tích hợp đèn báo rẽ		",value:"	Có / With	"},
          {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
          {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
          {label:"	Trợ lực		",value:"	Thủy lực biến thiên theo tốc độ / Hydraulic with VFC	"},
          {label:"	Chất liệu		",value:"	Urethane	"},
          {label:"	Nút bấm điều khiển tích hợp		",value:"	Hệ thống âm thanh, màn hình hiển thị đa thông tin, đàm thoại rảnh tay / Audio system, multi-information display, hands-free phone	"},
          {label:"	Điều chỉnh		",value:"	Chỉnh tay 2 hướng / Manual tilt	"},
          {label:"	Gương chiếu hậu trong  		",value:"	2 chế độ ngày và đêm / Day & night	"},
          {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Optitron	"},
          {label:"	Đèn báo Eco		",value:"	Có / With	"},
          {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
          {label:"	Chức năng báo vị trí cần số		",value:"	Không có / Without	"},
          {label:"	Màn hình hiển thị đa thông tin		",value:"	Có (màn hình màu TFT 4.2) / With (color TFT 4.2)	"},
          {label:"	Chất liệu bọc ghế  		",value:"	Nỉ / Fabric	"},
          {label:"	Ghế trước Điều chỉnh ghế lái		",value:"	Chỉnh tay 6 hướng / 6 way manual	"},
          {label:"	Điều chỉnh ghế hành khách		",value:"	Chỉnh tay 4 hướng / 4 way manual	"},
          {label:"	Hệ thống điều hòa  		",value:"	Thường / Manual	"},
          {label:"	Cửa gió sau  		",value:"	Không có / Without	"},
          {label:"	Hộp làm mát  		",value:"	Có / With	"},
          {label:"	Hệ thống âm thanh Màn hình		",value:"	Cảm ứng 7'' / 7'' touch screen	"},
          {label:"	Đầu đĩa		",value:"	DVD	"},
          {label:"	Số loa		",value:"	4	"},
          {label:"	Kết nối		",value:"	USB / Bluetooth	"},
          {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
          {label:"	Kết nối điện thoại thông minh / Smartphone connectivity		",value:"	Có / With	"},
          {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Không có / Without	"},
          {label:"	Khóa cửa điện  		",value:"	Có / With	"},
          {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
          {label:"	Cửa sổ điều chỉnh điện  		",value:"	4 cửa (1 chạm, chống kẹt bên người lái) / 4 windows (1 touch auto, jam protection for driver window)	"},
          {label:"	Hệ thống định vị dẫn đường  		",value:"	Không có / Without	"},
          {label:"	Hệ thống điều khiển hành trình  		",value:"	Không có / Without	"},
          {label:"	Hệ thống báo động		",value:"	Có / With	"},
          {label:"	Hệ thống mã hóa khóa động cơ		",value:"	Có / With	"},
          {label:"	Hệ thống an toàn Toyota (Toyota Safety Sense) Cảnh báo tiền va chạm (PCS)		",value:"	Không có / Without	"},
          {label:"	Cảnh báo chệch làn đường (LDA)		",value:"	Không có / Without	"},
          {label:"	Điều khiển hành trình chủ động (DRCC)		",value:"	Không có / Without	"},
          {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có / With	"},
          {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có / With	"},
          {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có / With	"},
          {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có / With	"},
          {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có (A-TRC) / With (A-TRC)	"},
          {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có / With	"},
          {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Có / With	"},
          {label:"	Camera lùi  		",value:"	Không có / Without	"},
          {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có / With	"},
          {label:"	Góc trước		",value:"	Có / With	"},
          {label:"	Túi khí Túi khí người lái & hành khách phía trước		",value:"	Có / With	"},
          {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
          {label:"	Túi khí rèm		",value:"	Có / With	"},
          {label:"	Túi khí đầu gối người lái		",value:"	Có / With	"},
          {label:"	Khung xe GOA  		",value:"	Có / With	"},
        ]
      },
      {
        brand: 'Toyota HILUX 2.8L 4X4 AT',
        price: 913000000,
        thongSo: [
          {label:"	Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)		",value:"	5325 x 1900 x 1815	"},
          {label:"	Chiều dài cơ sở (mm)		",value:"	3085	"},
          {label:"	Chiều rộng cơ sở (Trước / sau) (mm)		",value:"	1540 / 1550	"},
          {label:"	Khoảng sáng gầm xe (mm)		",value:"	286	"},
          {label:"	Bán kính vòng quay tối thiểu (m)		",value:"	6.4	"},
          {label:"	Trọng lượng không tải (kg)		",value:"	2070-2110	"},
          {label:"	Trọng lượng toàn tải (kg)		",value:"	2910	"},
          {label:"	Dung tích bình nhiên liệu (L)		",value:"	80	"},
          {label:"	Kích thước khoang chở hàng (D x R x C) (mm)		",value:"	1512 x 1524 x 482	"},
          {label:"	Động cơ xăng Loại động cơ		",value:"	Động cơ dầu, 1GD-FTV, 4 xi lanh thẳng hàng / Diesel, 1GD-FTV, 4 cylinders in-line	"},
          {label:"	Dung tích xy lanh (cc)		",value:"	2755	"},
          {label:"	Công suất tối đa ((KW) HP / vòng / phút)		",value:"	(150) 201 / 3400	"},
          {label:"	Mô men xoắn tối đa (Nm / vòng / phút)		",value:"	500 / 1600	"},
          {label:"	Chế độ lái (công suất cao / tiết kiệm nhiên liệu)  		",value:"	Có / With	"},
          {label:"	Hệ thống truyền động  		",value:"	Dẫn động 2 cầu bán thời gian, gài cầu điện tử / Part-time 4WD, electronic transfer switch	"},
          {label:"	Hộp số  		",value:"	Số tự động 6 cấp / 6AT	"},
          {label:"	Hệ thống treo Trước		",value:"	Tay đòn kép / Double wishbone	"},
          {label:"	Sau		",value:"	Nhíp lá / Leaf spring	"},
          {label:"	Vành & lốp xe Loại vành		",value:"	Mâm đúc / Alloy	"},
          {label:"	Kích thước lốp		",value:"	265 / 60R18	"},
          {label:"	Phanh Trước		",value:"	Đĩa thông gió / Ventilated Disc	"},
          {label:"	Sau		",value:"	Tang trống / Drum	"},
          {label:"	Tiêu chuẩn khí thải  		",value:"	Euro 4	"},
          {label:"	Cụm đèn trước Đèn chiếu gần		",value:"	LED dạng thấu kính / LED Projector	"},
          {label:"	Đèn chiếu xa		",value:"	LED dạng thấu kính / LED Projector	"},
          {label:"	Đèn chiếu sáng ban ngày		",value:"	LED	"},
          {label:"	Chế độ điều khiển đèn tự động		",value:"	Có / With	"},
          {label:"	Hệ thống cân bằng góc chiếu		",value:"	Tự động / Auto	"},
          {label:"	Chế độ đèn chờ dẫn đường		",value:"	Có / With	"},
          {label:"	Cụm đèn sau  		",value:"	LED	"},
          {label:"	Đèn báo phanh trên cao  		",value:"	LED	"},
          {label:"	Đèn sương mù Trước		",value:"	Có / With	"},
          {label:"	Gương chiếu hậu ngoài Chức năng điều chỉnh điện		",value:"	Có / With	"},
          {label:"	Chức năng gập điện		",value:"	Có / With	"},
          {label:"	Tích hợp đèn báo rẽ		",value:"	Có / With	"},
          {label:"	Chức năng sấy kính sau  		",value:"	Có / With	"},
          {label:"	Tay lái Loại tay lái		",value:"	3 chấu / 3-spoke	"},
          {label:"	Trợ lực		",value:"	Thủy lực biến thiên theo tốc độ / Hydraulic with VFC	"},
          {label:"	Chất liệu		",value:"	Bọc da / Leather	"},
          {label:"	Nút bấm điều khiển tích hợp		",value:"	Hệ thống âm thanh, màn hình hiển thị đa thông tin, đàm thoại rảnh tay, cảnh báo tiền va chạm, cảnh báo chệch làn đường / Audio system, multi-information display, hands-free phone, PCS, LDA	"},
          {label:"	Điều chỉnh		",value:"	Chỉnh tay 4 hướng / Manual tilt & telescopic	"},
          {label:"	Gương chiếu hậu trong  		",value:"	Chống chói tự động / EC	"},
          {label:"	Cụm đồng hồ Loại đồng hồ		",value:"	Optitron	"},
          {label:"	Đèn báo Eco		",value:"	Có / With	"},
          {label:"	Chức năng báo lượng tiêu thụ nhiên liệu		",value:"	Có / With	"},
          {label:"	Chức năng báo vị trí cần số		",value:"	Có / With	"},
          {label:"	Màn hình hiển thị đa thông tin		",value:"	Có (màn hình màu TFT 4.2) / With (color TFT 4.2)	"},
          {label:"	Chất liệu bọc ghế  		",value:"	Da / Leather	"},
          {label:"	Ghế trước Điều chỉnh ghế lái		",value:"	Chỉnh điện 8 hướng / 8 way power	"},
          {label:"	Điều chỉnh ghế hành khách		",value:"	Chỉnh tay 4 hướng / 4 way manual	"},
          {label:"	Hệ thống điều hòa  		",value:"	Tự động / Auto	"},
          {label:"	Cửa gió sau  		",value:"	Có / With	"},
          {label:"	Hộp làm mát  		",value:"	Có / With	"},
          {label:"	Hệ thống âm thanh Màn hình		",value:"	Cảm ứng 8'' / 8'' touch screen	"},
          {label:"	Đầu đĩa		",value:"	Không có / Without	"},
          {label:"	Số loa		",value:"	9 loa JBL (1 loa siêu trầm) / 9 JBLs (1 sub woofer)	"},
          {label:"	Kết nối		",value:"	USB / Bluetooth	"},
          {label:"	Hệ thống đàm thoại rảnh tay		",value:"	Có / With	"},
          {label:"	Kết nối điện thoại thông minh / Smartphone connectivity		",value:"	Có / With	"},
          {label:"	Chìa khóa thông minh & Khởi động bằng nút bấm  		",value:"	Có / With	"},
          {label:"	Khóa cửa điện  		",value:"	Có / With	"},
          {label:"	Chức năng khóa cửa từ xa  		",value:"	Có / With	"},
          {label:"	Cửa sổ điều chỉnh điện  		",value:"	4 cửa (1 chạm, chống kẹt tất cả các cửa) / 4 windows (1 touch auto, jam protection for all window)	"},
          {label:"	Hệ thống định vị dẫn đường  		",value:"	Có / With	"},
          {label:"	Hệ thống kiểm soát hành trình  		",value:"	Có / With	"},
          {label:"	Hệ thống báo động		",value:"	Có / With	"},
          {label:"	Hệ thống mã hóa khóa động cơ		",value:"	Có / With	"},
          {label:"	Hệ thống an toàn Toyota (Toyota Safety Sense) Cảnh báo tiền va chạm (PCS)		",value:"	Có / With	"},
          {label:"	Cảnh báo chệch làn đường (LDA)		",value:"	Có / With	"},
          {label:"	Điều khiển hành trình chủ động (DRCC)		",value:"	Có / With	"},
          {label:"	Hệ thống chống bó cứng phanh (ABS)  		",value:"	Có / With	"},
          {label:"	Hệ thống hỗ trợ lực phanh khẩn cấp (BA)  		",value:"	Có / With	"},
          {label:"	Hệ thống phân phối lực phanh điện tử (EBD)  		",value:"	Có / With	"},
          {label:"	Hệ thống cân bằng điện tử (VSC)  		",value:"	Có / With	"},
          {label:"	Hệ thống kiểm soát lực kéo (TRC)  		",value:"	Có (A-TRC) / With (A-TRC)	"},
          {label:"	Hệ thống hỗ trợ khởi hành ngang dốc (HAC)  		",value:"	Có / With	"},
          {label:"	Đèn báo phanh khẩn cấp (EBS)  		",value:"	Có / With	"},
          {label:"	Camera lùi  		",value:"	Có / With	"},
          {label:"	Cảm biến hỗ trợ đỗ xe Sau		",value:"	Có / With	"},
          {label:"	Góc trước		",value:"	Có / With	"},
          {label:"	Góc sau		",value:"	Có / With	"},
          {label:"	Túi khí Túi khí người lái & hành khách phía trước		",value:"	Có / With	"},
          {label:"	Túi khí bên hông phía trước		",value:"	Có / With	"},
          {label:"	Túi khí rèm		",value:"	Có / With	"},
          {label:"	Túi khí đầu gối người lái		",value:"	Có / With	"},
          {label:"	Khung xe GOA  		",value:"	Có / With	"}
      ]
      }
  ]
}
