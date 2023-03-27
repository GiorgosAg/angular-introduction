import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-introduction';
  name = 'GiorgosAg';
}

@Component({
  selector: 'app-hello',
  template: '<h1>Hello World!</h1>',
})
export class HelloComponent {}
