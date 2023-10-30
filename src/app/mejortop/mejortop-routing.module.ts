import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MejortopPage } from './mejortop.page';

const routes: Routes = [
  {
    path: '',
    component: MejortopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MejortopPageRoutingModule {}
