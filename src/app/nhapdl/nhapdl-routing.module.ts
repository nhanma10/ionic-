import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhapdlPage } from './nhapdl.page';

const routes: Routes = [
  {
    path: '',
    component: NhapdlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhapdlPageRoutingModule {}
