import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobalVarService } from './global-var.service';
import { HalInputComponent } from './hal-input/hal-input.component';
import { HalEditComponent } from './hal-edit/hal-edit.component';
import { HalListComponent } from './hal-list/hal-list.component';
import {Routes,RouterModule} from '@angular/router';


const routes:Routes =[
  {path:'',component:HalInputComponent},
  {path:'edit',component:HalEditComponent},
  {path:'list',component:HalListComponent}
];

@NgModule({
  imports:      [ 
    BrowserModule,
     FormsModule,
     RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, HalInputComponent, HalEditComponent, HalListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalVarService]
})

export class AppModule { }
