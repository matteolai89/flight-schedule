import { GridHeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGridComponent } from './data-grid.component';

import { RowModule } from './row/row.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FilterPipe } from 'src/app/filter.pipe';
import { HighlighterPipe } from 'src/app/highlight.pipe';

@NgModule({
  declarations: [
    DataGridComponent,
    AutocompleteComponent,
    FilterPipe,
    HighlighterPipe,
  ],
  exports: [DataGridComponent],
  imports: [
    RowModule,
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    GridHeaderModule,
    MatInputModule,
  ],
})
export class DataGridModule {}
