import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { CerveceriasService } from '../../services/cervecerias.service';
import { Router } from '@angular/router';
//import { GoogleMapsAPIWrapper } from '@agm/core';


@Component({
  selector: 'app-mapa-home',
  templateUrl: './mapa-home.component.html',
  styleUrls: ['./mapa-home.component.css']
})
export class MapaHomeComponent{
  constructor(public _conectapiService:CerveceriasService, private router:Router) {}

  // google maps zoom level
  zoom: number = 15;
  // initial center position for the map
  lat: number = -34.59433815911231;
  lng: number = -58.4236350560447;
  location: any = {};
  latUserLoc: number = -34.59433815911231;
  lngUserLoc: number = -58.4236350560447;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
/*
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
*/
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
    /*
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  }
    */
  ]
  ngOnInit() {
    //Agrego los marcadores
    this._conectapiService.getCervecerias().subscribe(data => {
      data.forEach(item => {
        this.markers.push({'lat':Number(item.lat),'lng':Number(item.lng),'nombreCer':item.nombreCer,'ubicacionCer':item.ubicacionCer,'slug':item.slug});
      });
      console.log(this.markers);
    });

    //Coordenadas del navegador
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords);
        this.latUserLoc = position.coords.latitude;
        this.lngUserLoc = position.coords.longitude;
      });
   }

  }

  verCerveceria(slug:string){
    this.router.navigate(['/cerveceria',slug])
  }
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  nombreCer: string;
  ubicacionCer: string;
  slug: string;
	//label?: string;
	//draggable: boolean;
}
