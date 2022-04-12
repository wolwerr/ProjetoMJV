import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comentario } from '../../models/comentario.model';
import { ComentarioService } from '../../services/comentario.service';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  @Input()
  comentario?: Comentario;

  @Input()
  card: boolean = true;

  constructor(private comentarioService: ComentarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  remove() {
    if (this.comentario && this.comentario.id) this.comentarioService.removeComentario(this.comentario.id)
    .subscribe((result) => {
      alert(result.message);
      this.router.navigateByUrl('/comentario');
    });
  }

  update() {
    if (this.comentario && this.comentario.id)
    this.comentarioService.updateComentario(
      this.comentario.id, { nome: 'Ricardo', email: 'ricardo@dtmm.com.br' })
      .subscribe(() => {
        window.location.reload();
      });
  }

}
