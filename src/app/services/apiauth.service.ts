import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response} from '../models/response';


const httpOption = {
    headers : new HttpHeaders({
      'Contend-Type': 'application/json'
    })
  };

@Injectable({
    providedIn: 'root'
})
export class ApiauthService{
    url:string = 'https://localhost:44368/api/User/login';

    constructor(private http : HttpClient){

    }
    
    login(email:string,password:string):Observable<Response>{
        return this.http.post<Response>(this.url,{email,password},httpOption)
    }
}