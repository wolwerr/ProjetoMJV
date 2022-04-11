import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatComentarioPageComponent } from './pages/create-comentario-page/creat-comentario-page.component';
import { CreateComentarioPageComponent } from './pages/create-comentario-page/create-comentario-page.component';
import { ComentarioDetailsPageComponent } from './pages/comentario-details-page/comentario-details-page.component';
import { ComentariosPageComponent } from './pages/comentarios-page/comentarios-page.component';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';

@NgModule({
  declarations: [


    CreatComentarioPageComponent,
      CreateComentarioPageComponent,
      ComentarioDetailsPageComponent,
      ComentariosPageComponent,
      ComentarioListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComentariosModule { }
