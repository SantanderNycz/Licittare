import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  metrics = [
    { value: '1 200+', label: 'Utilizadores registados' },
    { value: '< 2h',   label: 'Para a 1.ª proposta' },
    { value: '0 €',    label: 'Para publicar concursos' },
    { value: '98%',    label: 'Taxa de satisfação' }
  ];
}
