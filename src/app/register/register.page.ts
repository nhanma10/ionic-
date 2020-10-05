import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  loaiCoc: number ;
    capTai: number;
   D1: number;                          // đường kính cọc ngoài đv mm
    D2: number; // đường kính trong cọc mm
    dtCocA0: number; // diện tích cọc
    soThanh: number;
    dkCap: number;
    dienTich: number;
    beTong: number;
    ungXuatKeoDut: number;
    ungXuatChayDeo: number;
    sucChiuTaiLamViecDaiHan: number;
    sucChiuTaiLamViecNganHan: number;
    sucChiuTaiThiCong: number;
    xichmace: number ; // ung suat hữu hiệu trong cọc của be tông
    // từng cấp tải A, AB, B và C tương ứng là 4 MPa; 6 MPa, 8 MPa và 10 MPa

    alpha: number; // hệ số an toàn với cọc PC=4 ,PHC=3,5
  constructor(public alertController: AlertController) {}

 /*  onConfirm() {
        if (!this.loaiCoc || !this.capTai || !this.D1|| !this.D2|| !this.dtCocA0|| !this.soThanh|| !this.dkCap || !this.dienTich
            || !this.beTong|| !this.ungXuatKeoDut|| !this.ungXuatChayDeo
            ) {
                this.alertController.create({
                    header: 'Thông báo',
                    message: 'Chưa nhập đủ thông tin, vui lòng kiểm tra lại',
                    buttons: ['OK']
                  }).then(m => {
                      m.present();
                  });
                  return;
        } */
        ////#region
         getdk2(valin: number) {
         let  valout;
         if (valin == 300)
          {
            valout = 240;
          }
           else if (valin == 350)
           {
            valout = 310;
           }
           else if (valin == 400)
           {
            valout = 335;
           }
           else if (valin == 450)
           {
            valout = 380;
           }
           else if (valin == 500)
           {
            valout = 420; ;
           }
           else if (valin == 600)
           {
            valout = 510;
           }
           else if (valin == 700)
           {
            valout = 510;
           }
           else if (valin == 900)
           {
            valout = 780;
           }
           else if (valin == 1000)
           {
            valout = 870;
           }
           else if (valin == 1100)
           {
            valout = 960;
           }
           else if  (valin == 1200)
           {
            valout = 1050;
           }
         return valout;
        }
        ////#endregionendregion
        ////#region 
 getushh(val: number){
    let valoff: number ;
    if (val == 1){
     valoff = 4;
   } else if (val == 2){
     valoff = 6;
   }else if (val == 3){
     valoff = 8;
   }else if (val == 4){
     valoff = 10;
   }
    return valoff ;
 }
 ////#endregion
         Tinhtoan() {
           this.ungXuatKeoDut = 1450;
           this.ungXuatChayDeo = 1300;
           this.D2 = this.getdk2(this.D1);
           this.dtCocA0 = (Math.pow(this.D1, 2) - Math.pow(this.D2, 2)) * Math.PI / 400;
           this.dtCocA0 = +this.dtCocA0.toFixed(2);
           if (this.loaiCoc == 60){
            this.beTong = 60;
          }else if (this.loaiCoc == 80){
            this.beTong = 80;
          }
           this.dienTich = Math.pow(this.dkCap, 2) * this.soThanh * Math.PI / 400;
           this.dienTich = +this.dienTich.toFixed(2);
           this.xichmace = this.getushh(this.capTai);
           if (this.loaiCoc == 60){
              this.sucChiuTaiLamViecDaiHan = this.dtCocA0 * (this.beTong - this.xichmace) / 4;
              }else if (this.loaiCoc == 80){
               this.sucChiuTaiLamViecDaiHan = this.dtCocA0 * (((this.beTong) / 3.5) - ((this.xichmace) / 4));
              }
           this.sucChiuTaiLamViecNganHan = this.sucChiuTaiLamViecDaiHan * 2;
          
        }
      }


