import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillUserPageRoutingModule } from './bill-user-routing.module';

import { BillUserPage } from './bill-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillUserPageRoutingModule
  ],
  declarations: [BillUserPage]
})
export class BillUserPageModule {}
