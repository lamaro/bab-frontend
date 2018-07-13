import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { CerveceriasService } from '../../services/cervecerias.service';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';


@Component({
  selector: 'app-mapa-home',
  templateUrl: './mapa-home.component.html',
  styleUrls: ['./mapa-home.component.css']
})

export class MapaHomeComponent{
  constructor(
    private mapsAPILoader: MapsAPILoader,
    public _conectapiService:CerveceriasService,
    private router:Router
  ){}

  // Parametros iniciales del mapa
  zoom: number = 12;
  lat: number = -34.59433815911231;
  lng: number = -58.4236350560447;
  location: any = {};
  latUserLoc: number = -34.59433815911231;
  lngUserLoc: number = -58.4236350560447;
  //Parametros del usuario
  centerUserLoc:any;
  radioUserLoc:number = 2500;
  //Marcadores y Circulos
  markers: marker[] = [];
  circles: circle[] = [];
  markersAll:marker[] = [];

  //Estilos del mapa - theme
  styles:any[]=[
    {"elementType": "geometry","stylers": [{"color": "#212121"}]},
    {"elementType": "labels.icon","stylers": [{"visibility": "off"}]},
    {"elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
    {"elementType": "labels.text.stroke","stylers": [{"color": "#212121"}]},
    {"featureType": "administrative","elementType": "geometry","stylers": [{"color": "#757575"},{"visibility": "off"}]},
    {"featureType": "administrative.country","elementType": "labels.text.fill","stylers": [{"color": "#9e9e9e"}]},
    {"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#bdbdbd"}]},
    {"featureType": "poi","stylers": [{"visibility": "off"}]},
    {"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
    {"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#181818"}]},
    {"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
    {"featureType": "poi.park","elementType": "labels.text.stroke","stylers": [{"color": "#1b1b1b"}]},
    {"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#2c2c2c"}]},
    {"featureType": "road","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
    {"featureType": "road","elementType": "labels.text.fill","stylers": [{ "color": "#8a8a8a"}]},
    {"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#373737"}]},
    {"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#3c3c3c"}]},
    {"featureType": "road.highway.controlled_access","elementType": "geometry","stylers": [{"color": "#4e4e4e"}]},
    {"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#616161"}]},
    {"featureType": "transit","stylers": [{"visibility": "off"}]},
    {"featureType": "transit","elementType": "labels.text.fill","stylers": [{"color": "#757575"}]},
    {"featureType": "water","elementType": "geometry","stylers": [{"color": "#000000"}]},
    {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#3d3d3d"}]}
  ];

  //METODOS
  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      if(navigator.geolocation){ //corregir este if no detecta desicion del usuario allow location
        //Ubicación del usuario
        navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        this.latUserLoc = position.coords.latitude;
        this.lngUserLoc = position.coords.longitude;
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.centerUserLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        //Agrego el circulo
        this.circles.push({'latUserLoc':Number(this.lat),'lngUserLoc':Number(this.lng),'radioUserLoc':this.radioUserLoc});
        //Agrego los marcadores
        this._conectapiService.getCervecerias().subscribe(data => {
          data.forEach(item => {
            const markerLoc = new google.maps.LatLng(item.lat, item.lng);
            this.markersAll.push({
              'lat':Number(item.lat),
              'lng':Number(item.lng),
              'nombreCer':item.nombreCer,
              'ubicacionCer':item.ubicacionCer,
              'slug':item.slug,
              'urlImagenCer':item.urlImagenCer,
              'promBebCer':item.promBebCer,
              'promComCer':item.promComCer,
              'markerLoc':markerLoc,
              'distance':0
            });
            const distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, this.centerUserLoc) / 1000;
            if (distanceInKm < this.radioUserLoc / 1000) {
              this.markers.push({
                'lat':Number(item.lat),
                'lng':Number(item.lng),
                'nombreCer':item.nombreCer,
                'ubicacionCer':item.ubicacionCer,
                'slug':item.slug,
                'urlImagenCer':item.urlImagenCer,
                'promBebCer':item.promBebCer,
                'promComCer':item.promComCer,
                'markerLoc':markerLoc,
                'distance':distanceInKm
              });
            }
          }); //fin foreach
        }); //fin suscribe
      }); //fin getCurrentPosition
     }
   });
 }//Fin ngOnInit

  verCerveceria(slug: string){
    this.router.navigate(['/cerveceria',slug])
  }

  cambiaRadio($event: MouseEvent){
    this.markers = [];
    this.radioUserLoc = Number($event) / 1000;
    //this._conectapiService.getCervecerias().subscribe(data => {
      this.markersAll.forEach(item => {
        //const markerLoc = new google.maps.LatLng(item.lat, item.lng);
        const distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(item.markerLoc, this.centerUserLoc) / 1000;
        if (distanceInKm < this.radioUserLoc) {
          this.markers.push({
            'lat':Number(item.lat),
            'lng':Number(item.lng),
            'nombreCer':item.nombreCer,
            'ubicacionCer':item.ubicacionCer,
            'slug':item.slug,
            'urlImagenCer':item.urlImagenCer,
            'promBebCer':item.promBebCer,
            'promComCer':item.promComCer,
            'markerLoc':item.markerLoc,
            'distance':distanceInKm
          });
        }
      });
    //});
  }

  markersConFiltro(lat:number,lng:number,kms:number){ //NO SE USA
    const markerLoc = new google.maps.LatLng(lat, lng);
    this._conectapiService.getCervecerias().subscribe(data => {
      this.markers.forEach(item => {
        const  distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, this.centerUserLoc) / 1000;
        if (distanceInKm < kms / 1000) {
          this.markers.push({'lat':Number(item.lat),'lng':Number(item.lng),'nombreCer':item.nombreCer,'ubicacionCer':item.ubicacionCer,'slug':item.slug,'urlImagenCer':item.urlImagenCer,'promBebCer':item.promBebCer,'promComCer':item.promComCer,'markerLoc':item.markerLoc,'distance':item.distance});
        }
      })
    })
  }

 clickedMarker(label: string, index: number) {
   console.log(`clicked the marker: ${label || index}`)
 }

 mapClicked($event: MouseEvent) { //NO SE USA
 /*
   this.markers.push({
     lat: $event.coords.lat,
     lng: $event.coords.lng,
   });
 */
 }

 cambiaCentro($event: MouseEvent){ //NO SE USA
 }

 markerDragEnd(m: marker, $event: MouseEvent) { // NO SE USA
   console.log('dragEnd', m, $event);
 }
} //Fin clase MapaHomeComponent



// Interfaces
interface marker {
	lat: number;
	lng: number;
  nombreCer: string;
  ubicacionCer: string;
  slug: string;
  urlImagenCer: string;
  markerLoc: any;
  distance:any;
  promBebCer: string;
  promComCer: string;
}

interface circle {
  latUserLoc: number;
  lngUserLoc: number;
  radioUserLoc: number;
}
