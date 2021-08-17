import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaCorollaCross implements CarInfoInterface {
  name = 'Toyota Corolla Cross'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/Corolla Cross.jpg'
  banner = 'assets/img/toyota/corolla-cross/banner.jpg'
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
            label: 'Đuôi xe'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8v1/ngoai-that/dwg4zw.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8v1/ngoai-that/hrl2wh.jpg',
            label: 'Thân xe'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8v1/ngoai-that/jlq100.jpg',
            label: 'Đầu xe'
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
            label: 'Bảng đồng hồ'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/xlxqqr.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/xnckhy.jpg',
            label: 'Khoang hành lý'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/yiofm1.jpg',
            label: 'Thiết kế tiện nghi'
          },
          {
            image: '/assets/img/toyota/corolla-cross/1.8g/noi-that/znc5nv.jpg',
            label: 'Cửa sau rộng rãi'
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
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "3660 x 1600 x 1520"
        },
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "3660 x 1600 x 1520"
        }
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
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "3660 x 1600 x 1520"
        },
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "3660 x 1600 x 1520"
        }
      ]
      }
  ]

}
