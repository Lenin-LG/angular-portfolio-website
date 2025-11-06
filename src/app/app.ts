import { Component, signal, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('portfolio');

  ngOnInit(): void {
    AOS.init({
      duration: 800,
      once: true,
    });
  }
}
