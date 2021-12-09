import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReqesResponsePost } from '../interfaces/reqes-response';
import { ReqesResponseUsers } from '../interfaces/reqes-response2';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient) {}

  cargarUsuarios(){

    const url = 'https://jsonplaceholder.typicode.com/users';
  
    return this.http.get<ReqesResponseUsers>(url);
    

  }


  cargarPosts(){
    const url2 = 'https://jsonplaceholder.typicode.com/posts';
    
    return this.http.get<ReqesResponsePost>(url2);
  }


  


}
