import { Component, OnInit } from '@angular/core';
import { tsParticles } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  standalone: false,
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
  currentLang = 'es';
   constructor(private translate: TranslateService) {
   translate.addLangs(['es', 'en']);
  const savedLang = localStorage.getItem('lang') || 'es';
  this.currentLang = savedLang;
  translate.setDefaultLang('es');
  translate.use(savedLang);
  }
  async ngOnInit() {
    await loadSlim(tsParticles);
    tsParticles.load('particles', {
      particles: {
        number: { value: 40 },
        color: { value: '#1E90FF' },
        size: { value: 2 },
        move: { enable: true, speed: 0.4 },
        opacity: { value: 0.4 },
        links: { enable: true, color: '#1E90FF', opacity: 0.2 },
      },
      background: { color: 'transparent' },
    }); 
  }
    changeLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}