import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaRush implements CarInfoInterface {
  name = 'Toyota Rush'
  type = CarTypeEnum.XeSuv
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
