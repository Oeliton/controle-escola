import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {UserModel} from "./m-user-reg/m-user-reg.module"

@Injectable({
  providedIn: 'root'
})
export class SUserRegService {

  baseUrl = "http://localhost:3001/user";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  
  create(userModel: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.baseUrl, userModel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<UserModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<UserModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(userModel: UserModel): Observable<UserModel> {
    const url = `${this.baseUrl}/${userModel.id}`;
    return this.http.put<UserModel>(url, userModel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<UserModel> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<UserModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
