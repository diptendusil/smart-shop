import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, VirtualTimeScheduler } from 'rxjs';
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
  getAllProductsInStock(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this._baseUrl}/products/in-stock`);
  }
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this._baseUrl}/categories`);
  }
  getAllProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this._baseUrl}/products/category/${categoryId}`);
  }
  getProductById(productCode: string): Observable<Product> {
    return this.http.get<Product>(`${this._baseUrl}/products/${productCode}`);
  }

  getSuggestions(userId:string) {
    console.log('suggestion');
    
    return this.http.get<Product[]>(`${this._baseUrl}/products/suggestion/${userId}`);
  }

  getSearch(text:string) {
    return this.http.get<Product[]>(`${this._baseUrl}/products/search/${text}`);
  }

  addProduct(product:Product)
  {
    return this.http.post<void>(`${this._baseUrl}/products`,product);
  }
  updateProduct(product: Product):Observable<any> {
    return this.http.put(`${this._baseUrl}/products`,product);
  }
  getCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this._baseUrl}/categories/${categoryId}`);
  }
  deleteCategoryById(categoryId: number): Observable<any> {
    return this.http.delete<void>(`${this._baseUrl}/categories/${categoryId}`);
  }
  addCategory(category: Category): Observable<any> {
    return this.http.post<void>(`${this._baseUrl}/categories`, category);
  }
  updateCategory(category: Category): Observable<any> {
    return this.http.put<void>(`${this._baseUrl}/categories`, category);
  }
  deleteProduct(productCode: string) {
    return this.http.delete(`${this._baseUrl}/products/${productCode}`);
  }
}
