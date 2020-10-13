import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getEnrolleesUrl = environment.apiPath + 'enrollees';

  constructor(private http: HttpClient) { }

  getEnrollees(): Observable<any> {
    return this.http.get(this.getEnrolleesUrl);
  }

  updateEnrollee(id, enrolleeObj): Observable<any> {
    return this.http.put(this.getEnrolleesUrl + '/' + id, enrolleeObj);
  }
}
