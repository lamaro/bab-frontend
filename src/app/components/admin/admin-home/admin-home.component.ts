import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../../services/cervecerias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  cervecerias:any[]=[];

  constructor(public _conectapiService:CerveceriasService,private router:Router) { }

  ngOnInit() {
    this._conectapiService.getCervecerias().subscribe(data => {
      console.log(data);
      this.cervecerias = data;
    });

  }

  verCerveceria(slug:string){
    this.router.navigate(['/cerveceria',slug])
  }

  addCerveceria(){
    this.router.navigate(['/cervecerias','add'])
  }

  deleteCerveceria(id:string){
    this.router.navigate(['/cervecerias','delete',id])
  }

  updateCerveceria(id:string){
    this.router.navigate(['/cervecerias','update',id])
  }

}
