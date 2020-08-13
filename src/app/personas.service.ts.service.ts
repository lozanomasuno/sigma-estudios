import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../app/persona';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  updatePersona(persona: Persona) {
    return this.http.put(`${this.baseUrl}/update.php`, persona);
  }
}
