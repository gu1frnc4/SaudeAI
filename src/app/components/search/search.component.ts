import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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

    constructor(private readonly http: HttpClient) {}

    onSearch() {
        if (!this.city.trim()) {
            this.showWarning = true;
            return;
        }

        this.showWarning = false;
        const url = 'https://saude-ai-server.vercel.app/municipios';
        this.http.get<any[]>(url).subscribe(data => {
            console.log(data); // Adicionado para depuração
            this.searchResults = data.filter(item => 
                item.nome.toLowerCase().includes(this.city.toLowerCase()) &&
                (!this.state || item.estado.toLowerCase().includes(this.state.toLowerCase())) &&
                (!this.region || item.regiao.toLowerCase().includes(this.region.toLowerCase()))
            );
            this.showOverlay = true; // Mostrar o modal após a pesquisa
        });
    }

    closeModal() {
        this.showOverlay = false; // Fechar o modal
    }
}