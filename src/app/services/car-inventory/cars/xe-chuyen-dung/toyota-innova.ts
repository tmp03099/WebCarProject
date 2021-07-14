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
      ]
    },
    {
      brand: 'Toyota Innova G 2.0AT',
      price: 865000000,
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
      brand: 'Toyota Innova Venturer',
      price: 879000000,
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
      ]
    },
    {
      brand: 'Toyota Innova V 2.0AT',
      price: 989000000,
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

    }
  ]
}
