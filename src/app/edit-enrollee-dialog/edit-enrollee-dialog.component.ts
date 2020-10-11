import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataService } from './../shared/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-enrollee-dialog',
  templateUrl: './edit-enrollee-dialog.component.html',
  styleUrls: ['./edit-enrollee-dialog.component.scss']
})
export class EditEnrolleeDialogComponent implements OnInit, OnDestroy {

  enrolleeForm : FormGroup;
  updateEnrolleeSub : Subscription;

  constructor(
    public dialogRef: MatDialogRef<EditEnrolleeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private dataService : DataService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createForm();
  }

  //Create enrollee form
  createForm(){;
    this.enrolleeForm = new FormGroup({
      id : new FormControl({value: this.data.id, disabled: true}),
      dateOfBirth : new FormControl(
        {
          value: this.data.dateOfBirth, 
          disabled: this.data.dateOfBirth ? true : false
        },
        this.data.dateOfBirth ? null : Validators.required
      ),
      name : new FormControl(this.data.name, [Validators.required]),
      active : new FormControl(this.data.active, [Validators.required])
    })
  }

  //Closes dialog
  cancelUpdate(): void {
    this.dialogRef.close();
  }

  //Submits data to update enrollee api
  onEnrolleeSubmit(){
    const enrolleeObj = this.enrolleeForm.value;
    if(this.data.dateOfBirth){
      enrolleeObj['dateOfBirth'] = this.data.dateOfBirth; //Added this if date is blank
    }
    
    console.log(enrolleeObj);
    this.updateEnrolleeSub = this.dataService.updateEnrollee(this.data.id, enrolleeObj).subscribe((res)=>{
      if(res){
        this.openSnackBar('Enrollee updated successfully','');
      }
    })
  }

  //Shows snackbar
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  //Unsubscribe the subscriptions
  ngOnDestroy(){
    if(this.updateEnrolleeSub){
      this.updateEnrolleeSub.unsubscribe();
    }
  }

}
