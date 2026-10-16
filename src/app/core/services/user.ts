import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { LoginModel } from '../model/class/loginModel';
import { GLOBAL_CONSTANT } from '../constant/global.constant';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { API_RESPONSE } from '../model/interface/common.model';

@Service()
export class User {

   http = inject(HttpClient);
   api_url :string =  environment.API_URL;
   
   LoginUser(obj:LoginModel): Observable<API_RESPONSE>{
      return this.http.post<API_RESPONSE>(this.api_url + GLOBAL_CONSTANT.API_METHODS.LOGIN, obj);
   }
}
