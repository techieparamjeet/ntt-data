import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { EnrolleesListComponent } from './enrollees-list/enrollees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditEnrolleeDialogComponent } from './edit-enrollee-dialog/edit-enrollee-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrolleesListComponent,
    EditEnrolleeDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
