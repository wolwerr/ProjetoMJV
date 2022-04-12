import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './components/comentario-list/comentario-list.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { ComentariosPageComponent } from './pages/comentarios-page/comentarios-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComentarioDetailsPageComponent } from './pages/comentario-details-page/comentario-details-page.component';
import { RouterModule } from '@angular/router';
import { CreateComentarioPageComponent } from './pages/create-comentario-page/create-comentario-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
      ComentarioListComponent,
      ComentarioComponent,
      ComentariosPageComponent,
      CreateComentarioPageComponent,
      ComentarioDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ComentariosModule { }
