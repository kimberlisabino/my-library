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
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchTerm: ['']
    });
  }

  onSubmit() {
    console.log('Search term:', this.searchForm.value.searchTerm);
  }

}
