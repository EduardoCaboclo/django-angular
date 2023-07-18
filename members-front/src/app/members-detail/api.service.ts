import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type':'application/json','Authorization': 'Token fd7788f09fcfa54f54167fa212893ac1ae5a72bc'});

  constructor(private http: HttpClient) { }


  getMember(id: any) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/', 
    {headers: this.httpHeaders});
  };

  updateMember(member: any) : Observable<any> {
    let body = {name: member.name, surname: member.surname, phone: member.phone};
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body, 
    {headers: this.httpHeaders});
  };

  saveNewMember(member: any) : Observable<any> {
    return this.http.post(this.baseUrl + 'members/',member, 
    {headers: this.httpHeaders});
  };

  deleteMember(id: any) : Observable<any> {
    return this.http.delete(this.baseUrl + 'members/' + id + '/', 
    {headers: this.httpHeaders});
  };


}
