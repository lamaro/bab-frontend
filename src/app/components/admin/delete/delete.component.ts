import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../../services/cervecerias.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-del',
  templateUrl: './delete.component.html'
})

export class DeleteComponent implements OnInit {

  constructor(public _cerveceriasService:CerveceriasService,
              private activatedRoute:ActivatedRoute,
              private router:Router ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this._cerveceriasService.deleteCerveceria(params['id']).subscribe(res => {console.log('Eliminado!'); this.router.navigate(['/admin']) });
    })

  }


}
