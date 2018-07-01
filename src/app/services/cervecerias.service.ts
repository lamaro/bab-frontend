import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';


@Injectable()
export class CerveceriasService {

  cervecerias: any[]=[];
  cerveceria:any = {};

  cerveceriasUrl: string = 'http://localhost:3000/';


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
/*
  getCerveceria(slug: string){
   // return this.cervecerias[idx];
   console.log(slug);
   console.log(JSON.stringify(this.cerveceria));
    this.cerveceria = this.http.get(this.cerveceriasUrl + 'cerveceria/' + slug);
    console.log(this.cerveceria);
    console.log(JSON.stringify(this.cerveceria));
    return this.cerveceria;
  }
  */

  getCerveceria(slug: string): Observable<any>{
      this.cerveceria = this.http.get(this.cerveceriasUrl + 'cerveceria/' + slug);
       console.log(this.cerveceria);
       return this.cerveceria;
  }



}
