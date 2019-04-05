import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel-list/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('http://localhost:3000/api/hotels');
  }

  getHotelsByName(name: string): Observable<Hotel[]> {
    const options = name ? { params: new HttpParams().set('name', name) } : {};
    return this.http.get<Hotel[]>('http://localhost:3000/api/hotels', options);
  }

  getHotelsByStars(stars: string): Observable<Hotel[]> {
    const options = stars ? { params: new HttpParams().set('stars', stars) } : {};
    return this.http.get<Hotel[]>('http://localhost:3000/api/hotels', options);
  }

}
