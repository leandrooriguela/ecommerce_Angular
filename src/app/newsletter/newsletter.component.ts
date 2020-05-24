import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  permiteNewsLatter = false;
  textNewsLatter = "Você pode receber os melhores descontos";
  email = "teste@teste.com.br";

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.permiteNewsLatter = true;
    }, 5000);
  }

  onSubmitNewsletter() {
    this.textNewsLatter = "E-mail enviado";
  }

  onEmailEnter(event: any) {
    this.email = (<HTMLInputElement>event.target).value;
  }
}
