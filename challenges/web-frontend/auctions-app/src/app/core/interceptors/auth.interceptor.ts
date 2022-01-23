import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/login/services/auth.service';
import { environment } from './../../../environments/environment';
import { Token } from './../../shared/models/token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenObject: Token | null = this.authService.token;
    if (tokenObject) {
      console.log('USER ID IS:', tokenObject.userId);
      req = req.clone({ headers: req.headers.set('userid', tokenObject.userId) });
      req = req.clone({ headers: req.headers.set('authtoken', tokenObject.token) });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (!environment.production) {
            console.log('event--->>>', event);
          }
        }
        return event;
      })
    );
  }
}
