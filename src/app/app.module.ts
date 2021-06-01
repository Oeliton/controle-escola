import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatCardModule } from  '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from  '@angular/material/button';
import { MatSnackBarModule } from  '@angular/material/snack-bar';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { registerLocaleData } from  '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import localePt from '@angular/common/locales/pt';

import { CStudentNewComponent } from './component/register/student/c-student-new/c-student-new.component';
import { CStudentSearchComponent } from './component/register/student/c-student-search/c-student-search.component';
import { CUserNewComponent } from './component/register/user/c-user-new/c-user-new.component';
import { CUserSearchComponent } from './component/register/user/c-user-search/c-user-search.component';
import { CFooterComponent } from './component/template/footer/c-footer/c-footer.component';
import { CHeaderComponent } from './component/template/header/c-header/c-header.component';
import { CNavComponent } from './component/template/nav/c-nav/c-nav.component';
import { CHomeComponent } from './views/home/c-home/c-home.component';
import { CStudentRegComponent } from './views/register/student/c-student-reg/c-student-reg.component';
import { CUserRegComponent } from './views/register/user/c-user-reg/c-user-reg.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    CStudentNewComponent,
    CStudentSearchComponent,
    CUserNewComponent,
    CUserSearchComponent,
    CFooterComponent,
    CHeaderComponent,
    CNavComponent,
    CHomeComponent,
    CStudentRegComponent,
    CUserRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    CdkTreeModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatTabsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
