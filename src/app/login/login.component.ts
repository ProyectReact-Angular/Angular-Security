import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiauthService } from "../service/apiauth.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit{

    //public user_name: string;
    //public password: string;
    /*
    public loginForm = new FormGroup({
        user_name: new FormControl(''),
        password: new FormControl('')
    });*/

    public loginForm = this.formbuilder.group({
        user_name: ['', Validators.required],
        password: ['', Validators.required]
    });



    constructor(public apiauth: ApiauthService, private router: Router, private formbuilder: FormBuilder){
        /*if (this.apiauth.usuarioData) {
            this.router.navigate(['/']);
        }*/
    }

    ngOnInit(){
        
    }

    login(){

        this.apiauth.login(this.loginForm.value.user_name!,this.loginForm.value.password!).subscribe(resp => {
            if (resp != null) {
                this.router.navigate(['/']);
            }
        });
    } 
}