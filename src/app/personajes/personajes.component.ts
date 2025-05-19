import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [HttpClientModule, NgFor],
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  personajes: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(data => {
        this.personajes = data.results.map((personaje: any) => ({
          name: personaje.name,
          image: personaje.image,
          status: personaje.status,
          species: personaje.species,
          gender: personaje.gender,
          type: personaje.type || 'Desconocido',
          firstSeen: personaje.episode[0]
        }));
      }, error => {
        console.error('Error cargando personajes:', error);
      });
  }
}
