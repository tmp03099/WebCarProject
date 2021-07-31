import { CarFeatureInterface } from "./car-feature.interface";

export interface CarNgoaiThatInterface {
  features: CarFeatureInterface[];
  label?: string;
  image?: string;
  backgroundImage?: string;
  infomation?: string;
}
