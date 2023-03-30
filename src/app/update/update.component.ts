import { Component, Inject, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../serviece/service.service';
// import { DialogData } from '../view-emp/view-emp.component';


export interface DialogData {
  empno:any
  id: any
  name: any
  email: any
  salary: any
}
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private http:ServiceService) {}

  ngOnInit(): void {
  }

  updateForm=new FormGroup({
    empno:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl(''),
    salary:new FormControl('')
  })
 
updateValue(data1:any)
{
  this.http.updateEmpService(data1,this.updateForm.value).subscribe(res=>{})
  location.reload()
}
  
}
