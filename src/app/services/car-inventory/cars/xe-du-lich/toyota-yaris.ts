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
            label: 'Bảng đồng hồ và màn hình hiển thị'
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
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "3660 x 1600 x 1520"
        },
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "3660 x 1600 x 1520"
        },
        {
          label: "",
          value: ""
        },
      ]
     }
  ]
}
