import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Rice, Beans, Meat, Beverage, Dessert } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol{
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 10);
    const beans = new Beans('Feijão', 15);
    const meat = new Meat('Carne', 20);
    this._meal.addProduct(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 10);
    this._meal.addProduct(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 50);
    this._meal.addProduct(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
