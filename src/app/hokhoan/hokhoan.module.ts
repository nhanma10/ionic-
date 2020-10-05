import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HokhoanPageRoutingModule } from './hokhoan-routing.module';
import { HokhoanPage } from './hokhoan.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BrowserModule } from '@angular/platform-browser';
import { NhapdlPage } from '../nhapdl/nhapdl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   NgxDatatableModule,
    HokhoanPageRoutingModule

  ],
  declarations: [HokhoanPage]
})
export class HokhoanPageModule {}
