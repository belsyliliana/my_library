import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpt = {
    initialSlide: 0, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400, //velocidad movimiento de los slides
  };

  slides = [
    {
      title: 'Title',
      subtitle: 'subtitile',
      img: 'url o ruta',
    },
  ];

  name: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.name = "";
  }

  comenzarApp() {
    
    //alert('hola')
    this.router.navigate(['/login']);
  }

  OnInit() {
  }
}
