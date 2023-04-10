import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../app.interfaces';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
})
export class TemplateFormsComponent {
  @ViewChild(NgForm) form!: NgForm;
  users: User[] = [];
  onSubmit(formData: any) {
    const formValue = formData.value as User;
    this.users.push(formValue);
    this.form.reset();
    console.log(formData);
  }
}
