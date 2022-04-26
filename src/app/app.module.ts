import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    CardComponent,
    DialogComponent,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
