import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports:[CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    { src: 'images/coffes/1.jpg', alt: 'Coffee Art', size: 'col-span-2 row-span-2' },
    { src: 'images/coffes/2.JPG', alt: 'Espresso Shot', size: '' },
    { src: 'images/coffes/10.JPG', alt: 'Mocha Delight', size: '' },
    { src: 'images/coffes/3.JPG', alt: 'Latte Art', size: '' },
    { src: 'images/coffes/4.jpg', alt: 'Coffee Beans', size: 'col-span-2' },
    { src: 'images/coffes/5.jpg', alt: 'Morning Brew', size: '' },
    { src: 'images/coffes/6.jpg', alt: 'Cold Brew', size: '' },
    { src: 'images/coffes/7.jpg', alt: 'Cappuccino', size: 'row-span-2' },
    { src: 'images/coffes/8.jpg', alt: 'Mocha Delight', size: '' },
    { src: 'images/coffes/9.JPG', alt: 'Mocha Delight', size: '' },
    
  ];
}
