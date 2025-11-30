import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://147.182.220.28/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getChartData(): Observable<any> {
    const headers = this.authService.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/chart-data`, { headers });
  }
}
