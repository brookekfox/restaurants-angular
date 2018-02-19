import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { RESTAURANTS } from './restaurants-list';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestaurantService {
  private restaurantsUrl = 'api/restaurants';

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantsUrl)
      .pipe(
        catchError(this.handleError('getRestaurants', []))
      );
  }
  getRestaurant(id: number): Observable<Restaurant> {
    return of(RESTAURANTS.find(restaurant => restaurant.id === id));
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    
  }

  /** PUT: add the restaurant to the server */
  addRestaurant(restaurant: Restaurant): Observable<any> {
    return this.http.post<Restaurant>(
      this.restaurantsUrl,
      restaurant,
      httpOptions
    )
      .pipe(
        catchError(this.handleError<Restaurant>('addRestaurant'))
      );
  }

  private log(message: string) {
    this.messageService.add('RestaurantService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
