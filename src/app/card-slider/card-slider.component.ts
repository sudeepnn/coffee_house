import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  imports:[CommonModule],
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
  currentIndex = 1; // Start at middle
  touchStartX = 0;
  touchEndX = 0;
  visibleCards: any[] = [];

  cards = [
    { name: 'POCKET FRIENDLY', description: 'We Believe That Good Coffee Shouldn’t Weigh Heavily On Your Wallet, Thus We Serve Pocket-Friendly Coffee Without Compromising Quality. From Hot To Cold, None Of Our Beverages Is Pricy In Nature, Making Them Affordable For The Common Man.', image: '/images/wallet.png' },
    { name: 'THE PERFECT GRIND', description: 'Each Kaffee Machine Is Carefully Dialed In To Match The Espresso Profile Ensuring Your Kaffee Experience Will Be The Same, No Matter Which Outlet You Visit, As You Get The Same Aroma And Flavor Profiles Every Time.', image: '/images/grinding.png' },
    { name: 'FINEST HANDCRAFTED BEVERAGES', description: 'Kaffee Is Something We All Have In Common Every Morning. We Serve More Than 30+ Freshly Brewed Customizable Beverages. We Also Bring You Signature Beverages For Every New Season.', image: '/images/handcrafted.png' },
    { name: 'KAFFEE STORY', description: 'In Our Search For The Perfect Kaffee Blend, We Travelled Through India Tasting Over 100 Coffee Blends. After Years Of Research, We Finally Came Up, With The Perfect Blend That You All Love Since The Beginning.', image: '/images/script.png' },
    { name: 'OUR BARISTAS', description: 'Our Baristas Are The Heart And Soul Of Our Kaffee. We Make It Our Mission That We Bring You Well-Trained Knowledgeable Baristas Who Know The Art Of Brewing And Are Also Skilled Enough To Know Your Taste.', image: '/images/barista.png' },
    { name: 'PRECISION ROASTING', description: 'We Roast Our Coffee Beans To Perfection. Each Batch Goes Through A Series Of Tastings And Testing By Our Coffee Masters. Our Roasting Profile Is Carefully Formulated To Match The Aroma And Flavour, Characteristics Of Coffee That Each Bean Possesses.', image: '/images/oven.png' }
  ];

  constructor() {
    setInterval(() => {
      this.nextCard();
    }, 3000); // Change review every 3 seconds
  }

  ngOnInit() {
    this.updateVisibleCards();
  }

  updateVisibleCards() {
    const totalCards = this.cards.length;
  
    if (totalCards < 3) return; // Ensure at least 3 cards are available
  
    const prevIndex = (this.currentIndex - 1 + totalCards) % totalCards;
    const nextIndex = (this.currentIndex + 1) % totalCards;
  
    this.visibleCards = [
      this.cards[prevIndex], // Left card
      this.cards[this.currentIndex], // Center card
      this.cards[nextIndex], // Right card
    ];
  }
  
  

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    const swipeDistance = this.touchStartX - this.touchEndX;
    if (swipeDistance > 50) {
      this.nextCard();
    } else if (swipeDistance < -50) {
      this.prevCard();
    }
  }

  selectCard(index: number) {
    this.currentIndex = index;
    this.updateVisibleCards();
  }

  prevCard() {
    if (this.cards.length === 0) return;
  
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.updateVisibleCards();
  }
  
  nextCard() {
    if (this.cards.length === 0) return;
  
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.updateVisibleCards();
  }
  
  
}
