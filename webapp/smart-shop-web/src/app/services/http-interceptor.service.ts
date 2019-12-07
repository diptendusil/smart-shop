import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  constructor(private authService: AuthService) { }
  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    console.log('Interceptor');
    const token  = this.authService.getToken();
    let newHeader = req.headers;
    if(token) {
      newHeader = newHeader.append('Authorization', `Bearer ${token}`)
    }
    const authReq = req.clone({headers: newHeader});
    return next.handle(authReq);
  }

}
