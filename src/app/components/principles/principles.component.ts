import { Component } from "@angular/core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faCreditCard,
  faMagnifyingGlass,
  faHandshake,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-principles",
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: "./principles.component.html",
  styleUrls: ["./principles.component.css"],
})
export class PrinciplesComponent {
  principles = [
    {
      icon: faCreditCard,
      title: "Sem Subscrição",
      description: "Pague apenas pelo que utiliza...",
    },
    {
      icon: faMagnifyingGlass,
      title: "Transparência",
      description: "Visibilidade total...",
    },
    {
      icon: faGift,
      title: "Criar Concursos Grátis",
      description: "Inicie o seu concurso...",
    },
    {
      icon: faHandshake,
      title: "Colaboradores",
      description: "Adira ao nosso programa...",
    },
  ];
}
