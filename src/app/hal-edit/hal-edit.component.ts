import { Component, OnInit } from '@angular/core';
import {GlobalVarService} from './../global-var.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-hal-edit',
  templateUrl: './hal-edit.component.html',
  styleUrls: ['./hal-edit.component.css']
})
export class HalEditComponent implements OnInit {

  constructor(private globaldata:GlobalVarService, private router:Router,private aroute:ActivatedRoute) { }

  idpass=10;
  data:any;
  jurusan;
  penjelasan;
  databaru:any;
  ngOnInit() {
    let id= this.aroute.snapshot.paramMap.get('id');
    this.idpass=id;
    this.data=this.globaldata.getData();
    this.jurusan=this.data[this.idpass].jurusan;
    this.penjelasan=this.data[this.idpass].penjelasan;
  }
  update(){
    this.databaru={
      id:this.idpass,
      jurusan:this.jurusan,
      penjelasan:this.penjelasan
    };
    this.globaldata.updateData(this.databaru);
    this.router.navigate(['']);
  }



}