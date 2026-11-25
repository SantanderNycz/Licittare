import { Component, OnInit, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangeDetectorRef, NgZone } from "@angular/core";

interface Stat {
  value: number;
  label: string;
  suffix: string;
  current: number;
  icon: string;
}

@Component({
  selector: "app-stats",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"],
})
export class StatsComponent implements OnInit {
  stats: Stat[] = [
    { value: 247, label: "Concursos finalizados", suffix: "+", current: 0, icon: "fa-solid fa-flag-checkered" },
    { value: 83, label: "Concursos ativos",       suffix: "",  current: 0, icon: "fa-solid fa-bolt" },
    { value: 1847, label: "Utilizadores registados", suffix: "", current: 0, icon: "fa-solid fa-users" },
  ];

  private animated = false;

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animated) {
            this.animated = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(this.el.nativeElement);
  }

  constructor(
    private cd: ChangeDetectorRef,
    private ngZone: NgZone,
    private el: ElementRef,
  ) {}

  private animateCounters() {
    this.ngZone.runOutsideAngular(() => {
      this.stats.forEach((stat) => {
        const duration = 700;
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          if (elapsed >= duration) {
            stat.current = stat.value;
            this.cd.markForCheck();
            return;
          }
          stat.current = Math.floor(stat.value * (elapsed / duration));
          this.cd.markForCheck();
          requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      });
    });
  }
}
