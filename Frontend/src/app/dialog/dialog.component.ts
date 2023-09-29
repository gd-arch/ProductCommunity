import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from '../services/login.service';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

  reviewForm !: FormGroup;
  userName: any = this.loginService.getUserName();
  emailId: any = this.loginService.getEmailId();
  constructor(
    private formBuilder: FormBuilder,
    private api: ReviewService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<DialogComponent>,
    private loginService: LoginService

  ) {

   
  }

  ngOnInit(): void {

    this.reviewForm = this.formBuilder.group(
      {
        heading: ['', Validators.required],
        rating: ['', Validators.required],
        review: ['', Validators.required]
      }
    );
  }

  addReview() {
    if (this.data != null)
      if (this.reviewForm.valid) {
        let data = this.reviewForm.value;
        data.userName = this.userName;
        data.emailId = this.emailId;
        this.api.putReview(data, this.data.productCode).subscribe({
          next: (res) => {
            
            alert("Successfully added review");
            this.reviewForm.reset;
            this.dialogRef.close('save');

          },
          error: (errorRes) => {
            alert(errorRes.error.message);
          }
        });
      }

  }



}

