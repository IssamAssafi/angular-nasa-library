import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient ) { }

  getSearchResults(searchQuery:string){
    return this.http.get(`https://images-api.nasa.gov/search?q=${searchQuery}`)
  }


}
