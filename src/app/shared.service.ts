import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIURL = 'http://localhost:64173/api';

  constructor(private http:HttpClient) { }

  getClintList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/clientInfo');
  }

  addClient(val:any) {
    return this.http.post(this.APIURL+'/clientInfo', val);
  }

  UpdateClient(val:any) {
    return this.http.put(this.APIURL+'/clientInfo', val);
  }

  
  DeleteClient(val:any) {
    return this.http.delete(this.APIURL+'/clientInfo/' +val);
  }
}
