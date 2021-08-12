import { Injectable, OnInit } from "@angular/core";
import { CarTypeEnum } from "./car-type.enum";
import {
  ToyotaAvanza,
  ToyotaCamry,
  ToyotaCorollaAltis,
  ToyotaCorollaCross,
  ToyotaFortuner,
  ToyotaHilux,
  ToyotaInnova,
  ToyotaLandCruiser,
  ToyotaLandCruiserPrado,
  ToyotaRush,
  ToyotaVios,
  ToyotaWigo,
  ToyotaYaris
} from "./cars";
import { CarInfoInterface, CarModelInfoInterface } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class CarInventoryService implements OnInit {
  private readonly carInventory: CarInfoInterface[] = [];

  constructor() {
    // Xe Du Lich
    this.carInventory.push(new ToyotaVios());
    this.carInventory.push(new ToyotaCamry());
    this.carInventory.push(new ToyotaCorollaAltis());
    this.carInventory.push(new ToyotaWigo());
    this.carInventory.push(new ToyotaYaris())

    // Xe SUV
    this.carInventory.push(new ToyotaRush());
    this.carInventory.push(new ToyotaFortuner());
    this.carInventory.push(new ToyotaLandCruiserPrado());
    this.carInventory.push(new ToyotaLandCruiser());
    this.carInventory.push(new ToyotaCorollaCross());

    // Xe Chuyen Dung
    this.carInventory.push(new ToyotaInnova());
    this.carInventory.push(new ToyotaAvanza());

    // Xe Ban Tai
    this.carInventory.push(new ToyotaHilux());

    this.carInventory.forEach((car) => {
      const baseModel = car.models[0];
      car.models.forEach((model) => {
        model.link = this.generateLink(model.brand);

        this.carModelNormalize(model, baseModel);
      });

      car.link = car.models[0].link;
      car.lowestPrice = this.getLowestPrice(car);
    });
  }

  public ngOnInit() {}

  public getCarInventory() {
    return this.carInventory;
  }

  public getCarList(): string[] {
    const carList: string[] = [];

    this.carInventory.forEach(car => {
      carList.push(car.name);
    });

    return carList;
  }

  public getCar(name: string): CarInfoInterface | undefined{
    return this.carInventory.find(car => car.name === name);
  }

  public getCarFromUri(uri: string): CarInfoInterface | undefined {
    var selectedCar: CarInfoInterface | undefined = undefined;
    this.carInventory.forEach((car) => {
      car.models.forEach((model) => {
        if (model.link!!.endsWith(uri) && selectedCar === undefined) {
          selectedCar = car;
        }
      });
    });

    console.log(selectedCar);
    return selectedCar;
  }

  public getCarModel(name: string, carModel: string): CarModelInfoInterface | undefined {
    const selectedCar = this.getCar(name);
    if (selectedCar) {
      return selectedCar.models.find((model) => model.brand === carModel)
    } else {
      return undefined;
    }
  }

  public getCarsByType(type: CarTypeEnum): CarInfoInterface[] {
    return this.carInventory.filter((car) => car.type === type);
  }

  public getCarModels(selectedCarName: string): string[] {
    const modelList: string[] = [];

    const selectedCar = this.getCar(selectedCarName);
    if (selectedCar) {
      selectedCar.models.forEach((model) => {
        modelList.push(model.brand);
      });
    }

    return modelList;
  }

  public getCarPrice(name: string, model: string): number {
    const selectedModel = this.getCarModel(name, model);
    if (selectedModel) {
      return selectedModel.price;
    } else {
      return 0;
    }
  }

  public getLowestPrice(carInfo: CarInfoInterface): number {
    const selectedCar = this.carInventory.find((car) => car === carInfo);
    if (selectedCar != null) {
      const sortedList = selectedCar.models.sort((a, b) => a.price - b.price);
      return sortedList[0].price;
    }

    return 0;
  }

  private generateLink(name: string): string {
    const result = `xe-toyota/${name.toLowerCase().replace(/[^0-9a-z]/gi, '-')}`;
    return result;
  }

  private carModelNormalize(model: CarModelInfoInterface, baseModel: CarModelInfoInterface): CarModelInfoInterface {
    if (model.colors == null) {
      model.colors = baseModel.colors;
    }

    if (model.lingo == null) {
      model.lingo = baseModel.lingo;
    }

    if (model.seats == null) {
      model.seats = baseModel.seats;
    }

    if (model.type == null) {
      model.type = baseModel.type;
    }

    if (model.fuelType == null) {
      model.fuelType = baseModel.fuelType;
    }

    if (model.manufacture == null) {
      model.manufacture = baseModel.manufacture;
    }

    if (model.ngoaiThat == null) {
      model.ngoaiThat = baseModel.ngoaiThat;
    }

    if (model.noiThat == null) {
      model.noiThat = baseModel.noiThat;
    }

    if (model.tinhNang == null) {
      model.tinhNang = baseModel.tinhNang;
    }

    if (model.thongSo == null) {
      model.thongSo = baseModel.thongSo;
    }

    return model;
  }
}
