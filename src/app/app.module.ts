import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AgregarArticuloComponent } from './dashboard/agregar-articulo/agregar-articulo.component';
import {MatToolbarModule} from '@angular/material/toolbar';   
import {MatGridListModule} from '@angular/material/grid-list'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './security/jwt.interceptor';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
                

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AgregarArticuloComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatGridListModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
