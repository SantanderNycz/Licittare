import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { CategoriesComponent } from '../../components/categories/categories.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { PrinciplesComponent } from '../../components/principles/principles.component';
import { AboutComponent } from '../../components/about/about.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { CollaboratorsComponent } from '../../components/collaborators/collaborators.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CookieBannerComponent } from '../../components/cookie-banner/cookie-banner.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    StatsComponent,
    CategoriesComponent,
    HowItWorksComponent,
    PrinciplesComponent,
    AboutComponent,
    CtaComponent,
    CollaboratorsComponent,
    FooterComponent,
    CookieBannerComponent
  ],
  template: `
    <app-header></app-header>
    <main id="main-content">
      <app-hero></app-hero>
      <app-stats></app-stats>
      <app-categories></app-categories>
      <app-how-it-works></app-how-it-works>
      <app-principles></app-principles>
      <app-about></app-about>
      <app-cta></app-cta>
      <app-collaborators></app-collaborators>
    </main>
    <app-footer></app-footer>
    <app-cookie-banner></app-cookie-banner>
  `
})
export class HomePageComponent {}
