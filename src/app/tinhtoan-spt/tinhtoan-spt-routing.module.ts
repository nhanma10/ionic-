import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TinhtoanSPTPage } from './tinhtoan-spt.page';

const routes: Routes = [
  {
    path: '',
    component: TinhtoanSPTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TinhtoanSPTPageRoutingModule {}
