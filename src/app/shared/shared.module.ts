import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AngularMaterialModule } from './custom_modules/angular-material.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    HeaderComponent,
    AngularMaterialModule
  ]
})
export class SharedModule { }
