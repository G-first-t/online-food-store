import {Food} from "./app/shared/models/food";

export const sample_foods:Food[]=[
    {
        id: '1',
        name: 'Doughnut',
        price: 2500,
        tags: ['fast food', 'pizza', 'breakfast'],
        favorite: false,
        stars: 4.0,
        imageUrl: 'assets/doughnut.jpeg',
        origins: ['Italy'],
        cookTime: '50-60',
    },{
        id: '2',
        name: 'Cheeseburger',
        price: 5000,
        tags: ['fast food', 'pizza', 'breakfast','lunch'],
        favorite: false,
        stars: 3.5,
        imageUrl: 'assets/cheeseburger.jpeg',
        origins: ['Italy'],
        cookTime: '50-60',
    },{
        id: '3',
        name: 'Pizza',
        price: 17000,
        tags: ['fast food', 'pizza', 'Dinner'],
        favorite: false,
        stars: 4.2,
        imageUrl: 'assets/pizza.jpeg',
        origins: ['USA'],
        cookTime: '50-60',
    },{
        id: '4',
        name: 'Fries/Chips',
        price: 5000,
        tags: ['fast food', 'Chips', 'lunch'],
        favorite: false,
        stars: 4.0,
        imageUrl: 'assets/fries.jpeg',
        origins: ['USA'],
        cookTime: '50-60',
    },{
        id: '5',
        name: 'meat',
        price: 3000,
        tags: ['slow food','lunch','Dinner'],
        favorite: false,
        stars: 4.0,
        imageUrl: 'assets/meat.jpeg',
        origins: ['Italy'],
        cookTime: '50-60',
    },{
        id: '6',
        name: 'Soup',
        price: 1500,
        tags: ['fast food','breakfast'],
        favorite: false,
        stars: 4.0,
        imageUrl: 'assets/soup.jpeg',
        origins: ['Italy'],
        cookTime: '50-60',
    }


]