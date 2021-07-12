import { CarTypeEnum } from "../car-type.enum";
import { CarModelInfoInterface } from "./car-model-info.interface";

export interface CarInfoInterface {
  name: string;
  link?: string;
  imgSrc?: string;
  banner?: string;
  type: CarTypeEnum;
  models: CarModelInfoInterface[];
  lowestPrice?: number;
}
