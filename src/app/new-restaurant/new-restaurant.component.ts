import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RestaurantService }  from '../restaurant.service';
import { Restaurant }  from '../restaurant';
import { RESTAURANTS }  from '../restaurants-list';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  @Input() restaurant = {
    id: null,
    name: '',
    price: null,
    ranking: null,
    attributes: [],
    notes: '',
    atmosphere: '',
    isSelected: false
  };
  restaurants: Restaurant[];
  ids: number[];
  ATTRIBUTES = [
    "breakfast",
    "brunch",
    "lunch",
    "dinner",
    "outside seating",
    "parking - easy",
    "parking - hard",
    "coffee - good",
    "coffee - bad",
    "walkable",
    "good for Mike's family",
    "good for Brooke's family"
  ];
  ATMOSPHERES = [
    "&#128512;",
    "&#128513;",
    "&#128526;",
    "&#128532;"
  ];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location
  ) {}

  save(restaurant: Restaurant): void {
    console.log(this.ids);
    restaurant.name = restaurant.name.trim();
    restaurant.id = this.ids[this.ids.length - 1] + 1;
    if (!restaurant.name) { return; }
    RESTAURANTS.push(restaurant);
    // this.restaurantService.addRestaurant(restaurant)
    //   .subscribe(restaurant => {
    //     RESTAURANTS.push(restaurant);
    //   });
   }
   
  goBack(): void {
    this.location.back();
  }
  
  ngOnInit() {
    this.getRestaurants();
  }
  
  getRestaurants(): void {
    // this.restaurantService.getRestaurants()
    //   .subscribe(restaurants => {
    //     this.restaurants = restaurants
    //     this.ids = this.restaurants.map(res => res.id).sort();
    //   });
    this.restaurants = RESTAURANTS;
    this.ids = RESTAURANTS.map(res => res.id).sort();
    console.log(this.ids);
  }

}
