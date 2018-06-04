import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpHeaders } from '@angular/common/http';

import { User } from '../../models/user.model';

@Injectable()
export class UserService {
  user: User;
  private userUrl = 'http://10.13.200.55:8080/bachaat/api/v1/user';
  constructor(private http: HttpClient) { }

  addUser(newUser, header): Observable<any> {
    const httpHeader = { headers: new HttpHeaders(header) };
    return this.http.post(this.userUrl, newUser, httpHeader).pipe(
        tap( _ => this.log(`added user = ${newUser}`)),
        catchError(this.handleError<User>('User added'))
      );
  }

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

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('====' +  message);
  }

}
