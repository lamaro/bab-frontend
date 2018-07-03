import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { CerveceriasService } from '../../services/cervecerias.service';

@Component({
  selector: 'app-mapa-home',
  templateUrl: './mapa-home.component.html',
  styleUrls: ['./mapa-home.component.css']
})
export class MapaHomeComponent{
  constructor(public _conectapiService:CerveceriasService) { }
  // google maps zoom level
  zoom: number = 15;
  // initial center position for the map
  lat: number = -34.59433815911231;
  lng: number = -58.4236350560447;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

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
    this._conectapiService.getCervecerias().subscribe(data => {
      console.log(data);
      //this.markers = data;
      //Agregar loop
      this.markers.push({'lat':Number(data[0].lat),'lng':Number(data[0].lng)})
      console.log(this.markers);
         });
    });
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
