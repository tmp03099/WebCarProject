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
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/evs1mc.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/gd0so1.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/j4udfh.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/nsy0b3.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/qnzba3.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/vmqvvn.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/volwtf.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/ngoai-that/xbzjbg.jpg',
            label: 'test'
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
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/4klu1h.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/5qu4tv.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/dba91d.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/hch0fw.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/iivb3y.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/jmvizg.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/k52iou.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/ncxkdb.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/oju7nh.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/rb5nob.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/rskcnv.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/sk21fn.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/t75a8v.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/noi-that/yyrybn.jpg',
            label: 'test'
          }
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/innova/tinh-nang/6u31q7.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/12fowg.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/19pt9w.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/668t74.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/atom1d.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/der211.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/h12wxm.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/ipgqqn.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/j3ygy7.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/jtt2z6.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/ou8s54.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/r8ndie.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/ti09at.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/to64xy.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/v3cr3w.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/tinh-nang/y1qmgq.jpg",
          title: "Title",
          message: "Message"
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
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/0v2iyp.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/5yzvpy.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/atlntt.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/hqkgyo.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/iapgvl.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/xhp0ip.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/ngoai-that/xz2bpn.jpg',
            label: 'test'
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
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/2vrw2k.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/e5cwnb.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/ha0s1k.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/k3wvrz.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/kehlpr.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/nuzojs.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/ohgmiq.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/pyas5f.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/rskm4h.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/xiguel.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/xtvnwa.jpg',
            label: 'test'
          },
          {
            image: '/assets/img/toyota/innova/Venturer/noi-that/yzc0jr.jpg',
            label: 'test'
          }
         
        ]
      },
      tinhNang:[
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/1dohew.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/1piwx.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/5hpw1q.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/cxcpkr.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/di0yk1.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/dtwgyd.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/hn41nz.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/iadqoy.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/kjpfxt.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/l2pd3e.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/sbs21q.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/sqwf1z.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/via2nh.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/xjhuym.jpg",
          title: "Title",
          message: "Message"
        },
        {
          image: "/assets/img/toyota/innova/Venturer/tinh-nang/xx5j0y.jpg",
          title: "Title",
          message: "Message"
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
