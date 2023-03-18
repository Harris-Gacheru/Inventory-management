import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productsForm!: FormGroup
  successMsg: string = ''
  errorMsg: string = ''

  constructor(private fb: FormBuilder, private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsForm = this.fb.group({
      name: ['', Validators.required],
      price: [ , Validators.required],
      quantity: [ , Validators.required],
      description: ['', Validators.required]
    })
  }

  submit(){    
    this.productsService.addProduct(this.productsForm.value).subscribe(
      res => {
        console.log(res);
        this.errorMsg = ''
        this.successMsg = res.message

        setTimeout(() => {
          this.router.navigate(['/products'])
        }, 2000);
      }, err => {
        this.successMsg = ''
        this.errorMsg = err.error.error || err.error.message       
      }
    )
  }
}
