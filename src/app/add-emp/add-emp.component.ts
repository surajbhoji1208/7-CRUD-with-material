import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from '../serviece/service.service';
import { DialogData } from '../update/update.component';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  //form design start from here
  formValue = new FormGroup({
    empno: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email]),
    salary: new FormControl(''),

  })                                         //this is for the dialog box                                                                
  
  constructor(private http: ServiceService, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  get email()
  {
    return this.formValue.get('email')
  }

  //end here
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  addEmp()//to add data in to db.json
  {

    this.http.addEmpService(this.formValue.value).subscribe(res => {

    })
    location.reload()
  }

}
