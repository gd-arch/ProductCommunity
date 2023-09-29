import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.sass']
})
export class ReviewComponent implements OnInit {
  public productCode:any;
  public reviewList:any;
  constructor(private route:ActivatedRoute,private reviewService:ReviewService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any)=>{
      this.productCode=params.data;
      this.loadReviews();

    });

  }
  loadReviews(){
    this.reviewService.getReviews(this.productCode).subscribe({
      next:(res)=>{
        console.log(res);
        this.reviewList=res;
      }
    });
  }

  addReviewDialog(){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:{'productCode':this.productCode}
    }).afterClosed().subscribe(val=>{
     this.loadReviews();
    })
  }
 

}
