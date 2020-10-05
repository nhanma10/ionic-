import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DiachatService } from '../diachat.service';
import { datadiachat } from './datadiachat';

@Component({
  selector: 'app-hokhoan',
  templateUrl: './hokhoan.page.html',
  styleUrls: ['./hokhoan.page.scss'],
})

export class HokhoanPage  {
   solop: number;
 tendat: string ;
 chieuday: number;
 gamma: number;
 loaidat: string ;
 indexspt: number;

  taodata: datadiachat[] = [];
nhapsolieu() {
  this.taodata.push({
tendat : this.tendat,
chieuday: this.chieuday,
gamma: this.gamma,
loaidat: this.loaidat,
indexspt: this.indexspt

  })


}
}
