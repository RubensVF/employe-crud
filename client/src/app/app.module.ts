import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { EmployeService }  from './service/employe.service';
import { NavegationComponent } from './components/navegation/navegation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ListElementsComponent } from './components/list-elements/list-elements.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEmployeComponent } from './components/add-employe/add-employe.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { EditEmployeComponent } from './components/edit-employe/edit-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    NavegationComponent,
    ListElementsComponent,
    AddEmployeComponent,
    EditEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    EmployeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
