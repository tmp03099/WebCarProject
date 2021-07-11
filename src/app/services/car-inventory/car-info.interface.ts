import { CarColorInterface } from "./car-color.interface";
import { CarModelInfoInterface } from "./car-model-info.interface";
import { CarTypeEnum } from "./car-type.enum";

export interface CarInfoInterface {
  name: string;
  link?: string;
  imgSrc?: string;
  banner?: string;
  type: CarTypeEnum;
  models: CarModelInfoInterface[];
  lowestPrice?: number;
}
