import { Component, OnInit, ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Stat {
  value: number;
  label: string;
  suffix: string;
  current: number;
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
    { value: 500, label: "Concursos finalizados", suffix: "", current: 0 },
    { value: 80, label: "Concursos activos", suffix: "", current: 0 },
    { value: 1200, label: "Utilizadores", suffix: "", current: 0 },
  ];

  private animated = false;

  constructor(private el: ElementRef) {}

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

  private animateCounters() {
    this.stats.forEach((stat) => {
      const duration = 800;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = now - start;
        if (elapsed >= duration) {
          stat.current = stat.value;
          return;
        }
        stat.current = Math.floor(stat.value * (elapsed / duration));
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });
  }
}
