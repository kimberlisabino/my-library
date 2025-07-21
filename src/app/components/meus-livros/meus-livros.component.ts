import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SubNavComponent } from '../sub-nav/sub-nav.component';

@Component({
  selector: 'meus-livros',
  imports: [HeaderComponent, SubNavComponent],
  templateUrl: './meus-livros.component.html',
  styleUrl: './meus-livros.component.scss'
})
export class MeusLivrosComponent {

}
