import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  private baseUrl = 'http://localhost:8080/candidatures'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  createCandidature(candidature: Candidature, offreId: string): Observable<Candidature> {

    const currentDate = new Date();
    const currentDateStr = currentDate.toISOString(); // Format date as needed by your backend
    const statut = 'EN_COURS';

    const candidatureData = {
      ...candidature,
      offreId: offreId, 
      datePostulation: currentDateStr,
      statut: statut
    };

    return this.http.post<Candidature>(`${this.baseUrl}/create`, candidatureData);
  }

  uploadCurriculumVitae(id: string, file: File): Observable<Candidature> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<Candidature>(`${this.baseUrl}/${id}/upload/cv`, formData);
  }

  uploadLettreMotivation(id: string, file: File): Observable<Candidature> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<Candidature>(`${this.baseUrl}/${id}/upload/lettre`, formData);
  }
}

export interface Candidature {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  sexe: string;
  age: number;
  nbExperience: number;
  diplome: string;
  curriculumVitae?: File;
  lettreMotivation?: File;
  nomOffreEmploi?: string;
  datePostulation?: string;
  statut?: string;
  offreId?: string
}
