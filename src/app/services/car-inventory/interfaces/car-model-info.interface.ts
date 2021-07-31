import { CarColorInterface } from "./car-color.interface";
import { CarNgoaiThatInterface } from "./car-ngoai-that.interface";
import { ThongSoInterface } from "./thong-so.interface";
import { TinhNangInterface } from "./tinh-nang.interface";

export interface CarModelInfoInterface {
  brand: string;
  price: number;
  library?: string[];
  colors?: CarColorInterface[];

  link?: string;
  seats?: number;
  type?: string;
  fuelType?: string;
  manufacture?: string;
  otherInfo?: string[];
  lingo?: string;
  promotion?: string[];

  ngoaiThat?: CarNgoaiThatInterface;
  noiThat?: CarNgoaiThatInterface;
  tinhNang?: TinhNangInterface[];
  thongSo?: ThongSoInterface[];
}
