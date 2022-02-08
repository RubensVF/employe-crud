import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/models/Models';
import { EmployeService } from 'src/app/service/employe.service';

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {

  employe :Employe = {
    id:undefined,
    name:'',
    email:'',
    salary:0
  };
  constructor(private route:ActivatedRoute, private employeService:EmployeService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id= Number(routeParams.get('id'));
    this.employe.id = id;
    this.employeService.findById(id).subscribe(
      res =>{
        this.employe = res;
      },
      err=>{
        console.log(err);
      }
    )
   }

   sendData(){
    this.employeService.update(this.employe).subscribe(
      res =>{alert("Employ Updated") },
      err =>{alert(err)}
    )}
}
