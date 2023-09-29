import { Component, OnInit } from '@angular/core';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public members:any;
  public reviews:any;
  public posts:any;

  constructor(private statService:StatsService) {
    let stats:any;
    this.statService.getStats()
    .subscribe({next:(res:any)=>{
     stats=res;
     
    this.members=stats.countUsers;
    this.reviews=stats.countReviews;
    this.posts=stats.countPosts; 
    },
  error:()=>{
    alert("Some error occured while loading data in!!")
  }});


  }

  ngOnInit(): void {
    
    
    
  }

}
