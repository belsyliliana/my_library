import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MejortopPageRoutingModule } from './mejortop-routing.module';

import { MejortopPage } from './mejortop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MejortopPageRoutingModule
  ],
  declarations: [MejortopPage]
})
export class MejortopPageModule {}
