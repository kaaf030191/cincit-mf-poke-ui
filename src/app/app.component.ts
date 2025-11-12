import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonService } from './api/pokemon.service';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, CommonModule, FormsModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})

export class AppComponent {
	data: any = null;
	pokemonName: string = '';

	constructor(
		private pokemonService: PokemonService
	){}

	getPokemonData(): void {
		this.pokemonService.getData(this.pokemonName).subscribe({
			next: (response: any) => {
				this.data = response;
			},
			error: (error: any) => {
				console.log(error);
			}
		});
	}
}