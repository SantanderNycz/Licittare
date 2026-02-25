import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";

interface CollabForm {
  nome: string;
  apelido: string;
  email: string;
  telefone: string;
  especialidade: string;
  experiencia: string;
  mensagem: string;
}

@Component({
  selector: "app-collaborators",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./collaborators.component.html",
  styleUrls: ["./collaborators.component.css"],
})
export class CollaboratorsComponent {
  submitted = signal(false);
  loading = signal(false);

  form: CollabForm = {
    nome: "",
    apelido: "",
    email: "",
    telefone: "",
    especialidade: "",
    experiencia: "",
    mensagem: "",
  };

  especialidades = [
    "Arquitectura",
    "Engenharia civil",
    "Empreiteiro",
    "Eletricista",
    "Canalizador",
    "Carpinteiro",
    "Fornecedor de Materiais",
  ];

  experiencias = ["1-5 anos", "6-15 anos", "+15 anos"];

  onSubmit(formEl: NgForm) {
    if (!formEl.valid) {
      formEl.control.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
    }, 1200);
  }

  resetForm() {
    this.submitted.set(false);
    this.form = {
      nome: "",
      apelido: "",
      email: "",
      telefone: "",
      especialidade: "",
      experiencia: "",
      mensagem: "",
    };
  }
}
