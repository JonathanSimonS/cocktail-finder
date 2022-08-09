import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: string = "";
  cocktail?: any = {};
  ingredientes: string[] = [];



  constructor(private cocktailService: CocktailsService, private activatedRoute: ActivatedRoute) {
    this.id= this.activatedRoute.snapshot.params['id'];
    this.cocktailService.getById(this.id).subscribe((data)=>
      this.cocktail= data.drinks[0]
      )
  }

  ngOnInit(): void {
    for (let i = 0; i <=14; i++) {
      this.cocktailService.getById(this.id).subscribe(data => {
        this.ingredientes.push(data.drinks[0]['strIngredient' + i] );
      })
  }
  console.log(this.ingredientes)


  }


}
