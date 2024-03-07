import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Add CommonModule to imports array
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();

  }
  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }
  updateEmployee(id: number) {
    this.router.navigate(['update-employee', id]);
  }

  viewEmployee(id: number) {
    this.router.navigate(['employee-details', id]);
  }
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe(data => {
      console.log("Deleted Successfully");
      this.getEmployees();
    })
  }
}
