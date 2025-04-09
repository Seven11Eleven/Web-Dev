import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vacancy } from '../models/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private apiUrl = 'http://localhost:8000/api/companies/';  // Базовый URL для компаний

  constructor(private http: HttpClient) { }

  getCompanyVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<any>(`${this.apiUrl}${companyId}/vacancies/`).pipe(
      map(response => response.results)
    );
  }
}
