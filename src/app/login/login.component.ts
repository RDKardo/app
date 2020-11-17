import { R3ResolvedDependencyType } from '@angular/compiler';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { ApiauthService } from '../services/apiauth.service';

@Component({ templateUrl: 'login.component.html'})
export class LComponent implements OnInit{
    public email:string;
    password:string;
    
    constructor(public apiauth: ApiauthService,
        private router:Router
        
        ){
    }

    ngOnInit(){

    }

    login(){
        this.apiauth.login(this.email,this.password).subscribe(response => {
            if(response.exito === 1){
               this.router.navigate(['./']);     
            }
        });
    }
}