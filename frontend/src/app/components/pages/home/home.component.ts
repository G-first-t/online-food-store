import {Component, OnInit} from '@angular/core';
import {FoodService} from "../../../services/food.service";
import {Food} from "../../../shared/models/food";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
@Component({
  selector: 'app-home',
    imports: [
        RouterLink,
        NgOptimizedImage,

    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
    foods : Food[]=[];
  constructor(private foodService:FoodService ) {
      this.foods= foodService.getAllFoods();
  }
 ngOnInit() {

 }
}
