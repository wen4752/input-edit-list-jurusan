import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {
  private jumlahid=2;
  private Data =[
    {
      id:0,
      jurusan:'Informatika',
      penjelasan:'Belajar Programming'
    },
    {
      id:1,
      jurusan:'Keuangan',
      penjelasan:'Belajar Keuangan'
    }
  ];

  getData(){return this.Data;}
  public setData(dataBaru){this.Data=dataBaru;}
  
}