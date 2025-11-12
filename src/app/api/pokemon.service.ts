import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class PokemonService {
	baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

	constructor(
		private httpClient: HttpClient
	) {}

	getData(name: string): Observable<any> {
		return this.httpClient.get(`${this.baseUrl}/${name}`);
	}
}