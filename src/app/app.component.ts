import { Component } from '@angular/core';
import { PersonajesComponent } from './personajes/personajes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonajesComponent],
  template: `<app-personajes></app-personajes>`
})
export class AppComponent {}
