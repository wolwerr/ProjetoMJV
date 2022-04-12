import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from 'src/app/features/comentarios/services/comentario.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  error: boolean = false;

  email?: string;
  password?: string;

  constructor(
    private comentarioService: ComentarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  authenticate() {
    const comentario = this.comentarioService.getComentarioByEmailAndPassword(this.email, this.password);
    if (!comentario) {
      this.error = true;
    } else {
      delete comentario.password;

      sessionStorage.setItem('comentario', JSON.stringify(comentario));

      this.router.navigateByUrl('comentario');
    }

  }

}
