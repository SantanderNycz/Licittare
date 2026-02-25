import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent {
  newsletterEmail = "";
  newsletterSubmitted = signal(false);

  submitNewsletter() {
    if (this.newsletterEmail.includes("@")) {
      this.newsletterSubmitted.set(true);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  currentYear = new Date().getFullYear();
}
