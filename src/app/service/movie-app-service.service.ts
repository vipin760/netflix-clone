import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieAppServiceService {

  constructor(private http:HttpClient) { }
  baseurl ="https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

//banner api data
bannerApiData():Observable<any>
{
  return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
}

//trending movie api data
trendingMovieApiData():Observable<any>
{
  return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
}

  
}
