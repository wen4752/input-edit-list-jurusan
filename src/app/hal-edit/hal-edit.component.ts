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

  idpass;
  ngOnInit() {
    this.idpass= this.aroute.snapshot.paraMap.get('id');
  }


}