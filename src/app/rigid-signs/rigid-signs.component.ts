import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { ProductListComponent } from '../features/product/components/product-list/product-list.component';

@Component({
  selector: 'app-rigid-signs',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './rigid-signs.component.html',
  styleUrls: ['./rigid-signs.component.css']
})
export class RigidSignsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) { }

  imageSrc: string = '';
  data: string = 'Rigid Signs Component';
  category: any;
  subCategory: any;
  products: any[] = [];
  selectedProduct: any;
  allProductsBySubCategory: any[] = [];
  showDetails: boolean = false;

  setImage(newSrc: string) {
    this.imageSrc = newSrc;
  }

  setData(newSrc: string) {
    this.data = newSrc;
  }

  getProductsByCategory(categoryName: string, subCategoryName: string) {
    this.productService.getProducts().subscribe(data => {
      this.category = data.find((cat: any) => cat.name === categoryName);
      if (this.category) {
        if (subCategoryName !== '') {
          this.subCategory = this.category.subCategories.find((subCat: any) => subCat.name === subCategoryName);
          if (this.subCategory) {
            this.products = this.subCategory.products;
          }
        } else {
          this.allProductsBySubCategory = this.category.subCategories.map((subCat: any) => {
            return {
              name: subCat.name,
              products: subCat.products
            };
          });
        }
      }
      this.cdr.detectChanges(); // Notify Angular about the changes
    });
  }

  showProductDetails(product: any) {
    this.selectedProduct = product;
    this.showDetails = true;
    this.cdr.detectChanges(); // Notify Angular about the changes
  }

  ngOnInit(): void {
    // Call the function to fetch product data
    //this.getProductsByCategory('RIGID SIGNS', '');
  }
}
