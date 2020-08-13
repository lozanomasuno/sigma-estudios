import { Component, OnInit, Input } from '@angular/core';
import { DepartmentI, CitiesI } from '../../models/model.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [DataService],
})
export class FormComponent implements OnInit {
  public isValid: boolean;
  public redErrorlabel: string;
  public inputMail: string;
  public cityNameClass: string;
  public inputEmailClass: string;

  public inputName: string;
  public inpuntNameClass: string;
  public departmentNameClass: string;
  public selectedCity: CitiesI[];
  public selectedDepartment: DepartmentI = { id: 0, name: '' };
  public departments: DepartmentI[];
  public cities: CitiesI[];

  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  public loadDepartments(): void {
    this.departments = this.dataSvc.getDepartments();
  }

  public onSelect(id: number): void {
    this.cities = this.dataSvc
      .getCities()
      .filter((filterby) => filterby.depId == id);
  }

  public validateEmail(email): boolean {
    const validationRule = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    this.isValid = validationRule.test(String(email).toLowerCase());
    return this.isValid;
  }

  public isValidMail(): boolean {
    if (!this.validateEmail(this.inputMail)) {
      this.isValid = false;
      this.inputEmailClass = 'errorField';
    } else {
      this.inputEmailClass = '';
    }
    return this.isValid;
  }

  public notAllowEmptyFields(): boolean {
    this.isValid = true;

    if (!this.selectedDepartment.id) {
      this.isValid = false;
      this.departmentNameClass = 'errorField';
    } else {
      this.departmentNameClass = '';
    }

    if (!this.inputName) {
      this.isValid = false;
      this.inpuntNameClass = 'errorField';
    } else {
      this.inpuntNameClass = '';
    }

    this.isValidMail();

    return this.isValid;
  }

  public validateBeforeSave(): void {
    if (!this.notAllowEmptyFields()) {
      this.redErrorlabel = 'Por favor complete los campos en rojo*';
      console.error('No Se puede guardar', this.selectedCity);
    } else {
      console.log('Guardado...', this.selectedCity);
    }
  }
}
