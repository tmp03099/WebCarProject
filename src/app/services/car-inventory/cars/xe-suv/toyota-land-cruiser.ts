import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaLandCruiser implements CarInfoInterface {
  name = 'Toyota Land Cruiser'
  type = CarTypeEnum.XeSuv
  imgSrc = 'assets/img/cars/land-cruiser.png'
  banner = 'assets/img/toyota/land-cruiser/banner.jpg'
  models = [
    {
      brand: 'Toyota Land Cruiser',
      price: 4060000000,
      lingo: 'UY LỰC THỐNG LĨNH',
      seats: 7,
      type: 'SUV',
      fuelType: 'Xăng',
      manufacture: 'Xe nhập khẩu',
      otherInfo: ['Số tự động 10 cấp'],
      library:[
        '/assets/img/toyota/land-cruiser/library/1pvocz.jpg',
        '/assets/img/toyota/land-cruiser/library/135uni.jpg',      
        '/assets/img/toyota/land-cruiser/library/in5dcb.jpg',
        '/assets/img/toyota/land-cruiser/library/pyhvks.jpg'
      ],
      colors:[
        {
          label: 'Đen - 202',
          image: '/assets/img/toyota/land-cruiser/colors/Den-202.png',
          colorCode: '#171717'
        },
        {
          label: 'Trắng - 070',
          image: '/assets/img/toyota/land-cruiser/colors/Trang-070.png',
          colorCode: 'white'
        },
        {
          label: 'Bạc - 1F7',
          image: '/assets/img/toyota/land-cruiser/colors/Bac-1F7.png',
          colorCode: '#e8e8e8'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/land-cruiser/colors/Den-218.png',
          colorCode: '#050505'
        },
        {
          label: 'Đồng - 4V8',
          image: '/assets/img/toyota/land-cruiser/colors/Dong-4V8.png',
          colorCode: '#b6b3af'
        },
        {
          label: 'Xám - 1G3',
          image: '/assets/img/toyota/land-cruiser/colors/Xam-1G3.png',
          colorCode: '#646464'
        },
        {
          label: 'Xanh - 8X8',
          image: '/assets/img/toyota/land-cruiser/colors/xanh-8X8.png',
          colorCode: '#19222e'
        }
      ],
      ngoaiThat: {
        label: 'KIÊU HÃNH VƯỢT TRỘI',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/land-cruiser/ngoai-that/kmyctu.jpg',
        features: [
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/1kbd04.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/4bsgty.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/eiwvpq.jpg',
            label: 'Cửa sổ trời'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/fu2kbx.jpg',
            label: 'Gương chiếu hậu'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/huckfk.jpg',
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/jjlksj.jpg',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/land-cruiser/ngoai-that/zdq5jm.jpg',
            label: 'Cụm đèn sau'
          }
        ]
      },
      noiThat: {
        label: 'NỘI THẤT TIỆN NGHI',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/land-cruiser/noi-that/cyi4qr.jpg',
        features: [
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/2hkpkf.jpg',
            label: 'Hệt thống sưởi và thông gió'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/3da3it.jpg',
            label: 'Điều hòa tự động phía sau'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/d0cylm.jpg',
            label: 'Bố trí ghê ngồi'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/ifciee.jpg',
            label: 'Màn hình giải trí'
          },
          {
            image: '/assets/img/toyota/land-cruiser/noi-that/wirt1u.jpg',
            label: 'Bảng đồng hồ'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/0jm1hm.jpg",
          title: "Hệ thống khởi hành ngang dốc HAC",
          message: "Khi khởi hành trên dốc cao, hệ thống hỗ trợ khởi hành ngang dốc sẽ lập tức tự động phanh các bánh xe khi người lái chuyển từ chân phanh sang chân ga, giúp xe không bị trôi dốc."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/5fwtco.jpg",
          title: "Hệ thống cân bằng điện tử VSC",
          message: "Hệ thống kiểm soát ổn định xe VSC tự động giảm công suất động cơ và tự động phanh ở các bánh xe trước và sau khi có hiện tượng thiếu lái và lái quá đà lúc vào cua nhằm ngăn ngừa hiện tượng chệch hướng."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/asja0a.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/ir2u24.jpg",
          title: "Hệ thống khóa cửa và khởi động thông minh",
          message: "Hệ thống khóa cửa thông mình và khởi động bằng nút bấm mang đến ự tiện lợi khi ra vào xe và khởi động động cơ."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/kiwwtg.jpg",
          title: "Hệ thống túi khí",
          message: "Hệ thống túi khí bảo vệ hành khách trong trường hợp xảy ra va chạm có thể gây nguy hiểm."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/piyuya.jpg",
          title: "Hệ thống cảm ứng an toàn 2.0",
          message: "Tích hợp tính năng an toàn 2.0 đảm bảo an toàn cho hành khách."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/jzzwib.jpg",
          title: "Hệ thống lựa chọn địa hình",
          message: "Cho phép chọn lựa các chế độ lái phù hợp với các địa hình khác nhau, làm tăng khả năng bám đường và độ ổn định xe."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/rf3hfr.jpg",
          title: "Động cơ 3.5 V6 Turbo",
          message: "Trang bị động cơ dung tích 3.5L V6 Tubor với công suất vượt trội cùng với các công nghệ tiên tiến mang lại trải nghiệm và tiết kiệm nhiên liệu."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/t4oqff.jpg",
          title: "Hệ thống số tự động 10 cấp",
          message: "Hệ thống số tự động 10 cấp đảm bảo khả năng vận hành mượt mà trên mọi địa hình."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/v2mfbo.jpg",
          title: "Hệ thống kiểm soát hành trình",
          message: "Hệ thống giúp người lái có thẻ cài đặt một vận tốc không đổi, tiện lợi và hữu tích khi chạy xe trên cao tốc hoặc đường ít xe."
        },
        {
          image: "/assets/img/toyota/land-cruiser/tinh-nang/zp4z6r.jpg",
          title: "Hệ thống chống bó cứng phanh (ABS)",
          message: "Khi được kích hoạt bằng cách đạp phanh dứt khoát, hệ thống chống bó cứng phanh ABS sẽ tự động nhấp nhả phanh liên tục, giúp các bánh xe không bị bó cứng, cho phép người lái duy trì khả năng điều khiển xe tránh chướng ngại vật và đảm bảo ổn định thân xe."
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
