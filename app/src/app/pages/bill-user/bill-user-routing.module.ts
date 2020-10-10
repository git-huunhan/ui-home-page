import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillUserPage } from './bill-user.page';

const routes: Routes = [
  {
    path: '',
    component: BillUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillUserPageRoutingModule {}
