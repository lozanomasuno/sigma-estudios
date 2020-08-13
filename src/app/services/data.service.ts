import { Injectable, Input } from '@angular/core';
import { DepartmentI, CitiesI } from '../models/model.interface';
import * as ApiDepts from './_files/depts.json';

@Injectable()
export class DataService {
  public departments: DepartmentI[] = [
    {
      id: 1,
      name: 'Amazonas',
    },
    {
      id: 2,
      name: 'Atlántico',
    },
    { id: 3, name: 'Caquetá' },
    { id: 4, name: 'Córdoba' },
    { id: 5, name: 'Guainía' },
    { id: 6, name: 'Guaviare' },
    { id: 7, name: 'Huila' },
    { id: 8, name: 'La Guajira' },
    { id: 9, name: 'San Andrés y Providencia' },
    { id: 10, name: 'Sucre' },
    { id: 11, name: 'Vaupés' },
    { id: 12, name: 'Vichada' },
  ];
  public cities: CitiesI[] = [
    {
      id: 1,
      depId: 1,
      name: 'Leticia',
    },
    {
      id: 2,
      depId: 1,
      name: 'El encanto',
    },
    {
      id: 3,
      depId: 1,
      name: 'La Chorrera',
    },
    {
      id: 3,
      depId: 1,
      name: 'La Pedrera',
    },

    {
      id: 4,
      depId: 2,
      name: 'Baranoa',
    },
    {
      id: 5,
      depId: 2,
      name: 'Barranquilla',
    },
    {
      id: 6,
      depId: 2,
      name: 'Campo de la Cruz',
    },
    {
      id: 7,
      depId: 2,
      name: 'Candelaría',
    },
    {
      id: 8,
      depId: 2,
      name: 'Galapa',
    },
    {
      id: 9,
      depId: 2,
      name: 'San Juan de Acosta',
    },
    {
      id: 10,
      depId: 2,
      name: 'Luruaco',
    },
    {
      id: 11,
      depId: 2,
      name: 'Malambo',
    },
    {
      id: 12,
      depId: 2,
      name: 'Manatí',
    },
    {
      id: 13,
      depId: 2,
      name: 'Palmar de Varela',
    },
    {
      id: 14,
      depId: 2,
      name: 'Piojo',
    },
    {
      id: 15,
      depId: 2,
      name: 'Polo Nuevo',
    },
    {
      id: 16,
      depId: 3,
      name: 'Albania',
    },
    {
      id: 17,
      depId: 3,
      name: 'Belén de los Andaquíes',
    },
    {
      id: 18,
      depId: 3,
      name: 'Cartagena del Chaira',
    },
    {
      id: 19,
      depId: 3,
      name: 'Curillo',
    },
    {
      id: 20,
      depId: 3,
      name: 'El Doncello',
    },
    {
      id: 21,
      depId: 3,
      name: 'El Paujil',
    },
    {
      id: 22,
      depId: 3,
      name: 'Florencia',
    },
    {
      id: 23,
      depId: 3,
      name: 'La Montañita',
    },
    {
      id: 24,
      depId: 3,
      name: 'Milan',
    },
    {
      id: 25,
      depId: 3,
      name: 'Morelia',
    },
    {
      id: 26,
      depId: 4,
      name: 'Aguachica',
    },
    {
      id: 27,
      depId: 4,
      name: 'Agustín Codazzi',
    },
    {
      id: 28,
      depId: 4,
      name: 'Astrea',
    },
    {
      id: 29,
      depId: 4,
      name: 'Becerril',
    },
    {
      id: 30,
      depId: 4,
      name: 'Bosconia',
    },
    {
      id: 31,
      depId: 4,
      name: 'Chimichagua',
    },
    {
      id: 32,
      depId: 4,
      name: 'Chiriguaná',
    },
    {
      id: 33,
      depId: 4,
      name: 'Curumaní',
    },
    {
      id: 34,
      depId: 4,
      name: 'El Paso',
    },


  ];

  public getDepartments(): DepartmentI[] {
      return this.departments;
  }
  public getCities(): CitiesI[] {
    return this.cities;
  }
  constructor() {}
}
