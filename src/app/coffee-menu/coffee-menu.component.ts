import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coffee-menu',
  imports: [CommonModule],
  templateUrl: './coffee-menu.component.html',
  styleUrls: ['./coffee-menu.component.css']
})
export class CoffeeMenuComponent {
  activeTab = 0;

  categories = [
    {
      name: "Original's",
      items: [
        { name: 'Espresso', price: 80, image: 'images/menu/original/esp.png' },
        { name: 'Americano', price: 98, image: 'images/menu/original/ame.png' },
        { name: 'Cappuccino', price: 125, image: 'images/menu/original/cap.png' },
        { name: 'Cafe Latte', price: 125, image: 'images/menu/original/laten.png' },
        { name: 'Flat White', price: 134, image: 'images/menu/original/late.png' },
        { name: 'Hot Chocolate', price: 152, image: 'images/menu/original/hotchocolate.png' },
      ]
    },
    {
      name: 'Hot Dessert Coffee',
      items: [
        { name: 'Vanilla / Caramel', price: 179, image: 'images/menu/coffeedessert/vanilla.png' },
        { name: 'Hazelnut', price: 179, image: 'images/menu/coffeedessert/hazelnut.png' },
        { name: 'Cafe Mocha', price: 188, image: 'images/menu/coffeedessert/cafemoza.png' },
        { name: 'Tiramisu Latte', price: 197, image: 'images/menu/coffeedessert/Tiramisu.png' },
        { name: 'Irish Latte', price: 197, image: 'images/menu/coffeedessert/irish.png' },
        { name: 'Spanish Latte', price: 197, image: 'images/menu/coffeedessert/spanish.png' },
        { name: 'Ice-Cream Affogato', price: 179, image: 'images/menu/coffeedessert/icecream.png' },
      ]
    },
    {
      name: "Frippy Frappe's",
      items: [
        { name: 'Cafe Frappe', price: 99, image: 'images/menu/frappe/fra1.png' },
        { name: 'Mocha Frappe', price: 109, image: 'images/menu/frappe/2.png' },
        { name: 'Irish Caramel Frappe', price: 89, image: 'images/menu/frappe/3.png' },
        { name: 'Choco Chip Frappe', price: 89, image: 'images/menu/frappe/4.png' },
        { name: 'Tiramisu Frappe', price: 89, image: 'images/menu/frappe/5.png' },
        { name: 'Hazelnut Caramel Frappe', price: 89, image: 'images/menu/frappe/6.png' },
      ]
    },
    {
      name: "The Basics",
      items: [
        { name: 'REGULAR COFFE', price: 53, image: 'images/menu/basic/1.png' },
        { name: 'REG. COLD COFFEE', price: 134, image: 'images/menu/basic/2.png' },
        { name: 'CHOCOLATE COLD COFFEE', price: 152, image: 'images/menu/basic/3.png' },
        { name: 'CAREMAL COLD COFFEE', price: 152, image: 'images/menu/basic/4.png' },
       
      ]
    },
    {
      name: "Iced Lattes",
      items: [
        { name: 'ICED CAFE LATTE', price: 197, image: 'images/menu/iced/1.png' },
        { name: 'ICED VANILLA LATTE', price: 206, image: 'images/menu/iced/2.png' },
        { name: 'ICED CAFE MOCHA', price: 206, image: 'images/menu/iced/3.png' },
        { name: 'ICED IRISH LATTE', price: 215, image: 'images/menu/iced/4.png' },
        { name: 'ICED TIRAMISU LATTE', price: 215, image: 'images/menu/iced/5.png' },
        { name: 'ICED VIETNAMESE LATTE', price: 215, image: 'images/menu/iced/6.png' },
      ]
    },
    {
      name: "Refreshers",
      items: [
        { name: 'MINTY LIME COOLER', price: 116, image: 'images/menu/refreshers/1.png' },
        { name: 'BLUE BLOSSOM', price: 125, image: 'images/menu/refreshers/2.png' },
        { name: 'SUNRISE', price: 134, image: 'images/menu/refreshers/3.png' },
        { name: 'SUNSET', price: 134, image: 'images/menu/refreshers/4.png' },
        { name: 'SHIRLEY TEMPLE', price: 134, image: 'images/menu/refreshers/5.png' },
        { name: 'BERRY BLAST', price: 134, image: 'images/menu/refreshers/6.png' },
        { name: 'KIWI COOLER', price: 134, image: 'images/menu/refreshers/7.png' },
        { name: 'TROPICAL BLISS', price: 134, image: 'images/menu/refreshers/8.png' },
      ]
    },
  ];
}
