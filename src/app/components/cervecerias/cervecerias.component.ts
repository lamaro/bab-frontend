import { Component, OnInit } from '@angular/core';
import { CerveceriasService } from '../../services/cervecerias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cervecerias',
  templateUrl: './cervecerias.component.html',
  styleUrls: ['./cervecerias.component.css']
})
export class CerveceriasComponent implements OnInit {

  posts:any[]=[];

  constructor(public _conectapiService:CerveceriasService,private router:Router) { }

  ngOnInit() {
    this._conectapiService.getCervecerias().subscribe(data => {
      console.log(data);
      this.posts = data;
    });

  }

  verCerveceria(idx:number){
    this.router.navigate(['/cerveceria',idx])
    //console.log(idx);
  }

}
