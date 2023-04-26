import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  artitas: any[]=[]
constructor(private Spotify:SpotifyService){}
buscar(termino:string){
  console.log(termino)
  this.Spotify.getArtist(termino)   
     .subscribe((data:any)=>{
      console.log(data.artists.items)
      this.artitas=data.artists.items
});
}
}
