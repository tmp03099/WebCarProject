import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body-context',
  templateUrl: './body-context.component.html',
  styleUrls: ['./body-context.component.scss']
})
export class BodyContextComponent implements OnInit {

  images = [
    "assets/img/Product-website-01.jpg",
    "assets/img/TOP-BANNER-compress.jpg"
  ]

  constructor()  { }

  ngOnInit(): void {
  }
}