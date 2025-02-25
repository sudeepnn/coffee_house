import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports:[CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides = [
    { img: 'images/startup.png', title: 'Shop Launched', value: '2015' },
    { img: 'images/affection.png', title: 'Happy Customers', value: '10,000+' },
    { img: 'images/coffee.png', title: 'Coffees Served', value: '500,000+' }
  ];

  currentSlideIndex = 0;

  constructor() {
    setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}
