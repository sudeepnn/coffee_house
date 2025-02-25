import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomnavbarComponent } from "./customnavbar/customnavbar.component";
import { HeroComponent } from "./hero/hero.component";
import { CardSliderComponent } from "./card-slider/card-slider.component";
import { CoffeeStatsComponent } from "./coffee-stats/coffee-stats.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { FooterComponent } from "./footer/footer.component";
import { ParallaxComponent } from "./parallax/parallax.component";
import { CoffeeMenuComponent } from "./coffee-menu/coffee-menu.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomnavbarComponent, HeroComponent, CardSliderComponent, CoffeeStatsComponent, CarouselComponent, GalleryComponent, ReviewsComponent, FooterComponent, ParallaxComponent, CoffeeMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coffee-house';
}
