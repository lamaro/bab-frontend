import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { CerveceriasService } from '../../services/cervecerias.service';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
//import { GoogleMapsAPIWrapper } from '@agm/core';


@Component({
  selector: 'app-mapa-home',
  templateUrl: './mapa-home.component.html',
  styleUrls: ['./mapa-home.component.css']
})
export class MapaHomeComponent{
  constructor(private mapsAPILoader: MapsAPILoader,public _conectapiService:CerveceriasService, private router:Router) {}

  // google maps zoom level
  zoom: number = 13;
  // initial center position for the map
  lat: number = -34.59433815911231;
  lng: number = -58.4236350560447;
  location: any = {};
  latUserLoc: number = -34.59433815911231;
  lngUserLoc: number = -58.4236350560447;
  centerUserLoc:any;
  radioUserLoc:number = 1000;
  filteredMarkers:any[];

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
  /*
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
    */
  }

  cambiaRadio($event: MouseEvent){
    this.markers = [];
    this.radioUserLoc = $event / 1000;
    console.log(this.radioUserLoc);
    this._conectapiService.getCervecerias().subscribe(data => {
      data.forEach(item => {
        const markerLoc = new google.maps.LatLng(item.lat, item.lng);
        //console.log(markerLoc.lat());
        const  distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, this.centerUserLoc) / 1000;
         console.log(distanceInKm);
        if (distanceInKm < this.radioUserLoc) {
          this.markers.push({'lat':Number(item.lat),'lng':Number(item.lng),'nombreCer':item.nombreCer,'ubicacionCer':item.ubicacionCer,'slug':item.slug,'urlImagenCer':item.urlImagenCer});
        }
      });
      //console.log(this.markers);
    });
  }


  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  circles: circle[] = []

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

  styles:any[]=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
    //Coordenadas del navegador

    if(navigator.geolocation){
      console.log('ACEPTADO EL LOCATION!');
      navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords);
        this.latUserLoc = position.coords.latitude;
        this.lngUserLoc = position.coords.longitude;
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.centerUserLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //Agrego los Circulo
        this.circles.push({'lat':Number(this.lat),'lng':Number(this.lng),'radioUserLoc':this.radioUserLoc});
        //Agrego los marcadores
        this._conectapiService.getCervecerias().subscribe(data => {
          data.forEach(item => {
            const markerLoc = new google.maps.LatLng(item.lat, item.lng);
            //console.log(markerLoc.lat());
            const  distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, this.centerUserLoc) / 1000;
             console.log(distanceInKm);
             console.log('radio: '+ this.radioUserLoc / 1000);
            if (distanceInKm < this.radioUserLoc / 1000) {
              this.markers.push({'lat':Number(item.lat),'lng':Number(item.lng),'nombreCer':item.nombreCer,'ubicacionCer':item.ubicacionCer,'slug':item.slug,'urlImagenCer':item.urlImagenCer});
            }
          });
          //console.log(this.markers);
        });
      });
   }else{
     console.log('BLOQUEADO EL LOCATION!');
     this._conectapiService.getCervecerias().subscribe(data => {
       data.forEach(item => {
         this.markers.push({'lat':Number(item.lat),'lng':Number(item.lng),'nombreCer':item.nombreCer,'ubicacionCer':item.ubicacionCer,'slug':item.slug,'urlImagenCer':item.urlImagenCer});
       });
     }
   }

 });



}
verCerveceria(slug:string){
  this.router.navigate(['/cerveceria',slug])
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  nombreCer: string;
  ubicacionCer: string;
  slug: string;
  urlImagenCer: string;
	//label?: string;
	//draggable: boolean;
}

interface circle {
  latUserLoc: number;
  lngUserLoc: number;
  radioUserLoc: number;
	//label?: string;
	//draggable: boolean;
}
