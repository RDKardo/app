import {Component, Inject} from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiclienteService } from 'src/app/services/apicliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cliente } from 'src/app/models/cliente';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
    templateUrl : 'dialogcliente.component.html'
})
export class DialogClienteComponent{
    public nombre:string;
    constructor(
        public dialogRef : MatDialogRef<DialogClienteComponent>,
        public apiCliente : ApiclienteService,
        public snack : MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public cliente:Cliente
        ){ 
            if(this.cliente !== null){
                this.nombre =  cliente.nombre;
            }
        }

        close(){
            this.dialogRef.close()
        }


        editCliente(){
            const cliente : Cliente = { nombre  :this.nombre, idCliente : this.cliente.idCliente};
            this.apiCliente.edit(cliente).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snack.open('Editado con éxitazo','',{
                        duration : 2000
                    });
                }
            });
        }

        addCliente(){
            const cliente : Cliente = { nombre  :this.nombre, idCliente:0};
            this.apiCliente.add(cliente).subscribe(response =>{
                if(response.exito == 1){
                    this.dialogRef.close();
                    this.snack.open('exito la insercionpapu','',{
                        duration : 2000
                    });
                }
            });
        }



}