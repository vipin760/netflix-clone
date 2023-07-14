import { Component,OnInit } from '@angular/core';
import {FormControl , FormGroup} from '@angular/forms';
import { MovieAppServiceService } from 'src/app/service/movie-app-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private service:MovieAppServiceService) {}

  ngOnInit(): void {
    
  }
  searchResult:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  })

  submitForm(){
    console.log(this.searchForm.value,'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,'searchMovie###');
      this.searchResult = result.results;
      
    })
    
  }

}
