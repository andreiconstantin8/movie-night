import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  constructor() { }
@Input() movie?: Movie

  ngOnInit(): void {
  }

}
