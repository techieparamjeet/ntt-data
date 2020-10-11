import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports : [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatSnackBarModule
    ],
    exports : [
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatChipsModule,
        MatSlideToggleModule,
        MatSnackBarModule
    ]
})

export class AngularMaterialModule {}