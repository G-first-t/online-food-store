import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { HeaderComponent } from './components/partials/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'foodmine';
}
