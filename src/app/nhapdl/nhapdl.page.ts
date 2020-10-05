import { Component, OnInit } from '@angular/core';
import { AlertController, NumericValueAccessor, NavController } from '@ionic/angular';
import { TinhtoanSPTPage } from '../tinhtoan-spt/tinhtoan-spt.page';
import { LoginPage } from '../login/login.page';
import { DatabaseService } from '../provider/database.service';

@Component({
  selector: 'app-nhapdl',
  templateUrl: './nhapdl.page.html',
  styleUrls: ['./nhapdl.page.scss'],
})
export class  NhapdlPage  {

   loaiCoc: number ;
   capTai: number;
    D1: number;               // đường kính cọc ngoài đv mm
  D2: number; // đường kính trong cọc mm
  dienTich : number ;
  dtCocA0:number;
  soThanh: number;
   dkCap: number;
   Ec: number; // mo dun đàn hồi bê tông
  EcpMax: number ; // mô đun đàn hồi sau khi căng
  xichmacpt: number; // ứng suất nén ban đầu của bê tông
  ungXuatKeoDut: number;
  ungXuatChayDeo: number;
  xichmapi: number ; // ứng suất căng ban đầu ;
psi = 2 ; // hệ số từ biến
epxilon = 0.00015;
k = 0.025 ; // hệ số chùng ứng suất
n: number; // ty so giua Ep/Ec
nphay: number; // ty so modul dan hoi thep / modun dan hoi betong thoi diem truyen us
deltap: number; // tổn thất do từ biến co ngót
deltar: number ; // tổn thất do chùng ứng suất
xichmape: number ; // ứng suất hữu hiệu còn lại trong cốt thép
xichmace: number; // ứng suất hữu hiệu còn lại trong bê tông
Ep = 200;
xichmapt: number ; // ứng suất căng tính toán của thép

  constructor(public alertController: AlertController,private databaseService:DatabaseService) {}
         getdk2(valin: number) {
         let  valout;
         if (valin == 300) {
            valout = 240;
          } else if (valin == 350) {
            valout = 310;
           } else if (valin == 400) {
            valout = 335;
           } else if (valin == 450) {
            valout = 380;
           } else if (valin == 500) {
            valout = 420;
           } else if (valin == 600) {
            valout = 510;
           } else if (valin == 700) {
            valout = 510;
           } else if (valin == 900) {
            valout = 780;
           } else if (valin == 1000) {
            valout = 870;
           } else if (valin == 1100) {
            valout = 960;
           } else if  (valin == 1200) {
            valout = 1050;
           }
         return valout;
        }
        ////#endregionendregion
        //#region

        getsteel(vali: number) {
          let output ;
          if (vali == 9.3) {
            output = 1410;
          } else if (vali == 10.8) {
output = 1410;
          } else if (vali == 12.4) {
output = 1410;
          } else if (vali == 15.2) {
output = 1410;
          } else if (vali == 18) {
output = 1450;
          } else if (vali == 9.5) {
output = 1525;
          } else if (vali == 11.1) {
output = 1525;
          } else if (vali == 12.7) {
output = 1525;
          }
          return output;
        }
   //#endregion
   //#region
   getsteel2(vali: number) {
    let output ;
    if (vali == 9.3) {
      output = 1720;
    } else if (vali == 10.8) {
output = 1720;
    } else if (vali == 12.4) {
output = 1720;
    } else if (vali == 15.2) {
output = 1720;
    } else if (vali == 18) {
output = 1700;
    } else if (vali == 9.5) {
output = 1860;
    } else if (vali == 11.1) {
output = 1860;
    } else if (vali == 12.7) {
output = 1860;
    }
    return output;
  }
  //#endregion
         nhapdl() {
           this.D2 = this.getdk2(this.D1);
           this.ungXuatChayDeo = this.getsteel(this.dkCap);
           this.ungXuatKeoDut = this.getsteel2(this.dkCap);      
           if ((this.ungXuatChayDeo) * 0.8 > (this.ungXuatKeoDut * 0.7)) {
               this.xichmapi = this.ungXuatChayDeo * 0.8;
               } else if ((this.ungXuatChayDeo) * 0.8 < (this.ungXuatKeoDut * 0.7)) {
              this.xichmapi = (this.ungXuatKeoDut) * 0.7;
           }
           this.EcpMax = (0.75 * this.Ec  );
           this.nphay = (this.Ep / this.EcpMax);
           this.xichmapt = ((1 - (this.k / 2)) * this.xichmapi) / (1 + (this.nphay * (this.dienTich) / (this.dtCocA0 - this.dienTich)));

           this.xichmacpt = ((this.xichmapt * this.dienTich) / (this.dtCocA0 - this.dienTich)).toFixed(2);
           this.n = this.Ep / (this.Ec * 1000);
           // tslint:disable-next-line: max-line-length
           this.deltap = ((this.n * 2 * this.xichmacpt) + (this.Ep * 0.00015)) / (1 + ((this.n * this.xichmacpt) / (this.xichmapt)) * (1 + this.psi / 2));
           // this.deltap = this.deltap.toFixed(2);
           this.deltar = this.k * 0.5 * this.xichmapt;
           // this.deltar = this.deltar.toFixed(2);
           this.xichmape = this.xichmapt - (this.deltap + this.deltar);
           this.xichmace = (this.xichmape * this.dienTich) / (this.dtCocA0 - this.dienTich);
           this.xichmace = this.xichmace.toFixed(2);
           this.xichmape = this.xichmape.toFixed(2);
           this.deltap = this.deltap.toFixed(2);
           this.deltar = this.deltar.toFixed(2);
           this.EcpMax = (0.75 * this.Ec  ).toFixed(2);
           this.xichmapt = this.xichmapt.toFixed(2);
           this.databaseService.shareData = this.xichmapt;
          } 
           chuyendl(){

           }
          }

    
  
