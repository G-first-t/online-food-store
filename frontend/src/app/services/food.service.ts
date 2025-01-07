import { Injectable } from '@angular/core';
import {sample_foods} from "../../data";
import {Food} from "../shared/models/food";
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFoods():Food[]{
    return sample_foods;
  }

}
