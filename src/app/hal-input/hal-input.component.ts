import { Component, OnInit } from '@angular/core';
import {GlobalVarService} from './../global-var.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-hal-input',
  templateUrl: './hal-input.component.html',
  styleUrls: ['./hal-input.component.css']
})
export class HalInputComponent implements OnInit {

  constructor(private globaldata:GlobalVarService, private router:Router){}
  
  ngOnInit() {
  }
  
  id='';
  jurusan:String='';
  penjelasan:String='';
  databaru:any;
  submit(){
    this.databaru=
      {
        id:this.globaldata.getId(),
        jurusan:this.jurusan,
        penjelasan:this.penjelasan
      }
    ;
    this.globaldata.tambahData(this.databaru);
    this.router.navigate(['']);
  }
}