import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ILoginEmployee } from '../../../core/model/interface/common.model';
import { GLOBAL_CONSTANT } from '../../../core/constant/global.constant';

@Component({
  imports: [RouterOutlet],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {

  loggedUser: ILoginEmployee | null = null;
  router = inject(Router)

  constructor(){
    const loginUserData = localStorage.getItem(GLOBAL_CONSTANT.LOCAL_LOGIN_KEY)

    if(loginUserData != null){
        this.loggedUser = JSON.parse(loginUserData) as ILoginEmployee
    }
  }

onLogout(){
  debugger
    localStorage.removeItem(GLOBAL_CONSTANT.LOCAL_LOGIN_KEY);
    this.loggedUser = null;
    this.router.navigateByUrl('/login')
  }

}
