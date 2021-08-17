import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaFortuner implements CarInfoInterface {
  name = 'Toyota Fortuner'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/fortuner.png'
  banner = 'assets/img/toyota/fortuner/banner.jpg'
  models = [
    {
      brand: 'Toyota Fortuner 2.4AT 4x2',
      price: 1088000000,
      seats: 7,
      type: 'SUV',
      fuelType: 'Dầu',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tự động 6 cấp/6AT'],
      library:[
        '/assets/img/toyota/fortuner/library/1i4ixg.jpg',
        '/assets/img/toyota/fortuner/library/jgf1ww.jpg',
        '/assets/img/toyota/fortuner/library/xxgjfk.jpg'
      ],
      colors: [
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Den.png',
          colorCode: 'black' 
        },
        {
          label: 'Trắng ngọc trai - 089',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Trang.png',
          colorCode: '#f7f9fa'
        },
        {
          label: 'Bạc - 1D6',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Bac.png',
          colorCode: '#c4c4c4'
        },
        {
          label: 'Đồng - 4V8',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Dong.png',
          colorCode: '#908b85'
        },
        {
          label: 'Nâu - 4W9',
          image: '/assets/img/toyota/fortuner/colors/2.4AT 4X2/01_Nau.png',
          colorCode: '#513e3a'
        }
      ],
      ngoaiThat: {
        label: 'MẠNH MẼ ĐẦY CUỐN HÚT',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/fortuner/ngoai-that/hcycd3.jpg',
        features: [
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/0tbgq1.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/0tfbdj.jpg',
            label: 'Gương chiếu hậu bên ngoài'
          },
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/l1wlxl.jpg',
            label: 'cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/sfeik3.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/fortuner/ngoai-that/t1ijov.jpg',
            label: 'Cụm đèn sau'
          }
        ]
      },
      noiThat: {
        label: 'HOÀN HẢO, TIỆN NGHI VƯỢT TRỘI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/fortuner/noi-that/l0ggnf.jpg',
        features: [
          {
            image: '/assets/img/toyota/fortuner/noi-that/04jtqs.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/btiuxb.jpg',
            label: 'Hộp đựng mắt kính'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/dgyi54.jpg',
            label: 'Hộp để đồ có khả năng làm mát'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/ekc0ms.jpg',
            label: 'Hệ thống âm thanh'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/xy0wfx.jpg',
            label: 'Bảng đồng hồ táp lô'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/p5mnrb.jpg',
            label: 'Nút bấm khởi động'
          },
          {
            image: '/assets/img/toyota/fortuner/noi-that/j5zxni.jpg',
            label: 'Không gian nội thất'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/0txutn.jpg",
          title: "Động cơ",
          message: "Ở 2 phiên bản 2.8L, với những tinh chỉnh trong thiết kế, giúp động cơ của Fortuner thuộc TOP động cơ mạnh nhất phân khúc khi công suất đạt 201 hp / 3400 v/p (tăng 17 hp) và mô men xoắn đạt 500 Nm / 1600 v/p. Với công nghệ mới giúp tiết kiệm nhiên liệu và giảm tiếng ồn từ động cơ."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/2dg1zv.jpg",
          title: "Hộp số",
          message: "Hộp số tự động 6 cấp giúp chuyển số nhịp nhàng, tăng tốc tốt hơn, vận hành mượt mà hơn, và tiết kiệm nhiên liệu hơn."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/axbhm3.jpg",
          title: "Camera lùi",
          message: "Camera lùi tăng khả năng quan sát chướng ngại vật giúp người lái an tâm hơn khi lùi xe."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/c4hyod.jpg",
          title: "Hệ thông kiểm soát lực kéo",
          message: "Hệ thống A-TRC tác động lên công suất động cơ và lực phanh ở mỗi bánh xe, nhờ đó giúp chiếc xe có thể dễ dàng tăng tốc và khởi hành rên đường trơn trượt."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/ds4kss.jpg",
          title: "Hệ thống khởi hành ngang dốc (HAC)",
          message: "Khi người lái chuyển từ chân phanh sang chân ga để khởi hành ngang dốc, hệ thống HAC sẽ tự động tác ộng phanh tới cả 4 bánh xe trong vòng khoảng 2 giây, nhờ đó giúp chiếc xe không bị trôi dốc và dễ dàng khởi hành hơn."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/enntff.jpg",
          title: "Hệ thống chống bó cứng phanh (ABS)",
          message: "Khi được kích hoạt bằng cách đạp phanh dứt khoát, hệ thống chống bó cứng phanh ABS sẽ tự động nhấp nhả phanh liên tục, giúp các bánh xe không bị bó cứng, cho phép người lái duy trì khả năng điều khiển xe tránh chướng ngại vật và đảm bảo ổn định thân xe."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/f3sqmn.jpg",
          title: "Hệ thống túi khí",
          message: "Fortuner thế hệ đột phá được trang bị hệ thống túi khí hiện đại giúp giảm thiểu tối đa chấn thương cho người lái và hành khách trong trường hợp không may xảy ra va chạm."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/gjjop4.jpg",
          title: "Hệ thống hỗ trợ lực phanh khẩn cấp BA",
          message: "Hệ thống hỗ trợ lực phanh khẩn cấp BA tự động gia tăng thêm lực phanh trong trường hợp khẩn cấp, giúp người lái tự tin xử lý các tình huống bất ngờ."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/i0cq4w.jpg",
          title: "Tính năng nháy đèn khi phanh khẩn cấp (EBS)",
          message: "Đèn cảnh báo nguy hiểm của xe sẽ tự động nháy sáng trong tình huống người lái phanh gấp. Nhờ đó sẽ cảnh báo cho các xe phía sau kịp thời xử lý để tránh xảy ra va chạm."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/kkgtxu.jpg",
          title: "Hệ thống kiểm soát móc kéo",
          message: "Hệ thống kiểm soát móc kéo giúp đảm bảo tính ma sát của bề mặt lốp xe với mặt đường giúp tăng cường khả năng ổn định thân xe khi kéo thêm móc phía sau."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/knbszx.jpg",
          title: "Khung xe GOA",
          message: "Khung xe có các vùng co rụm phía trước, phía sau giúp hấp thụ tốt các xung lực va đập, ngoài ra các thanh tăng cứng bên sườn xe làm giảm biến dạng khoang hành khách, giảm thiểu chấn thương trong trường hợp không may xảy ra va chạm."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/m2skvh.jpg",
          title: "Khung gầm",
          message: "Khung gầm kiên cố, chắc chắn, đích thực là chiếc SUV đẳng cấp."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/px0ibr.jpg",
          title: "Đèn báo phanh trên cao",
          message: "Đèn báo phanh trên cao sử dụng công nghệ LED giúp tăng cường tín hiệu cảnh báo khi phanh đối với phương tiện hoặc người đi đường di chuyển phía sau xe, tránh những va chạm bất ngờ có thể xảy ra."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/q3xwfs.jpg",
          title: "Hệ thống cân bằng điện tử (VSC)",
          message: "Hệ thống VSC kiểm soát công suất động cơ và phân bổ lực phanh hợp lý tới từng bánh xe, nhờ đó giảm thiểu nguy cơ mất lái và trượt bánh xe đặc biệt trên các cung đường trơn trượt hay khi vào cua gấp."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/scsr51.jpg",
          title: "Hệ thống phân phối lực phanh điện tử EBD",
          message: "Hệ thống phân phối lực phanh điện tử EBD phân bổ lực phanh hợp lý lên các bánh xe, giúp nâng cao hiệu quả phanh, đặc biệt khi xe đang chất tải và vào cua."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/vdaagj.jpg",
          title: "Hệ thống treo",
          message: "Hệ thống treo với tay đòn kép ở phía trước và liên kết bốn điểm ở phía sau nhằm giảm tối đa độ rung lắc,cho cảm giác lái êm mượt dễ chịu dù trên những địa hình gồ ghề nhất."
        },
        {
          image: "/assets/img/toyota/fortuner/tinh-nang/yvt2s1.jpg",
          title: "Chế độ lái",
          message: "Tuỳ vào hành trình di chuyển, chủ sở hữu có thể chọn chế độ ECO giúp tối ưu hóa tính năng tiết kiệm  nhiên liệu; và chế độ POWER giúp tối ưu hóa tính năng vận hành (vượt xe, vượt dốc, chở tải)."
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
        brand: 'Toyota Fortuner 2.4MT 4x2',
        price: 995000000,
        otherInfo: ['Số sàn 6 cấp/6MT'],
      },
      {
        brand: 'Toyota Fortuner 2.7AT 4x2',
        price: 1138000000,
        fuelType: 'Xăng',
        manufacture: 'Xe nhập khẩu',
        otherInfo: ['Số tự động 6 cấp'],
      },
      {
        brand: 'Toyota Fortuner 2.7AT 4x4',
        price: 1238000000,
        fuelType: 'Xăng',
        manufacture: 'Xe nhập khẩu',
        otherInfo: ['Số tự động 6 cấp']
      },
      {
        brand: 'Toyota Fortuner 2.8AT 4x4',
        price: 1396000000
      },
      {
        brand: 'Toyota Fortuner Legender 2.4AT 4X2',
        price: 1203000000
      },
      {
        brand: 'Toyota Fortuner Legender 2.8AT 4X4',
        price: 1434000000
      }
  ]

}