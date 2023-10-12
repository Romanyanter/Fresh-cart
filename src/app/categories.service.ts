import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient) { }
  getprodect():Observable<any>{
  return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  
}
