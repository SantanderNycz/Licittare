import { Component, OnInit, OnDestroy, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-maintenance",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: "./maintenance.component.html",
  styleUrls: ["./maintenance.component.css"],
})
export class MaintenanceComponent implements OnInit, OnDestroy {
  // Contador regressivo
  targetDate = new Date("2027-06-01T09:00:00");

  days = signal(0);
  hours = signal(0);
  minutes = signal(0);
  seconds = signal(0);

  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    this.tick();
    this.timer = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  private tick() {
    const diff = Math.max(0, this.targetDate.getTime() - Date.now());
    this.days.set(Math.floor(diff / 86_400_000));
    this.hours.set(Math.floor((diff % 86_400_000) / 3_600_000));
    this.minutes.set(Math.floor((diff % 3_600_000) / 60_000));
    this.seconds.set(Math.floor((diff % 60_000) / 1000));
  }

  pad(n: number): string {
    return String(n).padStart(2, "0");
  }

  currentYear = new Date().getFullYear();
}
