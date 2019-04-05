import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelFilterService {

  private _filterDataSource = new Subject<any>();
  filterData$ = this._filterDataSource.asObservable();

  constructor() { }

  sendFilter(filters: string){
    this._filterDataSource.next(filters);
  }

}
