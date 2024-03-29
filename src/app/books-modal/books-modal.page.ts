import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any;
  books: any;
  author_id: any;

  constructor( 
    private libraryService: LibraryService,
    private navParams: NavParams,
    private modalController: ModalController
    ) { }

  ngOnInit() {
    this.author_id = this.navParams.get("author");
    this.libraryService.getBooksAuthor(this.author_id.id).then(books => {
      this.books = books;

    })
  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
