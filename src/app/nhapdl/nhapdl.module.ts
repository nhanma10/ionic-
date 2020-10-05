import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhapdlPageRoutingModule } from './nhapdl-routing.module';

import { NhapdlPage } from './nhapdl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhapdlPageRoutingModule
  ],
  declarations: [NhapdlPage]
})
export class NhapdlPageModule {}
