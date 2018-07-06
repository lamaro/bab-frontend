import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../services/cervecerias.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-cerveceria',
  templateUrl: './cerveceria.component.html',
  styleUrls: ['./cerveceria.component.css']
})
export class CerveceriaComponent implements OnInit {

  constructor(public _conectapiService:CerveceriasService,public router:ActivatedRoute) {}
  cerveceria: any = {};

  //mapa
  zoom: number = 15;
  lat: number = -34.59433815911231;
  lng: number = -58.4236350560447;

  markers: marker[] = [
    /*
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
    */
  ]




  ngOnInit() {
    this.router.params.subscribe( params => {
      console.log(params['slug']);
      this._conectapiService.getCerveceria(params['slug']).subscribe(
      result => {
          this.cerveceria = result[0];
          this.markers.push({'lat':Number(result[0].lat),'lng':Number(result[0].lng),'nombreCer':result[0].nombreCer,'ubicacionCer':result[0].ubicacionCer});
          this.lat: Number(result[0].lat);
          this.lng: Number(result[0].lng);
      }, //result
      error => {console.log(<any>error);
      })
    })
  }
}

interface marker {
	lat: number;
	lng: number;
	//label?: string;
	//draggable: boolean;
}
