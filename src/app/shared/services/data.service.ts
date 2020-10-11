import { Injectable } from '@angular/core';
import { environmentConfig } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';

const environment = environmentConfig();

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getEnrolleesUrl = environment.BASE_URL + 'enrollees';

  constructor(private http : HttpClient) { }

  getEnrollees(){
    return this.http.get(this.getEnrolleesUrl);
  }

  updateEnrollee(id, enrolleeObj){
    return this.http.put(this.getEnrolleesUrl + '/' + id, enrolleeObj);
  }


}
