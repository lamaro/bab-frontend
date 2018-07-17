import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../services/cervecerias.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cerveceria',
  templateUrl: './cerveceria.component.html',
  styleUrls: ['./cerveceria.component.css']
})
export class CerveceriaComponent implements OnInit {

  constructor(public _conectapiService:CerveceriasService,public router:ActivatedRoute, private routerGen: Router) {}
  cerveceria: any = {};
  comentarios: any;
  promBebCer: any;
  promComCer: any;


  //mapa
  zoom: number = 15;
  lat: number = -34.59433815911231;
  lng: number = -58.4236350560447;
  markers: marker[] = []

  ngOnInit() {
    this.router.params.subscribe( params => {
      this._conectapiService.getCerveceria(params['slug']).subscribe(
      result => {
          this.cerveceria = result[0];
          this.comentarios = this.cerveceria.comentarios;
          this.promBebCer = this.cerveceria.promBebCer;
          this.promComCer = this.cerveceria.promComCer;
          this.markers.push({'lat':Number(result[0].lat),'lng':Number(result[0].lng),'nombreCer':result[0].nombreCer,'ubicacionCer':result[0].ubicacionCer});
          this.lat = Number(result[0].lat);
          this.lng = Number(result[0].lng);
      }, //result
      error => {console.log(<any>error);
      })
    })
  }// Fin ngOnInit

altaComentario(){
  console.log(this.cerveceria.slug);
  this._conectapiService.updateComentarios(this.cerveceria).subscribe( //agrego el comentario
    res => {
      console.log('Comentario agregado!');
      this.comentarios = res.comentarios;
      this.promBebCer = res.promBebCer;
      this.promComCer = res.promComCer;
      console.log(this.promBebCer);
      console.log(this.promComCer);
    });
}

}

interface marker {
	lat: number;
	lng: number;
  nombreCer: string;
  ubicacionCer: string;
	//label?: string;
	//draggable: boolean;
}
