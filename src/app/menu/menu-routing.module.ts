import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: "home",
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'authors',
        loadChildren: () => import('../authors/authors.module').then( m => m.AuthorsPageModule)
      },
      {
        path: 'books',
        loadChildren: () => import('../books/books.module').then( m => m.BooksPageModule)
      },
      {
        path: 'favorite-books',
        loadChildren: () => import('../favorite-books/favorite-books.module').then( m => m.FavoriteBooksPageModule)
      },

      {
        path: 'authors',
        loadChildren: () => import('../authors/authors.module').then( m => m.AuthorsPageModule)
      },

      {
        path: 'mejortop',
        loadChildren: () => import('../mejortop/mejortop.module').then( m => m.MejortopPageModule)
      },

      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then( m => m.CalendarPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
