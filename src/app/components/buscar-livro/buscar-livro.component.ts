import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'buscar-livro',
  imports: [ReactiveFormsModule],
  templateUrl: './buscar-livro.component.html',
  styleUrl: './buscar-livro.component.scss',
  standalone: true
})

export class BuscarLivroComponent {
  showResults = false;

  searchResult = [
    { title: 'Livro 1', author: 'Autor 1' },
    { title: 'Livro 2', author: 'Autor 2' },
    { title: 'Livro 3', author: 'Autor 3' }
  ];

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['']
    });
  }

  onSubmit() {
    this.showResults = true;
  }

}
