import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  nuevasCanciones:any[] =[];
  constructor(private Http: HttpClient, private Spotify:SpotifyService){
     this.Spotify.getNewRelease()   
     .subscribe((data:any)=>{
      console.log(data.albums.items)
      this.nuevasCanciones =data.albums.items
});
  }
}
