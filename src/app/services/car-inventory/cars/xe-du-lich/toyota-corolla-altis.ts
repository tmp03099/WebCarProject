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
        `Tặng kèm 2 năm bảo hiểm thân vỏ Toyota`
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
       brand: 'Toyota Corolla Altis 1.8G CVT',
       price: 763000000
     }
  ]
}
