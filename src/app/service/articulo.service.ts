import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { VentaArticulo } from '../interfaces/ventaArticulo';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

const HttpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  url: string = 'https://localhost:44392/api/Articulos';
  urlVenta: string = 'https://localhost:44392/api/Venta';
  public listaArticulo : any[]; 

  getClient(){
    return this._http.get(this.url);
  }
  getTopDiez(){
    return this._http.get(this.urlVenta);
  }
  ELEMENT_DATA: any;


  constructor( private _http: HttpClient) { }

  getArticuloSericio(){
    return this. ELEMENT_DATA.slice();      
  }

  eliminarUsuario(cod_barras: string){
     let cdBarras = "/"+cod_barras;
     this._http.delete(this.url+cdBarras).subscribe(data=>{
       console.log(data);
       if(data){
        window.location.reload()
       }
     })
     
  }
  agregarArticulo(articulo: Object){
    this._http.post(this.url,articulo).subscribe(data =>{
      console.log(data);
    })
  }
}
