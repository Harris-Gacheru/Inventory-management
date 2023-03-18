import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product!: any
  successMsg: string = ''
  errorMsg: string = ''

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if (params['id']) {
          this.productsService.getProduct(params['id']).subscribe(
            res => this.product = res.data
          )          
        }        
      }
    )
  }

  delete(id: string) {
    this.productsService.deleteProduct(id).subscribe(
      res => {
        this.errorMsg = ''
        this.successMsg = res.message

        setTimeout(() => {
          this.router.navigate(['/products'])
        }, 2000);
      }, err => {
        this.successMsg = ''
        this.errorMsg = err.error
      }
    )
  }
}
