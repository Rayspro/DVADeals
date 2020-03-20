import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntercepterService implements HttpInterceptor {

  constructor() { }

  intercept(req, next): any {
    const tokenifier = req.clone({
      setHeaders: {
        Autherization: localStorage.getItem('token')
      }
    });
    return next.handler(tokenifier);
  }
}
