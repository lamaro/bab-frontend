import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';


@Injectable()
export class CerveceriasService {

  cervecerias: any[]=[];
  cerveceria:any = {};
  comentarios: any;

  //cerveceriasUrl: string = 'http://localhost:3000/';
  cerveceriasUrl: string = 'https://buenosairesbeer-api-rest.herokuapp.com/';

  constructor(public http: HttpClient) { }

  getCervecerias() {
    return this.http.get(this.cerveceriasUrl + 'cervecerias')
    .map( (resp: any) => {
      this.cervecerias = resp;
      return this.cervecerias;
    });
  }

  addCerveceria(cerveceria) {
    return this.http.post(this.cerveceriasUrl + 'cerveceria',cerveceria)
    .map( (resp: any) => {
      this.cervecerias = resp;
      return this.cervecerias;
    });
  }

  getCerveceria(slug: string): Observable<any>{
      this.cerveceria = this.http.get(this.cerveceriasUrl + 'cerveceria/' + slug);
       //console.log(this.cerveceria);
       return this.cerveceria;
  }

  getCerveceriaById(id: string): Observable<any>{
      this.cerveceria = this.http.get(this.cerveceriasUrl + 'cerveceria/id/' + id);
       //console.log(this.cerveceria);
       return this.cerveceria;
  }

  deleteCerveceria(id:string) {
    return this.http.delete(this.cerveceriasUrl + 'cerveceria/' + id);
  }

  updateCerveceria (cerveceria) {
  console.log(cerveceria);
    return this.http.put(this.cerveceriasUrl + 'cerveceria/' + cerveceria._id, cerveceria)
    .map( (resp: any) => {
      this.cerveceria = resp;
      return this.cerveceria;
    });
  }

  geocoder(term){ //No funciona
    this.cerveceria = this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=Bogot%C3%A1+367,Ciudad+de+Buenos+Aires,+Argentina&key=YAIzaSyCdZJ4FE_E5uVGEa_EmdOhOEbS5wNJUe-4');
     //console.log(this.cerveceria);
     return this.cerveceria;

  }

  getComentarios(cerveceria){
    console.log(cerveceria);
      this.comentarios = this.http.get(this.cerveceriasUrl + 'cerveceria/comentarios/' + cerveceria._id);
       console.log(this.comentarios);
       return this.comentarios;
  }

  updateComentarios (cerveceria) {
  console.log(cerveceria);
    return this.http.put(this.cerveceriasUrl + 'cerveceria/comentario/add/' + cerveceria._id, cerveceria)
    .map( (resp: any) => {
      this.cerveceria = resp;
      return this.cerveceria;
    });
  }
}
