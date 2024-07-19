import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { GetOptionProductMutation } from '../../../../graphql/generated';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: GetOptionProductMutation['getOptionProduct'] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductOptions('5284a47c222aad541400050d').subscribe(data => {
      this.products = data;
    });
  }
}
