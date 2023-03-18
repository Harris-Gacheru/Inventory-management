import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product!: any
  productsForm!: FormGroup
  successMsg: string = ''
  errorMsg: string = ''

  constructor(private fb: FormBuilder, private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.productsForm = this.fb.group({
      name: ['', Validators.required],
      price: [ , Validators.required],
      quantity: [ , Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.productsService.getProduct(params['id']).subscribe(
          res => {
            this.product = res.data

            this.productsForm = this.fb.group({
              name: [this.product.name, Validators.required],
              price: [this.product.price, Validators.required],
              quantity: [this.product.quantity, Validators.required],
              description: [this.product.description, Validators.required]
            })
          }
        )
      }
    )
  }

  submit(){
    this.productsService.updateProduct(this.product.id, this.productsForm.value).subscribe(
      res => {
        this.errorMsg = ''
        this.successMsg = res.message

        setTimeout(() => {
          this.router.navigate([`/products/${this.product.id}`])
        }, 2000);
      }, err => {
        this.successMsg = ''
        this.errorMsg = err.error.error || err.error.message  
      }
    )
  }
}
