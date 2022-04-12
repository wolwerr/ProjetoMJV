import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './features/login/pages/login-page/login-page.component';
import { CreateComentarioPageComponent } from './features/comentarios/pages/create-comentario-page/create-comentario-page.component';
import { ComentarioDetailsPageComponent } from './features/comentarios/pages/comentario-details-page/comentario-details-page.component';
import { ComentariosPageComponent } from './features/comentarios/pages/comentarios-page/comentarios-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'comentarios', component: ComentariosPageComponent, canActivate: [AuthGuard] },
  { path: 'comentario-details/:id', component: ComentarioDetailsPageComponent, canActivate: [AuthGuard] },
  { path: 'create-comentario', component: CreateComentarioPageComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
