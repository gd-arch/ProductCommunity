import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['productCode', 'productName', 'brand', 'price', 'rating', 'addReview'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(public dialog: MatDialog, private productService: ProductService, private router: Router) {

  }
  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts() {
    this.productService.getProducts()
      .subscribe(
        {
          next: (res: { [x: string]: any; }) => {

            for (let property in res) {
              let product = res[property];
              let avgRating: string;
              this.productService.getRating(product.productCode).subscribe(
                {
                  next: (res: any) => {
                    avgRating = res;
                    if (avgRating != '0') {
                      product.rating = avgRating;
                    }
                    else {
                      product.rating = '';
                    }

                  },
                  error: (err: any) => { alert("error while fetching the rating"); }
                }
              );

            }

            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          error: (err: any) => {
            alert("error while fetching the records");
          }
        }
      )
  }

  getRating(productCode: string) {
    let avgRating: any;
    this.productService.getRating(productCode).subscribe(
      {
        next: (res: any) => {

          avgRating = res;
        },
        error: (err: any) => { alert("error while fetching the rating"); }
      }
    );

    return avgRating;
  }

  addReview(productCode: any) {
    this.router.navigate(['/review'], { queryParams: { data: productCode } });
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
