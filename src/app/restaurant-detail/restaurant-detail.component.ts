import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  @Input() restaurant: Restaurant;
  hasNotes: boolean;
  hasAttributes: boolean;
  isSelected: boolean;

  constructor() {
  }

  ngOnInit() {
    this.hasNotes = this.restaurant.notes && this.restaurant.notes.length > 0;
    this.hasAttributes = this.restaurant.attributes && this.restaurant.attributes.length > 0;
  }

  onSelect(): void {
    this.isSelected = !this.isSelected;
  }
}