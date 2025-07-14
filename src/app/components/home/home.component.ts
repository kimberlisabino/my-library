import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SubNavComponent } from '../sub-nav/sub-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SubNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
