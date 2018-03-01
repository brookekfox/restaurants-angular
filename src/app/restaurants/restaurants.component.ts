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
  allAttributes = [];
  isAttributesFilters = false;
  attributesFilters = [];
  prices = [
    {value: 1, label: "$"},
    {value: 2, label: "$$"},
    {value: 3, label: "$$$"},
    {value: 4, label: "$$$$"}
  ];
  appliedPrices = [];

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.getRestaurants();
    this.getUniqueAttributes();
  }

  getRestaurants(): void {
    this.restaurants = this.restaurantService.getRestaurants().sort(function (a, b) {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  getUniqueAttributes(): void {
    var attributes = this.restaurants.map(function(res) {
      if (res.attributes.length > 0) {
        return res.attributes;
      }
    }).filter(function(attr) {
      return attr !== undefined;
    });
    this.allAttributes = this.uniq([].concat.apply([], attributes));
  }

  getUniquePrices(): void {
    var prices = this.restaurants.map(function(res) {
      return res.price;
    });
    this.prices = this.uniq([].concat.apply([], prices));
  }

  uniq(arr) {
    var seen = {};
    return arr.filter(function(item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }

  showAttributesFilters() {
    this.isAttributesFilters = !this.isAttributesFilters;
  }

  sortByAttr(attr: string) {
    var idx = this.attributesFilters.indexOf(attr);
    if (idx === -1) {
      this.attributesFilters.push(attr);
    } else {
      this.attributesFilters.splice(idx, 1);
    }
    if (this.attributesFilters.length > 0) {
      var appliedAttrs = this.attributesFilters;
      this.getRestaurants();
      this.restaurants = this.restaurants.filter(function(res) {
        return appliedAttrs.filter(function(n) {
          return res.attributes.indexOf(n) !== -1;
        }).length > 0;
      });
    } else {
      this.getRestaurants();
    }
  }

  sortByPrice(price: number) {
    var idx = this.appliedPrices.indexOf(price);
    if (idx === -1) {
      this.appliedPrices.push(price);
    } else {
      this.appliedPrices.splice(idx, 1);
    }
    if (this.prices.length > 0) {
      var appliedPrices = this.appliedPrices;
      this.getRestaurants();
      this.restaurants = this.restaurants.filter(function(res) {
        return appliedPrices.indexOf(res.price) > -1;
      });
    } else {
      this.getRestaurants();
    }
  }
}