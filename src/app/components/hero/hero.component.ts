import { Component, OnInit, OnDestroy, signal } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent implements OnInit, OnDestroy {
  visible = signal(false);
  timerDisplay = signal("--:--:--");

  private targetTime = 0;
  private timerInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    setTimeout(() => this.visible.set(true), 100);
    // Simulate an ongoing contest ending ~14h 23m from page load
    this.targetTime = Date.now() + (14 * 3600 + 23 * 60 + 7) * 1000;
    this.updateTimer();
    this.timerInterval = setInterval(() => this.updateTimer(), 1000);
  }

  ngOnDestroy() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  private updateTimer() {
    const diff = this.targetTime - Date.now();
    if (diff <= 0) {
      this.timerDisplay.set("00:00:00");
      if (this.timerInterval) clearInterval(this.timerInterval);
      return;
    }
    const h = Math.floor(diff / 3_600_000);
    const m = Math.floor((diff % 3_600_000) / 60_000);
    const s = Math.floor((diff % 60_000) / 1_000);
    this.timerDisplay.set(
      `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
    );
  }
}
