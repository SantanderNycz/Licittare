import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faComments,
  faEnvelope,
  faNewspaper,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-how-it-works",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: "./how-it-works.component.html",
  styleUrls: ["./how-it-works.component.css"],
})
export class HowItWorksComponent {
  steps = [
    {
      number: "1",
      icon: faNewspaper,
      title: "Criar Concurso",
      description: "Publique o seu projeto com todos os requisitos detalhados",
    },
    {
      number: "2",
      icon: faEnvelope,
      title: "Receber Propostas",
      description:
        "Os interessados apresentam propostas diretamente na plataforma",
    },
    {
      number: "3",
      icon: faTrophy,
      title: "Vencedor Automático",
      description:
        "A proposta mais baixa é selecionada automaticamente quando o tempo termina",
    },
    {
      number: "4",
      icon: faComments,
      title: "Pós Concurso",
      description:
        "Comunique e partilhe ficheiros de forma gratuita através da plataforma",
    },
  ];
}
