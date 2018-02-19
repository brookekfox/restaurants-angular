import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NewRestaurantComponent }   from './new-restaurant/new-restaurant.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'new', component: NewRestaurantComponent },
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
}