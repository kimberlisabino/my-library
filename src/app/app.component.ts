import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { SubNavComponent } from './components/sub-nav/sub-nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SubNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'my-library';

  exibirLayoutCompleto = true;

  constructor(private router: Router) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      this.exibirLayoutCompleto = event.url !== '/';

      if(event.url === '/') {
        document.body.classList.add('home-background');
      } else {
        document.body.classList.remove('home-background');
      }
    });
  }
}
