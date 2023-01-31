import { Component } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { LibraryService } from '../services/library.service';
import { BooksModalPage } from '../books-modal/books-modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authors: any;
  booksOff: any;

  slideOps = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400
  }
  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private menu: MenuController,
    private storage: Storage
    ) {}

  ionViewDidEnter(){

    this.libraryService.getAuthors().then( authors => {
      this.authors = authors;
    })

    this.booksOff = this.libraryService.getBooksOffline();
  }

  async showBooks(author:any) {
    const modal = await this.modalController.create({
      component: BooksModalPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }

  goToAuthors(){
    this.navCtrl.navigateForward("/menu/authors");
    this.menu.close();
  }

  goToBooks(){
    this.navCtrl.navigateForward("/menu/books");
    this.menu.close();
  }

  goToMyFavorites(){
    this.navCtrl.navigateForward("/menu/favorite-books");
    this.menu.close();
  }
  
  TopMyFavorites(){
    this.navCtrl.navigateForward("/menu/mejortop");
    this.menu.close();
  }

  logout(){
    this.storage.remove("user_id");
    this.storage.set("isUserLoggedIn", false)
    this.navCtrl.navigateRoot("/login");
    
  }

}
