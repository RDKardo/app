import { Component, OnInit } from '@angular/core';
import{ApiclienteService} from '../services/apicliente.service';
import { Response } from '../models/response';
import {DialogClienteComponent} from './dialog/dialogcliente.component';
import {MatDialog} from '@angular/material/dialog';
import { Cliente } from '../models/cliente';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
  
})
export class ClienteComponent implements OnInit {
  public lst: any[];
  public columnas: string[] = ['idCliente','nombre','actions'];
  readonly width: string = "300px";
  constructor(
    private  apiCliente: ApiclienteService ,
    public dialog : MatDialog
    ) 

    { 
     
  }

    ngOnInit(): void {
      this.getClientes()
      this.openAdd()
    }

  getClientes(){
    this.apiCliente.getClientes().subscribe(response   => {
      this.lst = response.data;
    });
  }

  openAdd(){
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width : this.width
    });
    dialogRef.afterClosed().subscribe(result  => {
      this.getClientes();
    })
  }


  openEdit(cliente:Cliente){
    const dialogRef = this.dialog.open(DialogClienteComponent,{
      width : this.width,
      data:cliente
    });
    dialogRef.afterClosed().subscribe(result  => {
      this.getClientes();
    })

  }

}
