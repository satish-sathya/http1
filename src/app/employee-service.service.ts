import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { IEmployee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

private  _url:string ="/assets/data/employees.json";

  constructor(private http: HttpClient) { }

getEmployees(): Observable<IEmployee[]>
{
  return this.http.get<IEmployee[]>(this._url);
}
}
