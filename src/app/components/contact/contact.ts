import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  
  name = '';
  email = '';
  message = '';
  toastMessage = '';
  showToastFlag = false;

  constructor(private http: HttpClient, public translate: TranslateService) {}

  async onSubmit(form: any) {
  this.showToast('⏳ Enviando mensaje...');

  const url = 'https://formspree.io/f/myzbvyap';
  const body = { name: this.name, email: this.email, message: this.message };
  const headers = new HttpHeaders({ 'Accept': 'application/json' });

  try {
    await this.http.post(url, body, { headers }).toPromise();
    form.resetForm();
    this.showToast('✅ ¡Mensaje enviado con éxito!');
  } catch (err) {
    this.showToast('❌ Ocurrió un error al enviar el mensaje');
  }
}


  showToast(message: string) {
    this.toastMessage = message;
    this.showToastFlag = true;

    setTimeout(() => {
      this.showToastFlag = false;
    }, 4000);
  }
}