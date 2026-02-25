import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  metrics = [
    { value: '500+', label: 'Projetos concluídos' },
    { value: '25+',  label: 'Anos de experiência' },
    { value: '91%',  label: 'Avaliação de satisfação' },
    { value: '15+',  label: 'Profissionais licenciados' }
  ];
}
