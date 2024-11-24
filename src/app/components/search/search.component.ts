import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    imports: [CommonModule, FormsModule, HttpClientModule],
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    region: string = '';
    state: string = '';
    city: string = '';
    searchResults: any[] = [];
    showOverlay: boolean = false; // Adicionado para controlar a exibição do modal
    showWarning: boolean = false; // Adicionado para controlar a exibição da mensagem de aviso

    constructor(private readonly http: HttpClient, private router: Router) {}

    onSearch() {
        if (!this.city.trim() && !this.state.trim() && !this.region.trim()) {
            this.showWarning = true;
            return;
        }

        this.showWarning = false;
        const url = 'https://saude-ai-server.vercel.app/municipios';
        this.http.get<any[]>(url).subscribe(data => {
            console.log(data); // Adicionado para depuração
            this.searchResults = data.filter(item => 
                (!this.city || this.removeAccents(item.nome).toLowerCase().includes(this.removeAccents(this.city).toLowerCase())) &&
                (!this.state || this.removeAccents(item.estado).toLowerCase().includes(this.removeAccents(this.state).toLowerCase())) &&
                (!this.region || this.removeAccents(item.regiao).toLowerCase().includes(this.removeAccents(this.region).toLowerCase()))
            );
            this.showOverlay = true; // Mostrar o modal após a pesquisa
        });
    }

    closeModal() {
        this.showOverlay = false; // Fechar o modal
    }

    viewDetails(id: number) {
        this.router.navigate(['/details', id]);
    }

    removeAccents(str: string): string {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
}