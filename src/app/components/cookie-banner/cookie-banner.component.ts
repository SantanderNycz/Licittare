import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.css']
})
export class CookieBannerComponent {
  visible = signal(!this.hasAccepted());
  modalOpen = signal(false);

  private hasAccepted(): boolean {
    try {
      return !!sessionStorage.getItem('cookies_accepted');
    } catch {
      return false;
    }
  }

  accept() {
    try { sessionStorage.setItem('cookies_accepted', '1'); } catch {}
    this.visible.set(false);
    this.modalOpen.set(false);
  }

  openModal() {
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
  }
}
