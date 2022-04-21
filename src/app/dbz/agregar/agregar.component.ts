import { Component, Input, Output, EventEmitter } from '@angular/core';
/* import { EventEmitter } from 'stream'; */
import { Personaje } from '../Interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
 
})
export class AgregarComponent  {



@Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  
/* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  cambiarNombre (event: any){
    console.log( event.target.value )
  }
  
    constructor(private dbzService: DbzService) {}

   agregar(){
     if (this.nuevo.nombre.trim().length === 0){
       return;
     } 
  
   
   /*  this.onNuevoPersonaje.emit( this.nuevo ) */
     this.dbzService.agregarPersonaje( this.nuevo );
   
    this.nuevo = {
      nombre: '',
      poder : 0
    }
   }
  
  }
  


