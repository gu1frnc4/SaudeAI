import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent], // Importar CommonModule
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] // Corrigido o nome da propriedade
})
export class DetailsComponent implements OnInit {
  cityDetails: any;

  constructor(private readonly route: ActivatedRoute, private readonly http: HttpClient) {}

  ngOnInit() {
    const cityId = this.route.snapshot.paramMap.get('id');
    const storedCityDetails = localStorage.getItem(`cityDetails_${cityId}`);
    
    if (storedCityDetails) {
      this.cityDetails = JSON.parse(storedCityDetails);
    } else {
      this.http.get<any[]>('https://saude-ai-server.vercel.app/municipios').subscribe(data => {
        this.cityDetails = data.find(city => city.id.toString() === cityId);
        if (this.cityDetails) {
          localStorage.setItem(`cityDetails_${cityId}`, JSON.stringify(this.cityDetails));
        }
      });
    }
  }
}
