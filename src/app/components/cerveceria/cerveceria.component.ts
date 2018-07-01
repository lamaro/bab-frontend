import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../services/cervecerias.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-cerveceria',
  templateUrl: './cerveceria.component.html',
  styleUrls: ['./cerveceria.component.css']
})
export class CerveceriaComponent implements OnInit {
  cerveceria: any = {};
  constructor(public _conectapiService:CerveceriasService,public router:ActivatedRoute) {
  }
  ngOnInit() {
    this.router.params.subscribe( params => {
      console.log(params['slug']);
      this._conectapiService.getCerveceria(params['slug']).subscribe(
      result => {
          this.cerveceria = result[0];
      }, //result
      error => {console.log(<any>error);
      })
    })
  }
}
