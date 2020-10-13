import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { EditEnrolleeDialogComponent } from '../edit-enrollee-dialog/edit-enrollee-dialog.component';
import { DataService } from './../shared/services/data.service';
import { IEnrollee } from './../shared/interfaces/enrollee.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorMessages } from './../shared/constants/error-messages';

@Component({
  selector: 'app-enrollees-list',
  templateUrl: './enrollees-list.component.html',
  styleUrls: ['./enrollees-list.component.scss']
})
export class EnrolleesListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['id', 'active', 'name', 'dateOfBirth', 'action'];
  dataSource: MatTableDataSource<IEnrollee>;
  getEnrolleeSub: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getEnrolleesList();
  }

  // get enrollee list from API
  getEnrolleesList(): void {
    this.getEnrolleeSub = this.dataService.getEnrollees().subscribe((res: IEnrollee[]) => {
      if (res) {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }, (err) => {
      this.openSnackBar(ErrorMessages.enrolleeListError, '');
    });
  }

  // Shows snackbar
  openSnackBar(message: string, action: string): void {
    const snackbarRef = this.snackBar.open(message, action, {
      duration: 3000
    });
  }

  // Open edit enrollee dialog
  editEnrollee(id): void {
    const enrollee = this.dataSource.filteredData.filter((item) => {
      return item.id === id;
    });

    const dialogRef = this.dialog.open(EditEnrolleeDialogComponent, {
      width: '400px',
      data: enrollee[0]
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getEnrolleesList();
    });
  }

  // Filter values in table
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Unsubscribe the subscriptions
  ngOnDestroy(): void {
    if (this.getEnrolleeSub) {
      this.getEnrolleeSub.unsubscribe();
    }
  }
}

