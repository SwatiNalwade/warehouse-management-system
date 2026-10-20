import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { ApiService } from './api-service';
import { GLOBAL_CONSTANT } from '../constant/global.constant';
import { API_RESPONSE } from '../model/interface/common.model';
import { Observable } from 'rxjs/internal/Observable';

@Service()
export class ClientService {

    api_url: string = environment.API_URL;

    apiService = inject(ApiService)

    getAllClients():Observable<API_RESPONSE>{
      return this.apiService.get(this.api_url + GLOBAL_CONSTANT.API_METHODS.GET_ALL_CLIENTS);
    }

    deleteClient(id:number):Observable<API_RESPONSE>{
      return this.apiService.delete(this.api_url + GLOBAL_CONSTANT.API_METHODS.DELETE_CLIENT + id);
    }

    getClientById(id:number):Observable<API_RESPONSE>{
      return this.apiService.get(this.api_url + GLOBAL_CONSTANT.API_METHODS.GET_CLIENT_BY_ID + id)

    }
}
