import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../models/user';

@Injectable()
export class UserService {
  // 10.13.212.152:8000/mero-bachat-backend/api/v1
  private apiUrl = 'http://10.13.200.57:8080/api/v1/users';
  private headers = {'Content-Type': 'application/json'}

  constructor(private http: HttpClient) {
  }

  addUser(user: User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/user`, user, {headers: this.headers});
  }

  validateUser(user: User): Observable<any> {
    localStorage.setItem('mobileNumber', user.mobileNumber);
    return this.http.post<any>(`${this.apiUrl}/login`, user, {headers: this.headers});
  }

  getUsers(page, size, order: string): Observable<any> {
    const params = new HttpParams();
    params.set('page', page);
    params.set('size', size);
    params.set('sort', 'firstName');
    params.set('order', order);
    return this.http.get<any>(this.apiUrl, {params: params});
  }

  updateUser(user: User): any {
    return this.http.post(`${this.apiUrl}/update`, user, {headers: this.headers});
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
