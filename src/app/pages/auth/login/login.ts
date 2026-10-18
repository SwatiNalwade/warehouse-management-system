import { Component, inject } from '@angular/core';
import { LoginModel } from '../../../core/model/class/loginModel';
import { FormsModule } from '@angular/forms';
import { User } from '../../../core/services/user';
import { API_RESPONSE } from '../../../core/model/interface/common.model';
import { GLOBAL_CONSTANT } from '../../../core/constant/global.constant';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  loginObj : LoginModel =  new LoginModel();
 
   userService = inject(User);
   router = inject(Router)

  onLogin() {
  
     this.userService.LoginUser(this.loginObj).subscribe({
      next:(res:API_RESPONSE) =>{
        if(res.result){

          localStorage.setItem(GLOBAL_CONSTANT.LOCAL_LOGIN_KEY,JSON.stringify(res.data.employee))
          this.router.navigate(['/admin'])
        
        }else{
          alert(res.message)
        }
      },
      error:(err:any) =>{

      }
     })
  
    }
}
