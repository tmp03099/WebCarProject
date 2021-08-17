import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaVios implements CarInfoInterface {
  name   = 'Toyota Vios'
  type   =  CarTypeEnum.XeDuLich
  imgSrc = 'assets/img/cars/vios.png'
  banner = 'assets/img/toyota/vios/banner.jpg'

  models = [
    {
      brand: 'Toyota Vios 1.5E MT',
      price: 478000000,
      lingo: 'Khởi xướng trào lưu',  
      seats: 5,
      type: 'Sedan',
      fuelType: 'Xăng',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tay 5 cấp'],
      library:[
        '/assets/img/toyota/vios/library/czcwkc.jpg',
        '/assets/img/toyota/vios/library/dz5zvo.jpg',
        '/assets/img/toyota/vios/library/fjsivp.jpg',
        '/assets/img/toyota/vios/library/lcalpp.jpg',
        '/assets/img/toyota/vios/library/tab01q.jpg',
        '/assets/img/toyota/vios/library/zj4nwk.jpg'
      ],
      promotion: [
        `Hỗ trợ 1 phần lệ trí trước bạ lên đến 20 triệu dồng,
        áp dụng từ 1/8-31/8/2021`,
        `Sở hữu xe chỉ với 95,2 triệu thanh toán ban đầu, trả góp
        từ 4,0 triệu đồng/tháng trong 6 tháng đầu tiên`
      ],
      colors: [
          {
            label: 'Đỏ - 3G3',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(3R3)-1.png',
            colorCode: 'red'
          },
          {
            label: 'Nâu Vàng - 4R0',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(4R0)-1.png',
            colorCode: '#afa599'
          },
          {
            label: 'Trắng - 040',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(040)-1.png',
            colorCode: 'white'
          },
          {
            label: 'Trắng ngọc trai - 089',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(089)-1.png',
            colorCode: '#f7f9fa'
          },
          {
            label: 'Đen - 218',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(218)-1.png',
            colorCode: 'black'
          },
          {
            label: 'Vàng - 576',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(576)-1.png',
            colorCode: 'yellow'
          },
          {
            label: 'Bạc - 1D6',
            image: '/assets/img/toyota/vios/colors/1.5E MT/VE-(1D6)-1.png',
            colorCode: 'silver'
          }
      ],
      ngoaiThat: {
        label: 'THIẾT KẾ GIÀU CẢM XÚC',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/vios/ngoai-that/rrewc4.jpg',
        features: [
          {
            image: '/assets/img/toyota/vios/ngoai-that/1gmbwf.jpg',
            label: 'Đuôi xe'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/bgmjef.jpg',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/h15foc.jpg',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/jvsbxm.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/mempep.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/q24lq5.jpg',
            label: 'Gương chiếu hậu ngoài'
          },
          {
            image: '/assets/img/toyota/vios/ngoai-that/vuezqm.jpg',
            label: 'Ăng-ten'
          }
        ]
      },
      noiThat: {
        label: 'TRUYỀN CẢM HỨNG TỪ TIỆN NGHI VÀ THOẢI MÁI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/vios/noi-that/l.jpg',
        features: [
          {
            image: '/assets/img/toyota/vios/noi-that/0g24rw.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/0j2ezj.jpg',
            label: 'Hàng ghế sau gặp thẳng'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/sgkurw.jpg',
            label: 'Cụm đồng hồ'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/1toaq0.jpg',
            label: 'Hàng ghế sau'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/2toejf.jpg',
            label: 'Hệ thống giải trí'
          },
          {
            image: '/assets/img/toyota/vios/noi-that/usycoq.jpg',
            label: 'Khoang hành lý'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/vios/tinh-nang/cambien.jpg",
          title: "Cảm biến đuôi xe",
          message: "Khách hàng hoàn toàn yên tâm khi vận hành dù trong không gian nhiều chướng ngại vật"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/cambiendoxe.jpg",
          title: "Cảm biến đổ xe",
          message: "Khách hàng hoàn toàn yên tâm khi vận hành dù trong không gian nhiều chướng ngại vật"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/cameralui.jpg",
          title: "Camera lùi",
          message: "Camera lùi giúp người lái quan sát được phía sau, thuận tiện và an toàn khi lùi xe, tự tin khi cầm lái"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/canbang.jpg",
          title: "Hệ thống cân bằng điện tử",
          message: "VSC kiểm soát công suất động cơ và phân bổ lực phanh hợp lý tới từng bánh xe, nhờ đó giảm thiểu nguy cơ mất lái và trượt bánh xe đặc biệt trên các cung đường trơn trợt khi vào cua gấp"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/chongcung.jpg",
          title: "Hệ thống phanh ABS",
          message: "Hệ thống phanh ABS chống bó cưng phanh giúp xe an toàn nhất khi thắng gấp."
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/dongco.jpg",
          title: "Động cơ",
          message: "Động cơ 2NR-FE (1.5L) mới được trang bị hệ thống điều phối van biến thiên thông minh kép VVT-I mang lại hiệu suất vận hành cao ở mọi địa hình, cho phép tăng tốc êm ái giúp tiết kiệm nhiên liệu tối đa, giảm thiểu ô nhiễm môi trường và gia tăng tuổi thọ cho động cơ."
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/hethongphanh.jpg",
          title: "Hệ thống phanh",
          message: "Phanh trước dạng đĩa thông gió và phanh sau dạng đĩa đảm bảo lực phanh tối ưu gia tăng tính an toàn để người lái yên tâm và tự tin hơn khi điều khiển xe"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/hopso.jpg",
          title: "Hộp số",
          message: "Hộp số sàn 5 cấp giúp tiết kiệm nhiên liệu khi lưu thông qua nhiều địa hình khác nhau. Bảo trì thường ít tốn kém chi phí hơn và kiểm soát xe tốt nhất có thể"
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/khoihanh.jpg",
          title: "Khởi hành ngang dốc",
          message: "EDB phân bổ lực phanh hợp lý đến các bánh xe, giúp nâng cao hiệu quả phanh, đặc biệt khi xe đang chất tải và vào cua."
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/kiemsoatluckeo.jpg",
          title: "Kiểm soát lực kéo",
          message: "TRC kiểm soát công suất động cơ và phanh các bánh xe dẫn động nhằm giúp cho xe khởi hành và tăng tốc trên đường trơn trượt."
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/phanhkhancap.jpg",
          title: "Hỗ trợ lực phanh khẩn cấp",
          message: "Các phiên bản Vios mới đều đã được trang bị hệ thống BA - bổ sung lực phanh lên tới mức tối đa khi người lái đạp phanh khẩn cấp, mang lại sự an tâm cho hành khách trên mọi chuyến đi."
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/phanphoi.jpg",
          title: "Phân phối phanh điện tử",
          message: "TRC kiểm soát công suất động cơ và phanh các bánh xe dẫn động nhằm giúp cho xe khởi hành và tăng tốc trên đường trơn trượt."
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/thietkedonghoc.jpg",
          title: "Thiết kế khí động học",
          message: "Thiết kế khí động học giúp tối ưu các khí động, khắc phục các lực cản lên xe, giúp xe vận hành “trơn tru”, đồng thời tăng tính ổn định khi xe đang di chuyển tốc độ cao để đảm bảo an toàn cho người lái."
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/tuikhi.jpg",
          title: "Túi khí",
          message: "Các dòng xe VIOS mới được trang bị hệ thống 7 túi khí gồm 2 túi khí phía trước, 2 túi khí bên hông phía trước, 2 túi khí rèm và 1 túi khí đầu gối người lái sẽ đảm bảo an toàn cho hành khách và người lái trên mọi hành trình."
        },
        {
          image: "/assets/img/toyota/vios/tinh-nang/vanhanh.jpg",
          title: "Vận hành êm ái",
          message: "Vios thế hệ mới hứa mang lại những trải nghiệm thú vị phía sau tay lái nhưng vẫn tối ưu hóa khả năng tiết kiệm nhiên liệu."
        }
      ],
      thongSo: [
        {
          label: "Kích thước Kích thước tổng thể bên ngoài (D x R x C) (mm x mm x mm)",
          value: "4425 x 1730 x 1475"
        },
        {
          label: "Kích thước tổng thể bên trong (D x R x C) (mm x mm x mm)",
          value: "1895 x 1420 x 1205"
        },
        {
          label: "Chiều dài cơ sở (mm)",
          value: "2550",
        },
        {
          label: "",
          value: "",
        }
      ]
      },
     {
       brand: 'Toyota Vios 1.5E CVT',
       price: 531000000

     },
     {
       brand: 'Toyota Vios 1.5G CVT',
       price: 581000000
     },
     {
       brand: 'Toyota Vios 1.5G R-S',
       price: 630000000
     }
  ]
}
