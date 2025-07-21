import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-nav',
  imports: [],
  templateUrl: './sub-nav.component.html',
  styleUrl: './sub-nav.component.scss',
  standalone: true
})
export class SubNavComponent {

  constructor(private router: Router) {}

  goToMyBooks() {
    this.router.navigate(['/meus-livros']);
  }
}
