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
  ];

  public getDepartments(): DepartmentI[] {
      return this.departments;
  }
  public getCities(): CitiesI[] {
    return this.cities;
  }
  constructor() {}
}
