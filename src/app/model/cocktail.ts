export class Cocktail {
    idDrink: string;
    strDrink: string;
    strAlcoholic: string;
    strDrinkThumb: string;
    strGlass: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strInstructions: string;

    constructor(
        idDrink: string,
        strDrink: string,
        strAlcoholic: string,
        strDrinkThumb: string,
        strGlass: string,
        strIngredient1: string,
        strIngredient2: string,
        strIngredient3: string,
        strIngredient4: string,
        strInstructions: string){
            this.idDrink = idDrink;
            this.strDrink = strDrink;
            this.strAlcoholic = strAlcoholic;
            this.strDrinkThumb = strDrinkThumb;
            this.strGlass = strGlass;
            this.strIngredient1 = strIngredient1;
            this.strIngredient2 = strIngredient2;
            this.strIngredient3 = strIngredient3;
            this.strIngredient4 = strIngredient4;
            this.strInstructions = strInstructions;
    }

}
