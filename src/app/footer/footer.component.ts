import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  getWhatsAppLink(): string {
    const phoneNumber = "919876543210"; // Replace with your WhatsApp number
    const message = `Hello! I want to order a item. Can you help me?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }
}
