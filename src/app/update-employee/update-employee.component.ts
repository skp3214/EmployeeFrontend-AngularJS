import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  id: number = 0;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) 
  {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee=data;
      console.log("Data Received", data);
    });
  }

  onSubmit(){
    this.employeeService.updateEmployeeById(this.id, this.employee).subscribe(data=>{
      this.goToEmployeeList()
    })
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
}

}
