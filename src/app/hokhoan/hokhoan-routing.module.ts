import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HokhoanPage } from './hokhoan.page';

const routes: Routes = [
  {
    path: '',
    component: HokhoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HokhoanPageRoutingModule {}
