import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';
import { EditEmployeComponent } from './components/edit-employe/edit-employe.component';
import { ListElementsComponent } from './components/list-elements/list-elements.component';

const routes: Routes = [
  {path:'', redirectTo: 'employes', pathMatch: 'full'},
  {path:'employes', component:ListElementsComponent},
  {path:'add-employe',component:AddEmployeComponent},
  {path:'edit-employe/:id',component:EditEmployeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
