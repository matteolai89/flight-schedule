import { IFlight } from './models/flight.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  mockFlights = '/assets/mock-data/mockFlights.csv';
  mockRegistrations = '/assets/mock-data/mockRegistrations.csv';

  constructor(private http: HttpClient) {}

  getFlights() {
    return this.http.get(this.mockFlights, { responseType: 'text' });
  }

  getRegistrations() {
    return this.http.get(this.mockRegistrations, { responseType: 'text' });
  }

  // updateRegistration() {
  //   return this.http.put(this.mockFlights, { responseType: 'text' });
  // }
}
