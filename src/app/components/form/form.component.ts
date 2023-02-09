import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { interval, takeWhile } from 'rxjs';
import { RenaperService } from '../../services/renaper.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [RenaperService]
})
export class FormComponent {

  page:number = 1;
  historialList:any = [];

  //Combos
  sectoresList:any=[];
  visitaAList:any=[];

  // Inputs
  dni:string = "";
  nroTarjeta: string = "";
  sectorSelected: string="";
  visitaSelected: string="";

  personsRenaper:any = [];
  personsAVisitar:any = [];

  date:Date = new Date();
  hourIn:string = "";
  dateIn:string = "";

  //Outputs
  fullName:string = "";

  constructor(private renamperService:RenaperService, private changeDetector: ChangeDetectorRef) {}

  consultar(){

    // Validacion
    const dniRegex = new RegExp('^[0-9]{8}$');
    if(!dniRegex.test(this.dni)){
      alert('Debe ingresar un DNI valido');
      this.fullName = "";
      this.dni = "";

      return;

    }

    let personRenaper = this.personsRenaper.find((p:any) => p.dni === this.dni)
    if(personRenaper){

      this.fullName = personRenaper ? `${personRenaper.nombre} ${personRenaper.apellido}` : "";

    } else {

      alert('No se encontro una persona con el dni indicado');
      this.fullName = "";
      this.dni = "";

    }

  }

  seleccionarSector(){

    if(this.sectorSelected){
      let persons = this.personsAVisitar.filter((person:any) => person.sector === this.sectorSelected);
      this.visitaAList = persons.map((person:any) => person.nombreCompleto);
    }

  }

  ingresar(){

    // Validaciones
    let mensajeValidacion = this.validarIngreso();

    if(!mensajeValidacion) {

      let date = new Date();
      let hs = date.getHours().toString().padStart(2, '0');
      let ms = date.getMinutes().toString().padStart(2, '0');
      let ss = date.getSeconds().toString().padStart(2, '0');

      this.hourIn = `${hs}:${ms}:${ss} hs`;

      let persona = {
        id: this.historialList.length + 1,
        fecha: this.dateIn,
        hora: this.hourIn,
        nombreCompleto: this.visitaSelected,
        sector: this.sectorSelected
      }

      this.historialList.push(persona);

    } else {

      alert(mensajeValidacion);

    }

  }

  validarIngreso(){

    const nrosRegex = new RegExp('^[0-9]+$');

    let mensaje = "";
    if(!nrosRegex.test(this.nroTarjeta))
      mensaje += "El número de tarjeta solo debe incluir números" + "\n";

    if(!this.sectorSelected)
      mensaje += "Debe indicar un Sector" + "\n";;

    if(!this.visitaSelected)
      mensaje += "Debe indicar un usuario para visitar";

    return mensaje;

  }

  eliminar(index:number) {

    this.historialList.splice(index, 1);

    this.changeDetector.detectChanges();
  }

  ngOnInit():void {

    this.dateIn = this.date.toLocaleDateString('es-AR');

    this.personsRenaper = this.renamperService.getData();
    this.historialList = [
      {
        id:1,
        fecha:"1/01/2023",
        hora:"00:20:30 hs",
        nombreCompleto:"Daniel de Almeida",
        sector:"RRHH"
      },
      {
        id:2,
        fecha:"2/01/2023",
        hora:"01:21:31 hs",
        nombreCompleto:"Dario Riva",
        sector:"QA"
      },
      {
        id:3,
        fecha:"3/01/2023",
        hora:"02:22:32 hs",
        nombreCompleto:"Diego Pellegrini",
        sector:"COMERCIAL"
      },
      {
        id:4,
        fecha:"4/01/2023",
        hora:"03:23:33 hs",
        nombreCompleto:"Federico Musso",
        sector:"RRHH"
      },
      {
        id:5,
        fecha:"5/01/2023",
        hora:"04:24:34 hs",
        nombreCompleto:"Laura Rodriguez",
        sector:"QA"
      },
      {
        id:6,
        fecha:"06/01/2023",
        hora:"05:25:35 hs",
        nombreCompleto:"Lautaro Ariel Basanta",
        sector:"COMERCIAL"
      }
    ];

    // Combos
    this.sectoresList = ["RRHH", "QA", "COMERCIAL"];
    this.personsAVisitar = [
      {
         nombreCompleto:"Daniel de Almeida",
         sector:"RRHH"
      },
      {
         nombreCompleto:"Dario Riva",
         sector:"QA"
      },
      {
         nombreCompleto:"Diego Pellegrini",
         sector:"COMERCIAL"
      },
      {
         nombreCompleto:"Federico Musso",
         sector:"RRHH"
      },
      {
         nombreCompleto:"Laura Rodriguez",
         sector:"QA"
      },
      {
         nombreCompleto:"Lautaro Ariel Basanta",
         sector:"COMERCIAL"
      },
      {
         nombreCompleto:"Manuel Castello",
         sector:"RRHH"
      },
      {
         nombreCompleto:"Paula Barrios",
         sector:"QA"
      },
      {
         nombreCompleto:"Rocio Diaz",
         sector:"COMERCIAL"
      },
      {
         nombreCompleto:"Sebastian Parasis",
         sector:"RRHH"
      },
      {
         nombreCompleto:"Walter Marcote",
         sector:"QA"
      },
      {
         nombreCompleto:"Guillermo Balcarcel",
         sector:"COMERCIAL"
      },
      {
         nombreCompleto:"Esteban Gawron",
         sector:"RRHH"
      },
      {
         nombreCompleto:"Enzo Peddini",
         sector:"QA"
      },
      {
         nombreCompleto:"Andrea Russo",
         sector:"COMERCIAL"
      },
      {
         nombreCompleto:"Adrian Zarate",
         sector:"RRHH"
      },
      {
         nombreCompleto:"Melisa Yune",
         sector:"QA"
      },
      {
         nombreCompleto:"Nicolas Russmann",
         sector:"COMERCIAL"
      },
      {
         nombreCompleto:"Galo Trillo",
         sector:"RRHH"
      },
      {
         nombreCompleto:"Diego Pellegrini",
         sector:"QA"
      }
    ];

  }

}
