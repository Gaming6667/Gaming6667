import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios: any = []

  public posts: any = []
  
  

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios().subscribe( resp => {

      console.log(resp)
      this.usuarios = resp;

      this.usuariosService.cargarPosts().subscribe(resp => {
      console.log(resp)
      this.posts = resp;
       });

    });

    

    


    //this.usuariosService.getUser('2').subscribe( resp => {
     // console.log(resp)
      //this.userObj = resp;

    //});
    }

   // filterPost(): void {
     // this.posts = this.posts.map((post: any) =>{
      //  return post.userId === 1
      //});
    // }
    

   
}


