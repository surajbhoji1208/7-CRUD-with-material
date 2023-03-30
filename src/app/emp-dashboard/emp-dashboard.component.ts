import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { ServiceService } from '../serviece/service.service';
import { UpdateComponent } from '../update/update.component';
import { ViewEmpComponent } from '../view-emp/view-emp.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.css']
})
export class EmpDashboardComponent implements OnInit {
 


  constructor(private http: ServiceService, public dialog: MatDialog) { }

  openDialog()
  {
    this.dialog.open(AddEmpComponent, {
      
    });
  }

                           //show data in table

  empData: any  //this variable store the data which is comming from the db.json 
  displayedColumns: string[] = ['empno', 'name', 'email', 'salary'];
  public dataSource:any=[]
  ngOnInit(): void {
    this.http.getEmpService().subscribe(res => {     //to get data from the db.json to table
      // this.empData = res;
      this.dataSource=res
        })
   }






   

                              // to delete data
  deleteEmp(id: any) {
    this.http.deleteEmpService(id).subscribe(res => {

    })
    location.reload()

  }

                             //to view emp details
  viewEmp(data1: any) {
    this.dialog.open(ViewEmpComponent, {
      data: {
        id: data1.empno,
        name: data1.name,
        email: data1.email,
        salary: data1.salary
      },
    });
    console.table(data1);
    
    
  }
                             //to update data
updateEmp(data2:any)
{
  
    this.dialog.open(UpdateComponent , {
      data: {
        id: data2.id,
        name: data2.name,
        email: data2.email,
        salary: data2.salary,
        empno:data2.empno
      },
    });
  
}
}

