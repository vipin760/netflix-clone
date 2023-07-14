// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-movie-details',
//   templateUrl: './movie-details.component.html',
//   styleUrls: ['./movie-details.component.css']
// })
// export class MovieDetailsComponent {

// }






import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieAppServiceService } from 'src/app/service/movie-app-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    constructor( private service:MovieAppServiceService , private router:ActivatedRoute) {}
    getMovieDetailResult:any;
    getMovieVideoResult:any;
    getMovieCastResult:any;
    ngOnInit(): void {
      let getParamId = this.router.snapshot.paramMap.get('id')
      console.log(getParamId,'paramid#');
      
      this.getMovie(getParamId);
      this.getVideo(getParamId);
      this.getMovieCast(getParamId);
    }
    getMovie(id:any){
      this.service.getMovieDetails(id).subscribe((result)=>{
        console.log(result,'getMovieDetails#');
        this.getMovieDetailResult = result
        
      })
    }
    getVideo(id:any){
      this.service.getMovieVideo(id).subscribe((result)=>{
        console.log(result,'getVideo#');
        result.results.forEach((element:any) => {
          if(element.type==='Trailer'){
            this.getMovieVideoResult = element.key;
          }
        });
      })
    }
    getMovieCast(id:any){
      this.service.getMovieCast(id).subscribe((result)=>{
        console.log(result,'getMovieCast#');
        this.getMovieCastResult = result.cast;
      })
    }
}
