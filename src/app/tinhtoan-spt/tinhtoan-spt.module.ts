import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TinhtoanSPTPageRoutingModule } from './tinhtoan-spt-routing.module';

import { TinhtoanSPTPage } from './tinhtoan-spt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TinhtoanSPTPageRoutingModule
  ],
  declarations: [TinhtoanSPTPage]
})
export class TinhtoanSPTPageModule {}
