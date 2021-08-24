import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class PhoneService {
  private readonly phoneLink = 'tel:0977-777-529'

  constructor(){}
}
