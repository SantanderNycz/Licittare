import { Component, OnInit, signal } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"],
})
export class HeroComponent implements OnInit {
  visible = signal(false);

  ngOnInit() {
    setTimeout(() => this.visible.set(true), 100);
  }
}
