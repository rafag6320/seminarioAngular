import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    alert("Gracias por contactarte, te responderemos pronto!");
    this.contact = { name: '', email: '', subject: '', message: '' };
  }
}