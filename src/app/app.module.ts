import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatDialogModule }  from '@angular/material/dialog';
import { MatButtonModule }  from '@angular/material/button';
import { MatInputModule }  from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component'
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule,MatSnackBar } from '@angular/material/snack-bar';
import { DialogClienteComponent} from './cliente/dialog/dialogcliente.component'
import {FormsModule} from '@angular/forms'
import { LComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    DialogClienteComponent,
    LComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
