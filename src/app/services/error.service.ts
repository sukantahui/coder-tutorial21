import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ErrorService {
  constructor() { }
  serverError(err: any) {
    // console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      return throwError('backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      // return Observable.throw(err.text() || 'backend server error');
    }
    if (err.status === 0){
      // tslint:disable-next-line:label-position
      return throwError ({status: err.status, message: 'Backend Server is not Working', statusText: err.statusText});
    }
    if (err.status === 401){
      // tslint:disable-next-line:label-position
      return throwError ({status: err.status, message: 'Your are not authorised', statusText: err.statusText});
    }
    if (err.status === 500){
      // tslint:disable-next-line:label-position
      return throwError ({status: err.status, message: 'Data saving error', statusText: err.statusText});
    }
    if (err.status === 406){
      // console.log(err.error);
      // console.log(err.error.message.tag[0]);
      if (err.error.message.tag){
        return  throwError({status: err.status , message: err.error.message.tag[0], statusText: err.statusText});
      }
      return  throwError({status: err.status , message: 'Duplicate entry', statusText: err.statusText});
    }
    return throwError(err);
  }
  handleError(errorResponse: HttpErrorResponse){
    if (errorResponse.error.message.includes('1062')){
      return throwError('Record already exists');
    }else {
      return throwError(errorResponse.error.message);
    }
  }
}
