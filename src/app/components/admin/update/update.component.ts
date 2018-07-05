import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../../services/cervecerias.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {

	cerveceria:Object = {
	}

  constructor(public _cerveceriasService:CerveceriasService,
  			  private activatedRoute:ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe( params => {
      console.log(params['id']);
      this._cerveceriasService.getCerveceriaById(params['id'])
      .subscribe(data => this.cerveceria = {
        _id: data['_id'],
        id: data['id'],
        slug: data['slug'],
      	nombreCer: data['nombreCer'],
      	ubicacionCer: data['ubicacionCer'],
      	urlImagenCer: data['urlImagenCer'],
      	promBebCer: data['promBebCer'],
      	promComCer: data['promComCer'],
      	lat: data['lat'],
        lng: data['lng']
    });

    });
  }

  modificar(){
    console.log(this.cerveceria);
    this._cerveceriasService.updateCerveceria(this.cerveceria).subscribe(res => {console.log('subscribe'); this.router.navigate(['cervecerias']) });
  }

  cancelar(){
    this.router.navigate(['/cervecerias'])
  }

}
