import { Component,OnInit } from '@angular/core';
import { MovieAppServiceService } from 'src/app/service/movie-app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieAppServiceService) {}

  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResult:any=[];
  adventureMovieResult:any=[];
  animationMovieResult:any=[];
  comedyMovieResult:any=[];
  documentaryMovieResult:any=[];
  scienceFictionMovieResult:any=[];
  thillerMovieResult:any=[];

  ngOnInit():void{
    this.bannerData();
    this.trendingData();
    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();
    
  }

  //banner data

  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult=result.results
      
    })
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;
    })
  }
  
  actionMovie(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionMovie#');
      this.actionMovieResult = result.results;
    })
  }
  adventureMovie(){
    this.service.fetchAdventureMovies().subscribe((result)=>{
      console.log(result,'adventureMovie#');
      this.adventureMovieResult = result.results
    })
  }
  animationMovie(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'animationMovie');
      this.animationMovieResult = result.results
    })
  }
  comedyMovie(){
    this.service.fetchComdeyMovies().subscribe((result)=>{
      console.log(result,'comedyMovie');
      this.comedyMovieResult = result.results
    })
  }
  documentryMovie(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      console.log(result,'documentryMovie#');
      this.documentaryMovieResult = result.results      
    })
  }
  scienceFictionMovie(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      console.log(result,'scienceFiction');
      this.scienceFictionMovieResult = result.results;
    })
  }
  thrillerMovie(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'thrillerMovie#');
      this.thillerMovieResult = result.results
      
    })
  }

}
