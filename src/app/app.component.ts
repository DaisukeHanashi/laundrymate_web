import { Component } from '@angular/core';
import { AppRoutingModule } from './app.routes';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AppRoutingModule]
})
export class AppComponent {
  title = 'LaundryMate';
}
