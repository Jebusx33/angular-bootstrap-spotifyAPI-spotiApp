import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Spotify service ON")
   }
   getNewRelease(){
    const token = 'BQCcNUheIdK7nsTstw0pZDWgw9Rng6I82Jjnm_vzas1q7Q_805wiQcMjExb9fNsqjVqVi416rH-at_URzVA-2t1ztNLBYY2aXNe5tL-niaOSfYSwOxx2NG8n8V2urXU35gyCsaevDIzjy2ibTvaCMq4A9CZLCZnFe8KV7SX6ZaJRkVTi2iztUnC0qjirkzoVWVEGgZmBTnmM0KLaYRemLW52Cihu5-QybqW8h4Mgy-vHFOxgK7titQsg5PyZrN9E1mrcN4ACjS1CQr60RwEQPlV2wjZCchM7Rc4EdpOiNGhCKPITLjHL_SaWlyXi_SGPWHo3sdwIp10mTxTr_U26M8dvL7G2PKQXgoZWW0QjdWUoE3g';
     const headers = new HttpHeaders({
      Authorization:`Bearer ${token}` 
     }) 
     const endpoint='v1/browse/new-releases?country=SE&locale=es-419%2Ces%3Bq%3D0.8&offset=0&limit=20'; 
    return this.http.get(`https://api.spotify.com/${endpoint}`, { headers });
          
   }
}
