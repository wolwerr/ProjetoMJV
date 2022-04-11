import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComentarioComponent } from './features/comentarios/components/comentario/comentario.component';
import { ComentarioListComponent } from './features/comentarios/components/comentario-list/comentario-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ComentarioComponent,
    ComentarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
