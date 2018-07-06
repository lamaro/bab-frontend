import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../../services/cervecerias.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  cerveceria:Object ={}
  coordenadas:Object ={}

  constructor(public _cerveceriasService:CerveceriasService,
              private router: Router ) { }

  ngOnInit() {

  }

  alta(){
    console.log(this.cerveceria);
    this._cerveceriasService.addCerveceria(this.cerveceria).subscribe(res => {console.log('Agregado!'); this.router.navigate(['/admin']) });
  }

  cancelar(){
    this.router.navigate(['/admin'])
  }

  geocoderSer(){
    this.coordenadas = this._cerveceriasService.geocoder('Bogotá+367,Ciudad+de+Buenos+Aires,+Argentina');
    console.log(this.coordenadas);
  }

}
