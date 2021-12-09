import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqesResponseUsers } from '../interfaces/reqes-response2';

@Injectable({
  providedIn: 'root'
})
export class FiltroPostService {

  constructor(private http: HttpClient) { }

  subirPosts(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    return this.http.get<ReqesResponseUsers>(url);
  }

}
