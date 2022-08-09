import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  enviado: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    text: new FormControl('', [Validators.minLength(20), Validators.required])
  })


  constructor() { }

  submit() {
    this.enviado = true;
    this.contactForm.reset();
    setTimeout(() => {
      this.enviado = false;
    }, 5000);
  }

  checkForm(pInputName: string, pError: string): boolean {
    if (this.contactForm.get(pInputName)?.hasError(pError) && this.contactForm.get(pInputName)?.touched) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit(): void {
  }

}
