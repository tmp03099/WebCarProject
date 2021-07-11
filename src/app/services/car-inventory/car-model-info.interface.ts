import { CarColorInterface } from "./car-color.interface";

export interface CarModelInfoInterface {
  brand: string;
  price: number;
  colors?: CarColorInterface[];

  link?: string;
  seats?: number;
  type?: string;
  fuelType?: string;
  manufacture?: string;
  otherInfo?: string[];
}
