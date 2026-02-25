import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  value: number;
  label: string;
  suffix: string;
  current: number;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  stats: Stat[] = [
    { value: 500, label: 'Concursos finalizados', suffix: '', current: 0 },
    { value: 80,  label: 'Concursos activos',     suffix: '',  current: 0 },
    { value: 1200, label: 'Utilizadores',          suffix: '', current: 0 }
  ];

  private animated = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          this.animateCounters();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(this.el.nativeElement);
  }

  private animateCounters() {
    this.stats.forEach(stat => {
      const duration = 800;
      const steps = 50;
      const step = stat.value / steps;
      let count = 0;
      const interval = setInterval(() => {
        count += step;
        if (count >= stat.value) {
          stat.current = stat.value;
          clearInterval(interval);
        } else {
          stat.current = Math.floor(count);
        }
      }, duration / steps);
    });
  }
}
