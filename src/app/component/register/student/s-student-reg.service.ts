import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {Student} from "./m-student-reg/m-student-reg.module"


@Injectable({
  providedIn: 'root'
})
export class SStudentRegService {

  student: Student[] | undefined;

  baseUrl = "http://127.0.0.1:8090/student";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(studentModel: Student): Observable<Student>{
    return this.http.post<Student>(`${ this.baseUrl}/save`, studentModel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    
  }

  read(): Observable<Student[]> {
    return this.http.get<Student[]>(`${ this.baseUrl}/list`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Student> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Student>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(studentModel: Student): Observable<Student> {
    const url = `${this.baseUrl}/partial/${studentModel.id}`;
    return this.http.patch<Student>(url, studentModel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Student> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete<Student>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
