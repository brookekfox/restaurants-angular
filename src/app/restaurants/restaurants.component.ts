import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RESTAURANTS } from '../restaurants-list';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant;

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService
      .getRestaurants()
      .subscribe(restaurants => this.restaurants = restaurants);
  }

  onSelect(restaurant: Restaurant): void {
    restaurant.isSelected = !restaurant.isSelected;
  }

}