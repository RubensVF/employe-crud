import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe, Message } from '../models/Models';


@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  
  url:string
  
  constructor(private http: HttpClient) { 
    this.url = "http://localhost:8080/api/employes";

  }

  findAll(): Observable<Employe[]>{
    return this.http.get<Employe[]>(this.url);
  }

  findById(id:number):Observable<Employe>{
    return this.http.get(`${this.url}/${id}`);
  }

  update(employe:Employe):Observable<Message>{
    return this.http.put(this.url,employe);
  }

  delete(id:number):Observable<Message>{
    return this.http.delete(`${this.url}/${id}`);
  }

  save(employe:Employe): Observable<Employe>{
    return this.http.post(this.url,employe);
  }

}
