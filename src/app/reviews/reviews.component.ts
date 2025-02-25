import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports:[CommonModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    { name: 'Rutuja Pawar', rating: 5, text: 'Amazing coffee and great atmosphere! Highly recommended.', img: 'images/user1.jpg' },
    { name: 'Sneha DasKarmakar', rating: 4, text: 'The best place to relax and have a cup of coffee.', img: 'images/user2.jpg' },
    { name: 'Daanya katerwal', rating: 5, text: 'Great service and delicious coffee. Will visit again!', img: 'images/user3.jpg' }
  ];

  currentReviewIndex = 0;

  constructor() {
    setInterval(() => {
      this.nextReview();
    }, 3000); // Change review every 3 seconds
  }

  nextReview() {
    this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
  }

  prevReview() {
    this.currentReviewIndex = (this.currentReviewIndex - 1 + this.reviews.length) % this.reviews.length;
  }
}
