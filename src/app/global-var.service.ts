import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarService {
  private jumlahid=1;
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
  public tambahData(dataBaru){this.Data.push(dataBaru);}
  getId(){this.jumlahid+=1;return this.jumlahid;}
}