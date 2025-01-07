import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private foodService:FoodService ) {
  }
 ngOnInit() {
    return this.foodService.getAllFoods();
 }
}
