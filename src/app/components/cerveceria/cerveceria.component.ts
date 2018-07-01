import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../services/cervecerias.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cerveceria',
  templateUrl: './cerveceria.component.html',
  styleUrls: ['./cerveceria.component.css']
})
export class CerveceriaComponent {

  cerveceria: any = {};

  constructor(public _conectapiService:CerveceriasService,public router:ActivatedRoute) {

      this.router.params.subscribe( params => {
        //console.log(params['id']);
        this.cerveceria = this._conectapiService.getCerveceria(params['slug']);
        alert(JSON.stringify(this.cerveceria));
        console.log(this.cerveceria);
      })
    }

}
