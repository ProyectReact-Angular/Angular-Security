import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { ApiauthService } from "../service/apiauth.service";
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
    
    helper = new JwtHelperService();

    constructor(private router: Router, public apiauth: ApiauthService){

    }

    

    canLoad(route: Route){
        return false;
    }

    canActivate(route: ActivatedRouteSnapshot){
        //const decodeToken = this.helper.decodeToken(JSON.stringify(localStorage.getItem('usuario')));

        if (localStorage.getItem('usuario') != null) {
            
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }

}