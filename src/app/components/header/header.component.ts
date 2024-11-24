import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}

  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  //Método para redirecionar à rota desejada
  navigateTo(route: string) {
    this.router.navigate([route]);  
  }
}