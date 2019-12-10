import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product, Category } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _baseUrl = `${environment.baseUrl}/product-service`;
  constructor(private http: HttpClient) { }
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this._baseUrl}/products`);
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this._baseUrl}/categories`);
  }
  getAllProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this._baseUrl}/products/category/${categoryId}`);
  }
}
