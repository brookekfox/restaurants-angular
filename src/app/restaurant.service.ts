import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './restaurants-list';
import { MessageService } from './message.service';

@Injectable()
export class RestaurantService {

  getRestaurants() {
    return RESTAURANTS;
  }

  getRestaurant(id: number) {
    return RESTAURANTS.find(restaurant => restaurant.id === id);
  }

  constructor(
    private messageService: MessageService
  ) {
}

  private log(message: string) {
    this.messageService.add('RestaurantService: ' + message);
  }
}
