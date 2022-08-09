import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {


  url: string = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


  urlIngredient: string = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="

  urlName: string = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="



  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  getByIngredient(ingredient: any): Observable<any> {
    return this.http.get(this.urlIngredient + ingredient)
  }

  getByName(name: any): Observable<any> {
    return this.http.get(this.urlName + name)
  }


 //POSIBLES FUTURAS IMPLEMENTACIONES

  // urlId: string = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

  // getById(id: string): Observable<any>{
  //   return this.http.get(this.urlId + id)
  // }

  // urlAlcoholic: string = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  // urlNonAlcoholic: string = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"

  // getAlcoholics(): Observable<any> {
  //   return this.http.get(this.urlAlcoholic);
  // }

  // getNonAlcoholics(): Observable<any> {
  //   return this.http.get(this.urlNonAlcoholic);
  // }



}
