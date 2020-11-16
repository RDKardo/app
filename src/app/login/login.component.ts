import { Component, OnInit } from "@angular/core";
import { ApiauthService } from '../services/apiauth.service';

@Component({ templateUrl: 'login.component.html'})
export class LComponent implements OnInit{
    public email:string;
    password:string;
    
    constructor(public apiauth: ApiauthService){

    }

    ngOnInit(){

    }

    login(){
        this.apiauth.login(this.email,this.password).subscribe(response => {
            console.log(response);
        })
    }
}