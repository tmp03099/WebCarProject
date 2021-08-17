import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaInnova implements CarInfoInterface {
  name = 'Toyota Innova'
  type = CarTypeEnum.XeChuyenDung
  imgSrc = 'assets/img/cars/innova.png'
  models = [
    {
      brand: 'Toyota Innova E 2.0MT',
      price: 750000000,
      lingo: 'Chở Đầy Yêu Thương',   
      seats: 8,
      type: 'Đa dụng',
      fuelType: 'Xăng',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tay 5 cấp','Động cơ xăng dung tích 1.998 cm3',
      'Tặng kèm gói thay dầu máy, lọc dầu và kiểm tra xe miễn phí 3 năm'],
      library:[
        '/assets/img/toyota/innova/library/5zm3ly.jpg',
        '/assets/img/toyota/innova/library/f4u4eb.jpg',
        '/assets/img/toyota/innova/library/lbmjca.jpg',
        '/assets/img/toyota/innova/library/mjoh2w.jpg',
        '/assets/img/toyota/innova/library/r4jhel.jpg',
        '/assets/img/toyota/innova/library/ubi5si.jpg',
        '/assets/img/toyota/innova/library/vrkhy0.jpg',
        '/assets/img/toyota/innova/library/waocbr.jpg',
        '/assets/img/toyota/innova/library/xb2boi.jpg'   
      ],
      colors: [
        {
          label: 'Bạc - 1D6',
          image: '/assets/img/toyota/innova/colors/E 2.0MT/1D6_SILVER-1.png',
          colorCode: 'silver'
        },
        {
          label: 'Đồng - 4V8',
          image: '/assets/img/toyota/innova/colors/E 2.0MT/4V8_AVANT-GARDE-BRONZE-1.png',
          colorCode: '#afa599'
        },
        {
          label: 'Trắng - 040',
          image: '/assets/img/toyota/innova/colors/E 2.0MT/040_SUPER-WHITE-1.png',
          colorCode: 'white'
        }
      ],
      ngoaiThat: {
        label: 'SANG TRỌNG - VỮNG CHÃI',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/innova/ngoai-that/5jdszd.jpg',
        features: [
          {
            image: '/assets/img/toyota/innova/ngoai-that/bni0q2.jpg',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/evs1mc.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/gd0so1.jpg',
            label: 'Tay nắm cửa'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/j4udfh.jpg',
            label: 'Đèn xi nhan'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/nsy0b3.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/qnzba3.jpg',
            label: 'Gương chiếu hậu bên ngoài'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/vmqvvn.jpg',
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/volwtf.jpg',
            label: 'Đuôi xe'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/xbzjbg.jpg',
            label: 'Cụm đèn trước'
          }
        ]
      },
      noiThat: {
        label: 'SANG TRỌNG - ĐẲNG CẤP',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/innova/noi-that/zdqpvv.jpg',
        features: [
          {
            image: '/assets/img/toyota/innova/noi-that/0qebi4.jpg',
            label: 'Cách xếp ghế linh hoạt'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/4klu1h.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/5qu4tv.jpg',
            label: 'Không gian đẳng cấp'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/dba91d.jpg',
            label: 'Hệ thống mở khóa và khởi động thông minh'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/hch0fw.jpg',
            label: 'Ngăn đựng vật dụng'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/iivb3y.jpg',
            label: 'Bàn gập sau lưng ghế'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/jmvizg.jpg',
            label: 'Bảng đồng hồ'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/k52iou.jpg',
            label: 'Hộp đựng đồ có khả năng làm mát'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/ncxkdb.jpg',
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/oju7nh.jpg',
            label: 'Giá giữ ly phía trước'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/rb5nob.jpg',
            label: 'Hệ thống âm thanh'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/rskcnv.jpg',
            label: 'Đèn chiếu sáng nội thất'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/sk21fn.jpg',
            label: 'Điều chỉnh ở hàng ghế 2'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/t75a8v.jpg',
            label: 'Ngăn đựng mắt kính'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/yyrybn.jpg',
            label: 'Khoang hành lý'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/innova/tinh-nang/6u31q7.jpg",
          title: "Khung xe",
          message: "Khung xe với kết cấu GOA sử dụng thép chống ăn mòn cứng vững hơn,cho khả năng giảm thiểu tối đa lực tác động trực tiếp lên khoang hành khách để bảo đảm độ an toàn."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/12fowg.jpg",
          title: "Hệ thống hỗ trợ lực phanh khẩn cấp BA",
          message: "Hệ thống hỗ trợ lực phanh khẩn cấp BA tự động gia tăng thêm lực phanh trong trường hợp khẩn cấp, giúp người lái tự tin xử lý các tình huống bất ngờ."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/19pt9w.jpg",
          title: "Cấu trúc giảm chấn thương đốt sống cổ",
          message: "Trong trường hợp xảy ra va chạm mạnh từ phía sau, đầu và thân hành khách có xu hướng đập mạnh vào ghế. Cấu trúc giảm chấn thương đốt sống cổ sẽ giảm chuyển động tương đối giữa đầu và thân, giúp giảm thiểu tối đa chấn thương phần đốt sống cổ."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/668t74.jpg",
          title: "Hệ thống chống bó cứng phanh (ABS)",
          message: "Khi được kích hoạt bằng cách đạp phanh dứt khoát, hệ thống chống bó cứng phanh ABS sẽ tự động nhấp nhả phanh liên tục, giúp các bánh xe không bị bó cứng, cho phép người lái duy trì khả năng điều khiển xe tránh chướng ngại vật và đảm bảo ổn định thân xe."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/atom1d.jpg",
          title: "Đèn báo phanh khẩn cấp",
          message: "Đèn báo phanh khẩn cấp của xe sẽ tự động nháy sáng trong tình huống người lái phanh gấp.Nhờ đó sẽ cảnh báo cho các xe phía sau kịp thời xử lý để tránh xảy ra va chạm."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/der211.jpg",
          title: "Hộp số",
          message: "Hộp số tự động 6 cấp chuyển số êm ái, mượt mà nhưng không làm giảm đi sự vận hành mạnh mẽ khi cầm lái."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/h12wxm.jpg",
          title: "Hệ thống treo",
          message: "Hệ thống treo với tay đòn kép ở phía trước và liên kết bốn điểmở phía sau nhằm giảm tối đa độ rung lắc, cho cảm giác lái êm mượt, dễ chịu dù trên những địa hình gồ ghề nhất."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/ipgqqn.jpg",
          title: "Hệ thống khởi hành ngang dốc (HAC)",
          message: "Hệ thống hỗ trợ khởi hành ngang dốc (HAC) ngăn không cho xe bị trôi ngược về phía sau khi khởi hành trên các địa hình nghiêng."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/j3ygy7.jpg",
          title: "Cột lái tự đổ",
          message: "Cột lái tự đổ giúp hạn chế khả năng chấn thương phần ngực cho người lái khi có va chạm."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/jtt2z6.jpg",
          title: "Hệ thống túi khí",
          message: "Hệ thống túi khí được tăng cường tối đa tới 7 túi khí không những bảo vệ tuyệt đối hàng ghế người lái, mà còn cho hành khách phía sau trong trường hợp xảy ra va chạm có thể gây nguy hiểm."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/ou8s54.jpg",
          title: "Động cơ",
          message: "Động cơ 1TR-FE được nâng cấp lên VVT-i kép, tỷ số nén được tăng lên, đồng thời giảm ma sát hoạt động. Điều này giúp động cơ đạt công suất và mô men cao hơn, đồng thời tiết kiệm nhiên liệu hơn. Tiếng ồn của động cơ cũng được giảm đáng kể giúp bạn tận hưởng trọn vẹn những giây phút gia đình."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/r8ndie.jpg",
          title: "Hệ thống cân bằng điện tử (VSC)",
          message: "Hệ thống cân bằng điện tử VSC kiểm soát tình trạng trượt và tăng cường độ ổn định khi xe vào cua, đảm bảo xe luôn vận hành đúng quỹ đạo mong muốn. Đặc biệt, hệ thống còn được trang bị nút tắt (Off) để khách hàng linh hoạt sử dụng."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/ti09at.jpg",
          title: "Hệ thống phân phối lực phanh điện tử EBD",
          message: "Hệ thống phân phối lực phanh điện tử EBD phân bổ lực phanh hợp lý lên các bánh xe, giúp nâng cao hiệu quả phanh, đặc biệt khi xe đang chất tải và vào cua."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/to64xy.jpg",
          title: "Hệ thống khung gầm",
          message: "Hệ thống khung gầm được thiết kế mới cứng cáp với khả năng chịu lực tuyệt vời giúp tăng độ vững chãi, ổn định cho xe dù là khi vận hành với tốc độ cao hay là đang di chuyển trên những cung đường ghập ghềnh."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/v3cr3w.jpg",
          title: "Chế độ ECO và chế độ POWER",
          message: "Chế độ ECO và chế độ POWER cho khách hàng thêm lựa chọn, không những nâng cao hiệu quả làm việc của động cơ mà còn giảm thiểu tiêu hao nhiên liệu."
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/y1qmgq.jpg",
          title: "Cảm biến lùi",
          message: "Cảm biến lùi giúp xác định vật cản khuất tầm nhìn, phát tín hiệu cảnh báo hỗ trợ người điều khiển đánh lái phù hợp để lùi hoặc đỗ xe an toàn."
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
      brand: 'Toyota Innova G 2.0AT',
      price: 865000000,
      lingo: 'Chở Đầy Yêu Thương',   
      seats: 8,
      type: 'Đa dụng',
      fuelType: 'Xăng',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tự động 6 cấp','Động cơ xăng dung tích 1.998 cm3',
      'Tặng kèm gói thay dầu máy, lọc dầu và kiểm tra xe miễn phí 3 năm'],
      colors: [
        {
          label: 'Bạc - 1D6',
          image: '/assets/img/toyota/innova/colors/G-2-0AT/1D6_SILVER-1.png',
          colorCode: 'silver'
        },
        {
          label: 'Đồng - 4V8',
          image: '/assets/img/toyota/innova/colors/G-2-0AT/4V8_AVANT-GARDE-BRONZE-1.png',
          colorCode: '#afa599'
        },
        {
          label: 'Trắng - 040',
          image: '/assets/img/toyota/innova/colors/G-2-0AT/040_SUPER-WHITE-1.png',
          colorCode: 'white'
        },
        {
          label: 'Trắng ngọc trai - 070',
          image: '/assets/img/toyota/innova/colors/G-2-0AT/070_WHITE-PEARL-1.png',
          colorCode: '#f7f9fa'
        }
      ]
    }, 
    {
      brand: 'Toyota Innova V 2.0AT',
      price: 989000000,
      lingo: 'Chở Đầy Yêu Thương',   
      seats: 8,
      type: 'Đa dụng',
      fuelType: 'Xăng',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tự động 6 cấp','Động cơ xăng dung tích 1.998 cm3'],
      colors: [
        {
          label: 'Bạc - 1D6',
          image: '/assets/img/toyota/innova/colors/V 2.0AT/1D6_SILVER-1.png',
          colorCode: '#e8e8e8'
        },
        {
          label: 'Đồng - 4V8',
          image: '/assets/img/toyota/innova/colors/V 2.0AT/4V8_AVANT-GARDE-BRONZE-1.png',
          colorCode: '#afa599'
        },
        {
          label: 'Trắng - 040',
          image: '/assets/img/toyota/innova/colors/V 2.0AT/040_SUPER-WHITE-1.png',
          colorCode: 'white'
        },
        {
          label: 'Trắng ngọc trai - 070',
          image: '/assets/img/toyota/innova/colors/V 2.0AT/070_WHITE-PEARL-1.png',
          colorCode: '#f7f9fa'
        }
      ]
    },
    {
      brand: 'Toyota Innova Venturer',
      price: 879000000,
      lingo: 'Chở Đầy Yêu Thương',   
      seats: 8,
      type: 'Đa dụng',
      fuelType: 'Xăng',
      manufacture: 'Xe trong nước',
      otherInfo: ['Số tự động 6 cấp','Động cơ xăng dung tích 1.998 cm3'],
      library:[
        '/assets/img/toyota/innova/Venturer/library/5ityed.jpg',
        '/assets/img/toyota/innova/Venturer/library/elwu1e.jpg',
        '/assets/img/toyota/innova/Venturer/library/hpjtfj.jpg',
        '/assets/img/toyota/innova/Venturer/library/mqxvt0.jpg',
        '/assets/img/toyota/innova/Venturer/library/ptarsa.jpg',
        '/assets/img/toyota/innova/Venturer/library/rzrkha.jpg',
        '/assets/img/toyota/innova/Venturer/library/spt31e.jpg',
        '/assets/img/toyota/innova/Venturer/library/trfnhh.jpg'
      ],
      colors:[
        {
          label: 'Đỏ - 3R3',
          image: '/assets/img/toyota/innova/colors/VENTURER/3R3_RED-1.png',
          colorCode: 'red'
        },
        {
          label: 'Trắng ngọc trai - 070',
          image: '/assets/img/toyota/innova/colors/VENTURER/070_WHITE-PEARL-1.png',
          colorCode: '#f7f9fa'
        },
        {
          label: 'Đen - 218',
          image: '/assets/img/toyota/innova/colors/VENTURER/218_ATTITUDE-BLACK-1.png',
          colorCode: 'black'
        }
      ],
      ngoaiThat: {
        label: 'SANG TRỌNG - VỮNG CHÃI',
        backgroundImage: '/assets/img/toyota/wigo/ngoai-that/0.png',
        image: '/assets/img/toyota/innova/Venturer/ngoai-that/xzpkle.jpg',
        features: [
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/3gr5fu.jpg',
            label: 'Đầu xe'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/0v2iyp.jpg',
            label: 'Đèn sương mù'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/5yzvpy.jpg',
            label: 'Đèn xi nhang'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/atlntt.jpg',
            label: 'Gương chiếu hậu ngoài'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/hqkgyo.jpg',
            label: 'Mâm xe'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/iapgvl.jpg',
            label: 'Cụm đèn trước'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/xhp0ip.jpg',
            label: 'Cụm đèn sau'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/xz2bpn.jpg',
            label: 'Tay nắm cửa'
          }
        ]
      },
      noiThat: {
        label: 'SANG TRỌNG - ĐẲNG CẤP',
        backgroundImage: '/assets/img/toyota/wigo/noi-that/0.png',
        image: '/assets/img/toyota/innova/Venturer/noi-that/uqmu45.jpg',
        features: [
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/2fzpn0.jpg',
            label: 'Hộp đựng đồ có khả năng làm mát'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/2vrw2k.jpg',
            label: 'Đèn chiếu sáng nội thất'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/e5cwnb.jpg',
            label: 'Hệ thống điều hòa'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/ha0s1k.jpg',
            label: 'Hệ thống âm thanh'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/k3wvrz.jpg',
            label: 'Cách xếp ghế linh hoạt'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/kehlpr.jpg',
            label: 'Giá giữ ly phía trước'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/nuzojs.jpg',
            label: 'Bảng đồng hồ'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/ohgmiq.jpg',
            label: 'Ngăn đựng mắt kính'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/pyas5f.jpg',
            label: 'Hệ thống mở khóa và khởi động thông minh'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/rskm4h.jpg',
            label: 'Tựa tay hàng ghế sau'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/xiguel.jpg',
            label: 'Không gian đẳng cấp'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/xtvnwa.jpg',
            label: 'Tay lái'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/yzc0jr.jpg',
            label: 'Khoang hành lý'
          }
        ]
      },
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
