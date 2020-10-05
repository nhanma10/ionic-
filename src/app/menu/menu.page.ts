import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { LoginPage } from '../login/login.page';
import { NhapdlPage } from '../nhapdl/nhapdl.page';
import { RegisterPage } from '../register/register.page';
import { HokhoanPage } from '../hokhoan/hokhoan.page';
import { TinhtoanSPTPage } from '../tinhtoan-spt/tinhtoan-spt.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  activePath = '';

  pages = [
    {
      logo :'home',
      name: 'Home',
      path: '/menu/home'
    },
    {
      logo :'add-circle-outline',
      name: 'Nhập Dữ Liệu',
      path: '/menu/nhapdl'
    },
    { 
      logo :'construct',
      name: 'Tính Ứng Suất',
      path: '/menu/login'
    },
    { 
      logo:'calculator',
      name: 'Tính Toán Vật Liệu ',
      path: '/menu/register'
    },

    { 
      logo:'flask',
      name: 'Nhập Số Liệu Địa Chất',
      path: '/menu/hokhoan'
    },
   
    {
      logo:'logo-facebook',
      name: 'Contact',
      path: '/menu/contact'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }

  ngOnInit() {
  }

}
