import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ImportCerveceriaService {

  constructor(public http: HttpClient) { }

  cerveceriasImport: any[]=[
  {
    "nombreCer": "Lekker Smokehouse",
    "slug": "cerve1",
    "lat": -34.5927674,
    "lng": -58.4244508,
    "ubicacionCer": "Honduras 4416",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "La casona de Humahuaca",
    "slug": "cerve2",
    "lat": -34.6029056,
    "lng": -58.414414,
    "ubicacionCer": "Humahuaca 3508",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Le Troquet de Henry",
    "slug": "cerve3",
    "lat": -34.6022972,
    "lng": -58.4136177,
    "ubicacionCer": "Guardia Vieja 3460",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "El bar de Roberto",
    "slug": "cerve4",
    "lat": -34.6071258,
    "lng": -58.4186117,
    "ubicacionCer": "Bulnes 331",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Birrary",
    "slug": "cerve5",
    "lat": -34.5608076,
    "lng": -58.4548205,
    "ubicacionCer": "Cuba 2111",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Casa China",
    "slug": "cerve6",
    "lat": -34.5573761,
    "lng": -58.4506161,
    "ubicacionCer": "Arribeños 2173",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Aldonza Bar",
    "slug": "cerve7",
    "lat": -34.5613059,
    "lng": -58.4506035,
    "ubicacionCer": "Mariscal Antonio José de Sucre 1920",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Tina & Co",
    "slug": "cerve8",
    "lat": -34.5569832,
    "lng": -58.4505787,
    "ubicacionCer": "Mendoza 1678",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Piaf",
    "slug": "cerve9",
    "lat": -34.5831214,
    "lng": -58.4443327,
    "ubicacionCer": "Av Dorrego 1605",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Baris",
    "slug": "cerve10",
    "lat": -34.5963472,
    "lng": -58.378224,
    "ubicacionCer": "Marcelo T. de Alvear 787",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Rosa de los Vientos",
    "slug": "cerve11",
    "lat": -34.623929,
    "lng": -58.3712141,
    "ubicacionCer": "Defensa 1376",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "La Bohème Creperie & Bar",
    "slug": "cerve12",
    "lat": -34.5834044,
    "lng": -58.4392434,
    "ubicacionCer": "Gorriti 5796",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Don Osvaldo",
    "slug": "cerve13",
    "lat": -34.5579133,
    "lng": -58.4568806,
    "ubicacionCer": "Blanco Encalada 2166",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Morgan Bar",
    "slug": "cerve14",
    "lat": -34.5606822,
    "lng": -58.4606603,
    "ubicacionCer": "Amenábar 2363",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Mercado Solidario Bonpland",
    "slug": "cerve15",
    "lat": -34.5836699,
    "lng": -58.4377295,
    "ubicacionCer": "Bonpland 1660",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Oveja Descarriada",
    "slug": "cerve16",
    "lat": -34.5953393,
    "lng": -58.429879,
    "ubicacionCer": "Aráoz 1047",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Gastropub Nola",
    "slug": "cerve17",
    "lat": -34.5935595,
    "lng": -58.4250841,
    "ubicacionCer": "Gorriti 4389",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "La espuma de los días",
    "slug": "cerve18",
    "lat": -34.5802557,
    "lng": -58.4254901,
    "ubicacionCer": "Güemes 4818",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Local Restaurante",
    "slug": "cerve19",
    "lat": -34.5779719,
    "lng": -58.4369693,
    "ubicacionCer": "Arévalo 2063",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Bio Restaurante",
    "slug": "cerve20",
    "lat": -34.581137,
    "lng": -58.4311078,
    "ubicacionCer": "Humboldt 2192",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Oliverio Bar",
    "slug": "cerve21",
    "lat": -34.5775901,
    "lng": -58.43876,
    "ubicacionCer": "Av Dorrego 2202",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  },
  {
    "nombreCer": "Estados Unidos 509",
    "slug": "cerve22",
    "lat": -34.6184655,
    "lng": -58.3731387,
    "ubicacionCer": "Estados Unidos 509",
    "urlImagenCer": "/assets/img/placeholder.jpg",
    "promBebCer": 3,
    "promComCer": 3
  }
];

importCervecerias(){
  return this.cerveceriasImport;

}

}
