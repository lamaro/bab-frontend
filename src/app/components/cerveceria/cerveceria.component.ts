import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../services/cervecerias.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-cerveceria',
  templateUrl: './cerveceria.component.html',
  styleUrls: ['./cerveceria.component.css']
})
export class CerveceriaComponent {
  cerveceria: any = {};
  constructor(public _conectapiService:CerveceriasService,public router:ActivatedRoute) {
      this.router.params.subscribe( params => {
        console.log(params['slug']);
        this._conectapiService.getCerveceria(params['slug']).subscribe(
        result => {
          if(result.code != 200){
            console.log(result);
          }else{
            this.cerveceria = result.data;
          }
        }, //result
        error => {console.log(<any>error);
        })
    })
  }
}
