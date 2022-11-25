import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { VentaArticulo } from 'src/app/interfaces/ventaArticulo';
import { ArticuloService } from 'src/app/service/articulo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrls: ['./agregar-articulo.component.css'],
})
export class AgregarArticuloComponent implements OnInit {

  formArticulos: FormGroup;

  constructor(private fb: FormBuilder, private _articuloService: ArticuloService,
    private router: Router,
    private _snackBar: MatSnackBar) {
    this.formArticulos = this.fb.group({
      descripcion: ['', Validators.required],
      cantidad_um: ['', Validators.required],
      precio_compra: ['', Validators.required],
      precio_venta: ['', Validators.required],
      utilidad: ['', Validators.required],
      stock: ['', Validators.required],
      iva: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario() {

    console.log(this.formArticulos);
    const Articulo: newArticulo = {
      descripcion: this.formArticulos.value.descripcion,
      cantidad_um: this.formArticulos.value.cantidad_um,
      precio_compra: this.formArticulos.value.precio_compra,
      utilidad: this.formArticulos.value.utilidad,
      precio_venta: this.formArticulos.value.precio_venta,
      stock: this.formArticulos.value.stock,
      iva: this.formArticulos.value.iva,
    }



    this._articuloService.agregarArticulo(Articulo);
    this.router.navigate(['/dashboard']);

    this._snackBar.open('El articulo fue creado con exito', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }
}
export interface newArticulo{
  descripcion: string,
  precio_compra: string,
  precio_venta: string,
  stock: string,
  iva: string,
  cantidad_um: string,
  utilidad: string
}