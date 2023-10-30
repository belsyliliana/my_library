import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-mejortop',
  templateUrl: './mejortop.page.html',
  styleUrls: ['./mejortop.page.scss'],
})
export class MejortopPage implements OnInit {

  tops: any;

  constructor(  
    private libraryService: LibraryService,
    private modalController: ModalController) { }

  ngOnInit() {

    this.libraryService.getTopTen().then(tops => {
      this.tops = tops;
    })
  }



}
