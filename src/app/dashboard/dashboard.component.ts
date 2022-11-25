import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
//import { ActivatedRoute } from '@angular/router';
import { VentaArticulo } from 'src/app/interfaces/ventaArticulo';
import { __param } from 'tslib';
import { ArticuloService } from '../service/articulo.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public chart: any;
  public listaArticulo: any;
  public codigos: any[];
  public topVentas: VentasTop[];

  displayedColumns: string[] = ['CD Barras', 'Descripcion', 'Precio Compra', 'Precio Venta', 'Stock', 'Fecha Registro', 'Acciones'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _articuloService: ArticuloService, private router: Router) { }

  ngOnInit(): void {
    this.createChart();
    this.getArticulo();
  }
  getArticulo() {
    this._articuloService.getClient().subscribe((item: any) => {
      this.listaArticulo = new MatTableDataSource(item);
      this.listaArticulo.paginator = this.paginator;
    });
  }
  //devolvercodeBarras() {}

  createChart() {
    this._articuloService.getTopDiez().subscribe((item: any) => {
      this.topVentas = item;
      const barras = this.topVentas.map(function (venta) {
        return venta.cod_barras
      });
      const amount = this.topVentas.map(function(venta){
        return venta.cantidad
      })
      this.chart = new Chart("MyChart", {
        type: 'bar', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: barras,
          datasets: [
            {
              label: "Cantidad",
              data: amount,
              backgroundColor: 'red'
            }
          ]
        },
        options: {
          aspectRatio: 2.5
        }
  
      });


    });

    
  }

  eliminarArticulo(cod_barras: string) {
    console.log(cod_barras);
    this._articuloService.eliminarUsuario(cod_barras);
  }

  agregar() {
    this.router.navigate(['/crear-Articulo']);
  }

}
export interface VentasTop {
  descripcion: string,
  id_venta: string,
  cod_barras: string,
  cantidad: string,
  Total: string
}