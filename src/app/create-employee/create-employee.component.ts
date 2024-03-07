import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule,CommonModule,HttpClientModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,
    private router:Router
    ) {

  }
  ngOnInit(): void {

  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log("Data saved successfully",data);
      this.goToEmployeeList();
    })
  };
  goToEmployeeList(){
      this.router.navigate(['/employees']);
  }
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
