import {Injectable} from '@angular/core';
import User from "../components/users/models/user";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.USERS_API;

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}`);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.apiUrl}${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.patch<User>(`${this.apiUrl}${user.id}`, user);
  }

  deleteUser(id: number): Observable<unknown> {
    return this.httpClient.delete<unknown>(`${this.apiUrl}${id}`);
  }

  getUsersByUsername(username: string): Observable<User[]> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("username", username);

    return this.httpClient.get<User[]>(`${this.apiUrl}`, { params:queryParams });
  }
}
