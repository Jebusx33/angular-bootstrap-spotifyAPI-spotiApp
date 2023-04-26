import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
token :string
url:string
  constructor(private http:HttpClient) {
    console.log("Spotify service ON")
    this.url='https://api.spotify.com/'
    this.token='BQC-kC2aroYdRxl5E1w_dK1nMYP809PHrhGXc2rNQqSrFjTzCth3_ejz-0WkmxOs2CJafLeC_l6MrGy5zwTiCbn9nSD6TVkanxnWWdgI7x4-E1DTfLQa'
   }

   getNewRelease(){
     const headers = new HttpHeaders({
      Authorization:`Bearer ${this.token}` 
     }) 
     const endpoint='v1/browse/new-releases?country=SE&locale=es-419%2Ces%3Bq%3D0.8&offset=0&limit=20'; 
    return this.http.get(`${this.url}${endpoint}`, { headers });
          
   }
   getArtist(termino:string){
    const headers = new HttpHeaders({
      Authorization:`Bearer ${this.token}` 
     }) 
     const endpoint= `v1/search?query=${termino}&type=artist&locale=es-419%2Ces%3Bq%3D0.7&offset=0&limit=10`
    return this.http.get(`${this.url}${endpoint}`, { headers });
    
   }
}



