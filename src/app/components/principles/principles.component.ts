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
      description: "Pague apenas pelos créditos que consome. Sem mensalidades, sem contratos, sem compromissos.",
    },
    {
      icon: faMagnifyingGlass,
      title: "Transparência Total",
      description: "Todas as propostas são visíveis para o dono de obra. Sem negociações escondidas, sem favorecimentos.",
    },
    {
      icon: faGift,
      title: "Criar Concursos Grátis",
      description: "Publique o seu concurso sem qualquer custo. Paga apenas quando adjudica — com base nos créditos utilizados.",
    },
    {
      icon: faHandshake,
      title: "Rede de Colaboradores",
      description: "Convide profissionais e empresas para a plataforma e receba uma comissão sobre os créditos que eles utilizarem.",
    },
  ];
}
