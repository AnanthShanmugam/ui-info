import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class BusinessService {
  constructor(private http: HttpClient) {
   }



  metaDataUrl = 'assets/json/entityMeta.json';

  getMetadata() {
    return this.http.get(this.metaDataUrl);
  }

}