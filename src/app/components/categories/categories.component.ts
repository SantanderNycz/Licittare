import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faBoxOpen,
  faHammer,
  faHandshake,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-categories",
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent {
  categories = [
    {
      icon: faHammer,
      title: "Concursos de Construção",
      description:
        "Publique concursos para obras novas, remodelações, legalizações ou ampliações, e encontre as melhores empresas para o seu projeto.",
      color: "#056610",
    },
    {
      icon: faWrench,
      title: "Concursos de Serviços",
      description:
        "Gestão de obra, fiscalização, arquitetura, engenharia, topografia e outros serviços técnicos, tudo com total transparência e controlo.",
      color: "#057650",
    },
    {
      icon: faHandshake,
      title: "Concursos de Subcontratação",
      description:
        "Encontre subempreiteiros especializados para fases específicas da construção desde estruturas a acabamentos.",
      color: "#058670",
    },
    {
      icon: faBoxOpen,
      title: "Outros",
      description:
        "Organize concursos para o aluguer de equipamentos, fornecimento de materiais de construção ou qualquer outra necessidade do setor.",
      color: "#059699",
    },
  ];
}
