import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/Models';
import { EmployeService } from 'src/app/service/employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  newemploye:Employe = {
    name:'',
    email:'',
    salary: 0
  }

  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
  }

  sendData(){
    this.employeService.save(this.newemploye).subscribe(
      res =>{alert("Employ saved")
            this.newemploye = {
              name:'',
              email:'',
              salary: 0
            } },
      err =>{alert(err)}
    )
  }

}
