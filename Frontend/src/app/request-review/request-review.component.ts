import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.sass']
})

export class RequestReviewComponent implements OnInit {
  public productForm !: FormGroup;


  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productCode: ['', Validators.required],
      productName: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required]

    })
  }
  addProduct() {
    let productCode = this.productForm.value.productCode;
    let productName = this.productForm.value.productName;
    
    if (this.productForm != null)
      if (this.productForm.valid)
        this.productService.putProduct(this.productForm.value).subscribe({
          next: (res) => {
            alert("Product request added");
            this.router.navigate(['/dashboard']);
          },
          error: (error) => { alert(error.error.message); }
        }
        );


  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate([uri]));
  }
}
