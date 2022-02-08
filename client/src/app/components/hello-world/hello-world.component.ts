import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/models/Models';
import { EmployeService } from 'src/app/service/employe.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  name = 'rubs code';
  employes:any = [];

  constructor(private empolyeService:EmployeService) { }

  ngOnInit(): void {
    this.empolyeService.findAll().subscribe(
        res =>{this.employes = res},
        err =>{console.log(err)})
  }

}
