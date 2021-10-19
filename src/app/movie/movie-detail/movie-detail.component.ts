import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/navbar/services/navbar.service';
import { Movie } from '../model/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  id?: number;
  movie?: Movie;
  movieSub$?: Subscription;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private navbarService: NavbarService
  ) {}

  ngOnInit(): void {
    // @ts-ignore: Object is possibly 'null'.
    this.id = +this.route.snapshot.paramMap.get("id");
    this.movieSub$ = this.movieService
    .movieFromHttp(this.id)
      .subscribe(movie => {
        this.movie = movie;
        // @ts-ignore: Object is possibly 'undefined'.
       this.navbarService.title.next(movie.name);
      });
  }
  ngOnDestroy(): void {
    this.movieSub$?.unsubscribe;
  }
}
