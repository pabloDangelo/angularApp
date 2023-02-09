import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenaperService {

  data = [
    {
       "apellido":"de Almeida",
       nombre:"Daniel",
       "fechaNacimiento":"1/01/1980",
       "dni":"0222333"
    },
    {
       "apellido":"Riva",
       nombre:"Dario",
       "fechaNacimiento":"2/01/1980",
       "dni":"1222333"
    },
    {
       "apellido":"Pellegrini",
       nombre:"Diego",
       "fechaNacimiento":"3/01/1980",
       "dni":"2222333"
    },
    {
       "apellido":"Musso",
       nombre:"Federico",
       "fechaNacimiento":"4/01/1980",
       "dni":"3222333"
    },
    {
       "apellido":"Rodriguez",
       nombre:"Laura",
       "fechaNacimiento":"5/01/1980",
       "dni":"4222333"
    },
    {
       "apellido":"Basanta",
       nombre:"Lautaro Ariel",
       "fechaNacimiento":"6/01/1980",
       "dni":"5222333"
    },
    {
       "apellido":"Castello",
       nombre:"Manuel",
       "fechaNacimiento":"7/01/1980",
       "dni":"6222333"
    },
    {
       "apellido":"Barrios",
       nombre:"Paula",
       "fechaNacimiento":"8/01/1980",
       "dni":"7222333"
    },
    {
       "apellido":"Diaz",
       nombre:"Rocio",
       "fechaNacimiento":"9/01/1980",
       "dni":"8222333"
    },
    {
       "apellido":"Parasis",
       nombre:"Sebastian",
       "fechaNacimiento":"10/01/1980",
       "dni":"9222333"
    },
    {
       "apellido":"Marcote",
       nombre:"Walter",
       "fechaNacimiento":"11/01/1980",
       "dni":"10222333"
    },
    {
       "apellido":"Balcarcel",
       nombre:"Guillermo",
       "fechaNacimiento":"12/01/1980",
       "dni":"11222333"
    },
    {
       "apellido":"Gawron",
       nombre:"Esteban",
       "fechaNacimiento":"13/01/1980",
       "dni":"12222333"
    },
    {
       "apellido":"Peddini",
       nombre:"Enzo",
       "fechaNacimiento":"14/01/1980",
       "dni":"13222333"
    },
    {
       "apellido":"Russo",
       nombre:"Andrea",
       "fechaNacimiento":"15/01/1980",
       "dni":"14222333"
    },
    {
       "apellido":"Zarate",
       nombre:"Adrian",
       "fechaNacimiento":"16/01/1980",
       "dni":"15222333"
    },
    {
       "apellido":"Yune",
       nombre:"Melisa",
       "fechaNacimiento":"17/01/1980",
       "dni":"16222333"
    },
    {
       "apellido":"Russmann",
       nombre:"Nicolas",
       "fechaNacimiento":"18/01/1980",
       "dni":"17222333"
    },
    {
       "apellido":"Trillo",
       nombre:"Galo",
       "fechaNacimiento":"19/01/1980",
       "dni":"18222333"
    },
    {
       "apellido":"Pellegrini",
       nombre:"Diego",
       "fechaNacimiento":"20/01/1980",
       "dni":"19222333"
    }
  ];


  constructor() {

  }

  getData() {

    // let resultData: any = [];

    // fetch("angularApp\src\app\services\data.json")
    //   .then((response)=> {
    //     return response.text();
    //   })
    //   .then((data)=> {
    //     resultData = JSON.parse(data);
    //   })
    //   .catch((error)=> {
    //     console.log('Ocurrio un error al obtener los datos:', error);
    //   });

    return this.data;
  }

}
