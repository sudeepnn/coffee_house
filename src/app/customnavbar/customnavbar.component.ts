import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customnavbar',
  imports: [CommonModule],
  templateUrl: './customnavbar.component.html',
  styleUrl: './customnavbar.component.css'
})
export class CustomnavbarComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  getWhatsAppLink(): string {
    const phoneNumber = "919876543210"; // Replace with your WhatsApp number
    const message = `Hello! I want to order a item. Can you help me?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }
}
