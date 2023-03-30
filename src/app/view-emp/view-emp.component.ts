import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
 id:any
 name:any
 email:any
 salary:any
}
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log(data);
    
  }

  ngOnInit(): void {
  }

}
