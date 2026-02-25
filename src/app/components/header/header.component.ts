import { Component, Host, HostListener, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ElementRef } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  aboutOpen = signal(false);
  solutionsOpen = signal(false);

  constructor(private elementRef: ElementRef) {}

  @HostListener("window:scroll")
  onScroll() {
    this.isScrolled.set(window.scrollY > 40);
  }

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    if (!clickedInside) {
      this.closeDropdowns();
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }

  toggleAbout() {
    this.aboutOpen.update((v) => !v);
    this.solutionsOpen.set(false);
  }

  toggleSolutions() {
    this.solutionsOpen.update((v) => !v);
    this.aboutOpen.set(false);
  }

  closeDropdowns() {
    this.aboutOpen.set(false);
    this.solutionsOpen.set(false);
  }
}
