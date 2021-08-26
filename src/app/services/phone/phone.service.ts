import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class PhoneService {
  public readonly phoneLink = 'tel:0987-777-529'

  constructor(){}
}
