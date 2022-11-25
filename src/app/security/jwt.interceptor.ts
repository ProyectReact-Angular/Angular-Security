import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiauthService } from "../service/apiauth.service";


@Injectable()
export class JwtInterceptor implements HttpInterceptor{


    //tok: string = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsImp0aSI6IjYyYjM2ZTc0LTUzMmEtNDg0Mi04NTI0LTMyZjcwZDBiMzIyMyIsInN1YiI6IkRpbGxhblBvd2VyIiwibmFtZWlkIjoiRGlsbGFuUG93ZXIiLCJuYmYiOjE2NjkzMDQwNzEsImV4cCI6MTY2OTMxNDg3MSwiaWF0IjoxNjY5MzA0MDcxLCJpc3MiOiJVVFRUIiwiYXVkIjoiVVRUVCJ9.QCDHa3-PWpRaOb_pXsR0JYFtBqalcV8adbkrAkg1by38VQRhkpmeODEn-0znejNdKYPpi2Gfgpg1jLeQBVPB4wrDKLEp3vsuLbrVkAL7DFSPEqQDDNXeHmJnXgyVKX5DYziw61-TduV-vjavMauSpAfR0abdb-jGHvW8lG4ZYwq2cew-FgO8Gp_27hg5WETS_WI2V5VUTnBBVRI1zv0pFrkEo1AJVY-ZgtQwZ_02uiYklW8jI2s7lMa8GYcPbXN51fAoRuqYK5oyqG5WzXHJToUKjPY5ZusPOZcuKZzsADbuW-ZWCqR5GjmmxA87y8q-5ZYZg8u4pULEBuuMenBvKQ";

    constructor(private apiauthservice: ApiauthService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        var token = localStorage.getItem('usuario');

        if (token != null) {

            //console.log(token);

            var tokenNew = token.replace(/(")/gm,"");

            //console.log(tokenNew);


            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${ tokenNew }`
                }
            });
        }

        return next.handle(req);
    }

}