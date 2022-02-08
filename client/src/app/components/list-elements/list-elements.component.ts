import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/Models';
import { EmployeService } from 'src/app/service/employe.service';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent implements OnInit {


  displayedColumns: string[] = ['id','name','email','salary','delete','edit'];
  employes:Employe[] = [];

  constructor(private employservice: EmployeService) { }


  ngOnInit(): void {
      this.updateEmployes();
  } 

  updateEmployes(){
    this.employservice.findAll().subscribe(
      res =>{this.employes = res;},
      err =>{alert(err)}
    );
  }

  delete(id:number){
    this.employservice.delete(id).subscribe(
      res =>{
        this.updateEmployes();
      },
      err => {console.log(err)}
    );
    
  }

}
