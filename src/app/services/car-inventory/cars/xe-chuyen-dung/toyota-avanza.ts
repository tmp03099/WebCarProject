import { CarTypeEnum } from "../../car-type.enum";
import { CarInfoInterface } from "../../interfaces";

export class ToyotaAvanza implements CarInfoInterface {
  name = 'Toyota Avanza'
  type = CarTypeEnum.XeChuyenDung
  imgSrc = 'assets/img/cars/avanza.png'
  models = [
    {
      brand: 'Toyota Avanza MT',
      price: 544000000,
      colors:[
        {
          label:'Bạc - 1E7',
          image:'/assets/img/toyota/avanza/colors/MT/Bac-1E7-MT.png',
          colorCode: '#dedfe1'
        },
        {
          label:'Vàng - T23',
          image:'/assets/img/toyota/avanza/colors/MT/Be-T23-MT.png',
          colorCode: '#cfcbc1'
        },
        {
          label:'Đen - X12',
          image:'/assets/img/toyota/avanza/colors/MT/Den-X12-MT.png',
          colorCode: 'black'
        },
        {
          label:'Trắng - W09',
          image:'/assets/img/toyota/avanza/colors/MT/Trang-W09-MT.png',
          colorCode: 'white'
        },
        {
          label:'Xám - 1G3',
          image:'/assets/img/toyota/avanza/colors/MT/Xam-1G3-AT.png',
          colorCode: '#94989b'
        },
        {
          label:'Xanh sẫm - B79',
          image:'/assets/img/toyota/avanza/colors/MT/Xanh-8X2-MT.png',
          colorCode: '#133368'
        }
      ]
    },
    {
      brand: 'Toyota Avanza AT',
      price: 612000000,
      colors:[
        {
          label:'Bạc - 1E7',
          image:'/assets/img/toyota/avanza/colors/MT/mauxe-600x249-bac.png',
          colorCode: '#dedfe1'
        },
        {
          label:'Xanh sẫm - B79',
          image:'/assets/img/toyota/avanza/colors/MT/mauxe-600x249-blue.png',
          colorCode: '#133368'
        },
        {
          label:'Vàng - T23',
          image:'/assets/img/toyota/avanza/colors/MT/mauxe-600x249-yellow.png',
          colorCode: '#cfcbc1'
        },
        {
          label:'Trắng - W09',
          image:'/assets/img/toyota/avanza/colors/MT/mauxe-600x249-white.png',
          colorCode: 'white'
        },
        {
          label:'Xám - 1G3',
          image:'/assets/img/toyota/avanza/colors/MT/mauxe-600x249-den.png',
          colorCode: '#94989b'
        },
        {
          label:'Đen - X12',
          image:'/assets/img/toyota/avanza/colors/MT/den-2.png',
          colorCode: 'black'
        }
      ]
    }
  ]
}
