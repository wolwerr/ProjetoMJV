import { Injectable } from '@angular/core';
import { Comentario } from '../models/comentario.model';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  comentarios: Array<Comentario> = [];

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(private httpClient: HttpClient) { }

  getDefaultComentario(): Comentario {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      nome: '',
      email: '',
      password: '',
      comentario: '',
      inclusionDate: dateToday,
    }
  }
  getComentarios() {
    return this.httpClient.get<Array<Comentario>>(environment.baseUrlBackend, this.options);
  }

  getComentarioByEmailAndPassword(email: string | undefined, password: string | undefined) {
    return this.comentarios.find((comentario) => comentario.email === email && comentario.password === password);
  }

  getComentarioById(id: number) {
    return this.httpClient.get<Comentario>(`${environment.baseUrlBackend}/id/${id}`, this.options);
  }

  getComentarioByNome(nome: string) {
    return this.comentarios.find((comentario) => comentario.nome === nome);
  }

  // getComentarioByFilterNome(nome: string) {
  //   return this.comentarios.filter((comentario) => comentario.nome.toUpperCase().search(nome.toUpperCase()) > -1);
  // }

  getComentarioByFilterId(id: number) {
    const comentario = this.getComentarioById(Number(id));
    if(!comentario) {
      return [];
    }
    return [comentario];
  }

  createComentario(comentario: Comentario) {
    return this.httpClient.post(`${environment.baseUrlBackend}/create`, comentario, this.options);
  }

  removeComentario(id: number) {
    return this.httpClient.delete<any>(`${environment.baseUrlBackend}/remove/${id}`, this.options);
  }

  updateComentario(id: number, body: { email: string, nome: string }) {
    return this.httpClient.put<any>(`${environment.baseUrlBackend}/update/${id}`, body, this.options);
  }
}
