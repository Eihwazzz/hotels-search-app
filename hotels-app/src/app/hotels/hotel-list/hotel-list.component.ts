import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { HotelsService } from '../hotels.service';
import { HotelFilterService } from 'src/app/hotel-filter.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  public hotels = [];
  ArrStars = Array;
  ArrAmenities = Array;

  constructor(private hotelService: HotelsService, private _hotelFilterService: HotelFilterService) { 
    
  }

  ngOnInit() {
    this.getHotelsList();

    this._hotelFilterService.filterData$
      .subscribe(
        filter => {
          if(typeof filter === 'string'){
            this.getHotelsByName(filter);
          }else if(typeof filter === 'number' && isFinite(filter)){
            this.getHotelsByStars(filter.toString());
          }
        }
      )
  }

  getHotelsList(){
    this.hotelService.getHotels()
      .subscribe(data => {
        this.hotels = data;
      });
  }

  getHotelsByName(name: string){
    this.hotelService.getHotelsByName(name)
      .subscribe(data => {
        if(!Array.isArray(data)){
          this.hotels = [];
          this.hotels.push(data);
        }else{
          this.hotels = data;
        }
      });
  }

  getHotelsByStars(stars: string){
    this.hotelService.getHotelsByStars(stars)
      .subscribe(data => {
        if(!Array.isArray(data)){
          this.hotels = [];
          this.hotels.push(data);
        }else{
          this.hotels = data;
        }
      });
  }

  updateImgUrl(event){
    event.target.src = 'assets/images/hotels/img_not_available.jpg';
  }

}