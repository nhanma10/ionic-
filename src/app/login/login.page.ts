import { Component, OnInit } from '@angular/core';
import { AlertController, NumericValueAccessor, NavController, ModalController, NavParams, IonicModule } from '@ionic/angular';
import { database } from 'firebase';
import { NhapdlPage } from '../nhapdl/nhapdl.page';
import { DatabaseService } from '../provider/database.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  public shareData:string = '';
  constructor(private databaseService:DatabaseService){
    console.log(this.databaseService.shareData)
    this.shareData = this.databaseService.shareData;
  }
   
}           
 