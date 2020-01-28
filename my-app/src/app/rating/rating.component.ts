import { Component, OnInit, Input } from '@angular/core';
import {
  LocalStorageService,
  RatingService
} from 'services';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  rating: number;

  @Input() id: string;

  constructor(
    private localStorageService: LocalStorageService,
    private ratingService: RatingService
  ) { }

  setRating(index: number): void {
    this.rating = index;
    this.localStorageService.setValue(this.id, {rating: index});
  }

  ngOnInit() {
    this.rating = this.ratingService.getRating(this.id);
  }

}
