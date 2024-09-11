import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule, registerLocaleData } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import localeFr from "@angular/common/locales/fr";
import { ProductsService } from '../products.service';
import { FilterByNamePipe } from '../filter-by-name.pipe';
import { SortByPricePipe } from '../sort-by-price.pipe';
registerLocaleData(localeFr)

export interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  picture: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByNamePipe, SortByPricePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR"}]
})

export class HomeComponent implements OnInit {
  products: Product[] = [];
  selectedProductId: number = 1;
  searchTerm: string = "";
  order: "asc" | "desc" = "asc";

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  sortProducts(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    if (value === "asc" || value === "desc") {
      this.order = value;
    }
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  viewProduct(productId: number) {
    this.selectedProductId = productId;
    this.router.navigate(["/product", productId]);
  }

}
