import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})

export class AuthComponent implements OnInit {
  mode: string = 'login'; // Modo padrão
  title: string = '';
  buttonText: string = '';
  fields: any[] = [];
  formData: any = {};

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    // Pega o modo da rota
    this.route.url.subscribe((segments) => {
      this.mode = segments[0].path; // 'login', 'register', ou 'forgot-password'
      this.updateMode();
    });
  }

  updateMode() {
    if (this.mode === 'login') {
      this.title = 'Entrar';
      this.buttonText = 'Entrar';
      this.fields = [
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Seu email' },
        { name: 'password', label: 'Senha', type: 'password', placeholder: 'Sua senha' },
      ];
    } else if (this.mode === 'register') {
      this.title = 'Criar Conta';
      this.buttonText = 'Registrar';
      this.fields = [
        { name: 'name', label: 'Nome', type: 'text', placeholder: 'Seu nome' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Seu email' },
        { name: 'password', label: 'Senha', type: 'password', placeholder: 'Crie uma senha' },
        { name: 'confirmPassword', label: 'Confirmar Senha', type: 'password', placeholder: 'Repita a senha' },
      ];
    } else if (this.mode === 'forgot-password') {
      this.title = 'Recuperar Senha';
      this.buttonText = 'Enviar Link';
      this.fields = [
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Seu email' },
      ];
    }
  }

  // Muda o modo (ex: de login para cadastro)
  changeMode(newMode: string) {
    this.mode = newMode;
    this.updateMode();
  }

  // Lida com a submissão do formulário
  onSubmit() {
    console.log('Dados enviados:', this.formData);
    // Aqui você chama um serviço para se comunicar com a API
  }
}
