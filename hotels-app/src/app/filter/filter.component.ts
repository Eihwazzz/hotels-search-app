import { Component, OnInit, HostListener } from '@angular/core';
import { HotelFilterService } from '../hotel-filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  checkBoxes = {};
  hotelName: string;
  ArrStars = Array;
  public innerWidth: any;

  constructor(private _hotelFilterService: HotelFilterService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  filterByName(name: string){
    for(var key in this.checkBoxes){
      if(this.checkBoxes){
        this.checkBoxes = false; 
      }
    }
    this._hotelFilterService.sendFilter(name);
  }

  filterByStars(stars){
    this.hotelName = null;
    this._hotelFilterService.sendFilter(stars);
  }

}
