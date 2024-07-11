import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = 'http://localhost:8080/api/auth/register/entreprise';

  constructor(private http: HttpClient) { }

  registerEntreprise(entrepriseData: any): Observable<any> {
    return this.http.post(this.baseUrl, entrepriseData)
      .pipe(
        catchError((error) => {
          console.error('Error registering entreprise:', error);
          throw error; // Rethrow the error for further handling in the component
        })
      );
  }
}
