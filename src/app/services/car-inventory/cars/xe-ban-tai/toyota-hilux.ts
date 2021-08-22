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
        brand: 'Toyota HILUX 2.4L 4X2 AT',
        price: 674000000
      },
      {
        brand: 'Toyota HILUX 2.4L 4X4 MT',
        price: 799000000
      },
      {
        brand: 'Toyota HILUX 2.8L 4X4 AT',
        price: 913000000
      }
  ]
}
