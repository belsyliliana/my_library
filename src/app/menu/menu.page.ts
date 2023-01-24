import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  authors: any;

  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeresSlides: true,
    speed: 400
  }
  constructor(private LibraryService: LibraryService) { }

 

    ionViewDidEnter(){
      this.LibraryService.getAuthors().then( res => {
        this.authors = res.data;
        console.log(this.authors)
      })
    }

  ngOnInit() {
  }

}
