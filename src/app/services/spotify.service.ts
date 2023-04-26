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
    const token = 'BQCQXu2UOQZpz1dNQgTLM79RGe6FxRoAS_YNDLEPbGfk17qe-_Ujwi766oWF__t_6Mwe6JIl0zB8sxdABRx6AUIEi2b-mz72GQICzemziKCMfvX3CRx2OivIOJwseH6B5mKk1eou2Eluu7867J9sQupaHaKpdp_MGjYXX1dtJoIhEDU1Igvu073nDKEN8SwnaJ__ITZzcn0fdLMn2p1-kVVtb_SIlhm2nh_clGNNjnP2LSMOPHQEcx0mduEn7SlGLIwpiif-d25ps7sCeO5lvCmpY9hheRkX75b6KjZuRDbZk4ZQPaQjN4ogOD0mcSsm8o7pcc_za_w_x9rEr2llPxKl3PQ510G7g5BsUjNUV1v1Ngg';
     const headers = new HttpHeaders({
      Authorization:`Bearer ${token}` 
     }) 
     const endpoint='v1/browse/new-releases?country=SE&locale=es-419%2Ces%3Bq%3D0.8&offset=0&limit=20'; 
    return this.http.get(`https://api.spotify.com/${endpoint}`, { headers });
          
   }
}
