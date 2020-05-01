import { Component, OnInit } from '@angular/core';
import {GlobalVarService} from './../global-var.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-hal-list',
  templateUrl: './hal-list.component.html',
  styleUrls: ['./hal-list.component.css']
})
export class HalListComponent implements OnInit {

  constructor(private globaldata:GlobalVarService, private router:Router) { }
  data:any;
  ngOnInit() {
    this.data=this.globaldata.getData();
  }
  edit(nomorid){
    this.router.navigate(['/edit',nomorid]);
  }
  


}