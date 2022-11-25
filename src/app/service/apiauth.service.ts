import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { Usuario } from "../models/usuario";
import { Response } from "../models/response";
import { JwtHelperService } from "@auth0/angular-jwt";

const httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

const tmpUser: Usuario = { 
    user_name: "",
    token: ""
}


@Injectable({
    providedIn: 'root'
})
export class ApiauthService{

    helper = new JwtHelperService();
    
    url: string = 'https://localhost:44392/api/Login';

    private usuarioSubject = new BehaviorSubject<Usuario>(tmpUser);
    public usuario: Observable<Usuario>;

    public get usuarioData(): Usuario{
        return this.usuarioSubject.value;
    }

    constructor(private _http: HttpClient){
        var local = localStorage.getItem('usuario');

        if(local != null){
            this.usuarioSubject = new BehaviorSubject<Usuario>(JSON.parse(local))
        };

        this.usuario = this.usuarioSubject.asObservable();

    }

    login(user_name: string, password: string): Observable<Response>{
        return this._http.post<Response>(this.url,{user_name,password}, httpOption).pipe(
            map(res => {
                if (res != null) {
                    const token = res;
                    const decodeToken = this.helper.decodeToken(JSON.stringify(token));

                    tmpUser.user_name = decodeToken.nameid;
                    

                    localStorage.setItem('usuario', JSON.stringify(res));
                    
                    tmpUser.token = localStorage.getItem('usuario');
                    this.usuarioSubject.next(tmpUser);
                }
                return res;
            })
        );
    }

    logout(){
        localStorage.removeItem('usuario');
        this.usuarioSubject.next(null!); 
    }
}
