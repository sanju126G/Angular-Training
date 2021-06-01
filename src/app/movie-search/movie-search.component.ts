import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  constructor(private http:HttpClient) { }
  movies:any =[];
  pharsedMovies;
  search:any = [];
  mName = "shivaji"
  valid = "true";
  response;
  totalResult;
  error;

  ngOnInit(): void {
    this.onClickSearch();
   
  }

  onClickSearch(){
    this.movies = this.http.get('http://www.omdbapi.com/?apikey=9a27174d&s=' + this.mName).subscribe((res) => {
    console.log(res);
    this.movies = res;
    this.search = this.movies.Search;
    this.response = this.movies.Response;
    console.log(this.response);
    // this.totalResult = this.movies.totalResults;
    this.totalResult = this.search.length;
    console.log(this.totalResult);
    
    
      // console.log(this.movies);
      // console.log(this.movies.Search);
    // for(let i=0;i<this.search.length;i++)
    //  console.log( 'this is Search values ' + this.movies.Response);
    },err => {
      this.error = 'Server not availabel'
      console.log(this.error);
      
      
    })
    // this.valid = this.response.includes("T");
    // console.log('this is from include ' + this.response.includes("T"))
  }

}
