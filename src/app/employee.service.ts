// employee.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.baseUrl, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployeeById(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }
  deleteEmployeeById(id: number) :Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.baseUrl}/${id}`);
  }
}
