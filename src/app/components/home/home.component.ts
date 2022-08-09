import { Component, Input, OnInit } from '@angular/core';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaCocktails: any = [];

  allCocktails: any = [];

  ingredient = null;

  hasIngredient: boolean = false;

  name:string = '';


  constructor(private cocktailsService: CocktailsService) {

  }

  filtrar() {
    this.allCocktails.splice(0, this.allCocktails.length)
    this.cocktailsService.getByIngredient(this.ingredient).subscribe(data => {
      for (let i = 0; i < data.drinks.length; i++) {
        this.allCocktails.push(data.drinks[i]);
      }
    })
  }


  filtrarNombre() {
    this.cocktailsService.getByName(this.name).subscribe(data => {
      this.allCocktails = data.drinks;
    })
  }

  cargarInicio(){
    for (let i = 0; i < 12; i++) {
      this.cocktailsService.getAll().subscribe(data => {
        this.listaCocktails.push(data.drinks[0]);
      })
    }
  }

  ngOnInit(): void {
    this.cargarInicio();

  }

}
