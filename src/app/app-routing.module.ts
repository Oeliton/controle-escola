import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CHomeComponent } from "./views/home/c-home/c-home.component";
import { CUserRegComponent } from "./views/register/user/c-user-reg/c-user-reg.component";
import { CStudentRegComponent } from "./views/register/student/c-student-reg/c-student-reg.component";

const routes: Routes = [
  {
    path: "",
    component: CHomeComponent
  },{
    path: "user/reg",
    component: CUserRegComponent
  },{
    path: "student/reg",
    component: CStudentRegComponent
  },{
    path: "student/reg/:id",
    component: CStudentRegComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
