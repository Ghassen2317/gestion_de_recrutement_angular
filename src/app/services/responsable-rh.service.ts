import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsableRHService {
  private baseUrl = 'http://localhost:8080/api/responsablesRH'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getAllResponsablesRH(): Observable<ResponsableRH[]> {
    return this.http.get<ResponsableRH[]>(`${this.baseUrl}`);
  }

  getResponsableRHById(id: string): Observable<ResponsableRH> {
    return this.http.get<ResponsableRH>(`${this.baseUrl}/${id}`);
  }

  createResponsableRH(responsableRH: ResponsableRH): Observable<ResponsableRH> {
    return this.http.post<ResponsableRH>(`${this.baseUrl}`, responsableRH);
  }

  updateResponsableRH(id: string, responsableRH: ResponsableRH): Observable<ResponsableRH> {
    return this.http.put<ResponsableRH>(`${this.baseUrl}/${id}`, responsableRH);
  }

  deleteResponsableRH(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}


export interface ResponsableRH {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  entrepriseId: string;
  motDePasse: string;
}