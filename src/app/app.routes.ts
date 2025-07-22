import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MeusLivrosComponent } from './components/meus-livros/meus-livros.component';
import { BuscarLivroComponent } from './components/buscar-livro/buscar-livro.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'meus-livros',
    component: MeusLivrosComponent
  },

  {
    path: 'buscar-livros',
    component: BuscarLivroComponent
  }
];
