export interface Comentario {
  id?: number;
  nome?: string;
  email?: string;
  password?: string;
  comentario: string;
  inclusionDate: Date | string;
}
