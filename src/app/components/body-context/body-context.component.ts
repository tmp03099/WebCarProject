import { Component, OnInit } from '@angular/core';
import { ModelCarInterface } from 'src/app/interfaces';


@Component({
  selector: 'app-body-context',
  templateUrl: './body-context.component.html',
  styleUrls: ['./body-context.component.scss']
})
export class BodyContextComponent implements OnInit {

  images = [
    "assets/img/banners/Product-website-01.jpg",
    "assets/img/banners/TOP-BANNER-compress.jpg"
  ]

  modelCars: ModelCarInterface[] = [
    {
      imageSrc: 'assets/img/cars/corolla altis.png', 
      name: 'TOYOTA VIOS', 
      price: '478.000.000'
    },
    {
      imageSrc: 'assets/img/cars/camry.png', 
      name: 'TOYOTA CAMRY', 
      price: '1.029.000.000'
    },
    {
      imageSrc: 'assets/img/cars/vios.png', 
      name: 'TOYOTA COROLLA ALTIS', 
      price: '733.000.000'
    },
    {
      imageSrc: 'assets/img/cars/wigo.png', 
      name: 'TOYOTA WIGO', 
      price: '352.000.000'
    },
    {
      imageSrc: 'assets/img/cars/yaris.png', 
      name: 'TOYOTA YARIS', 
      price: '668.000.000'
    },
    {
      imageSrc: 'assets/img/cars/WHILE-070-2.png', 
      name: 'XE US', 
      price: ''
    },
  ]

  constructor()  { }

  ngOnInit(): void {
  }
}