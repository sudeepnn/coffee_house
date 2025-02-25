import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements AfterViewInit {
  textArray = ['The Perfect Cup of Coffee', 'Made with Love', 'Aroma You Can’t Resist'];
  typingSpeed = 100;
  erasingSpeed = 50;
  newTextDelay = 2000;
  textIndex = 0;
  charIndex = 0;

  ngAfterViewInit() {
    this.typeEffect();
  }

  typeEffect() {
    const typewriter = document.getElementById('typewriter');

    if (!typewriter) return;

    if (this.charIndex < this.textArray[this.textIndex].length) {
      typewriter.innerHTML += this.textArray[this.textIndex].charAt(this.charIndex);
      this.charIndex++;
      setTimeout(() => this.typeEffect(), this.typingSpeed);
    } else {
      setTimeout(() => this.eraseEffect(), this.newTextDelay);
    }
  }

  eraseEffect() {
    const typewriter = document.getElementById('typewriter');

    if (!typewriter) return;

    if (this.charIndex > 0) {
      typewriter.innerHTML = this.textArray[this.textIndex].substring(0, this.charIndex - 1);
      this.charIndex--;
      setTimeout(() => this.eraseEffect(), this.erasingSpeed);
    } else {
      this.textIndex = (this.textIndex + 1) % this.textArray.length;
      setTimeout(() => this.typeEffect(), this.typingSpeed);
    }
  }
}
