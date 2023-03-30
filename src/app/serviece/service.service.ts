import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  addEmpService(data:any)  //add data to db.json from reactive form
  {
    return this.http.post(' http://localhost:3000/EmpDetails',data)
  }

  getEmpService()     //to get data from the debugger.json
  {
    return this.http.get('http://localhost:3000/EmpDetails')
    
  }

  deleteEmpService(id:any) //to delete data from table
  {
    return this.http.delete('http://localhost:3000/EmpDetails/'+id)
  }

  updateEmpService(id:any,data:any)//to update value in db.json
  {
    return this.http.put('http://localhost:3000/EmpDetails/'+id,data)
    
    
  }

}
