import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { API_RESPONSE } from '../model/interface/common.model';
import { Observable } from 'rxjs/internal/Observable';

@Service()
export class ApiService {

    http = inject(HttpClient)

    get(url: string): Observable<API_RESPONSE> {
      return this.http.get<API_RESPONSE>(url)  
    }

    post<T>( url :string , obj:any):Observable<API_RESPONSE<T>>{
        return this.http.post<API_RESPONSE<T>>(url,obj)
    }

    put<T>(url : string,obj: any):Observable<API_RESPONSE<T>>{
        return this.http.put<API_RESPONSE<T>>(url,obj)
    }
    
    delete<T>(url:string):Observable<API_RESPONSE<T>>{
      return this.http.delete<API_RESPONSE<T>>(url)
    }

}
