import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { AuthorsDetailModalPage } from '../authors-detail-modal/authors-detail-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors: any;

  constructor(private libraryService: LibraryService, private modalController: ModalController) { }

  ngOnInit() {
    this.libraryService.getAuthors().then( res => {
      this.authors = res;
      console.log(this.authors)
    })
  }

  async AutorDetailModal(author: any){
    const modal = await this.modalController.create({
      component: AuthorsDetailModalPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }

}