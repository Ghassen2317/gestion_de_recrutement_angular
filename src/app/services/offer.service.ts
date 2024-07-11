import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private baseUrl = 'http://localhost:8080/api/offresEmploi';
  constructor(private http: HttpClient) {}

  getFilteredOffres(filters: any): Observable<Offer[]> {
    let params = new HttpParams();
    if (filters) {
      if (filters.typeContrat) {
        params = params.append('typeContrat', filters.typeContrat);
      }
      if (filters.region) {
        params = params.append('region', filters.region);
      }
      if (filters.nbExperience) {
        params = params.append('nbExperience', filters.nbExperience);
      }
      if (filters.diplome) {
        params = params.append('diplome', filters.diplome);
      }
    }
    return this.http.get<Offer[]>(`${this.baseUrl}/filtered`, { params });
  }

  getOfferById(id: string): Observable<Offer> {
    return this.http.get<Offer>(`${this.baseUrl}/byId/${id}`);
  }

  getOfferByNom(nomOffreEmploi: string): Observable<Offer> {
    return this.http.get<Offer>(`${this.baseUrl}/byNomOffreEmploi/${nomOffreEmploi}`);
  }

}

export interface Offer {
  id: string;
  nomOffreEmploi: string;
  nomEntreprise: string;
  typeContrat: string;
  region: string;
  nbExperienceOffre: number;
  description: string;
  datePublication: Date;
  dateExpiration: Date;
}
